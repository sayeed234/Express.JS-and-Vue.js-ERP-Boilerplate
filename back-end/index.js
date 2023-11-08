const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const multer = require('multer')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const app = express();


app.use(express.json());
dotenv.config()
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytverp'
});


connection.connect();

app.get('/api/user', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    })
})


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.PNG')
    }
})

var upload = multer({ storage: storage });

app.post('/api/user', upload.single("file"), async function (req, res) {
    var data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        nid: req.body.nid,
        address: req.body.address,
        status: req.body.status,
        password: await bcrypt.hash(req.body.password, 10),
        image: req.file.filename
    }
    connection.query('INSERT INTO users SET ?', data, function (err, rows, fields) {
        if (err)
            throw err;
        res.send('Successfully Created');
    });
});


app.get('/api/user-edit/:id', (req, res) => {
    connection.query('SELECT * FROM users WHERE id= ?', [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    })
})

app.put('/api/user-update', upload.single("file"), function (req, res) {
    const id = req.body.id
    connection.query('SELECT * FROM users WHERE id= ? ', id, async function (err, rows, fields) {
        if (rows[0]) {           
        if (!req.body.password) {
            var pass = rows[0].password;
        } else {
            var pass = await bcrypt.hash(req.body.password, 10);
        }

        if (!req.file) {
            var img = rows[0].image;
        } else {
            var img = req.file.filename;
        }
            console.log(req.body.status);
        var data = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            nid: req.body.nid,
            address: req.body.address,
            status: req.body.status,
            password: pass,
            image: img,
        }
        connection.query('UPDATE users SET ? WHERE id= ? ', [data, id], function (err, rows, fields) {
            res.status(200).json({
                "message": "User Successfully Updated"
            });
        });
        } else {
            res.status(404).json({
                "message": "User Cannot Found"
            });
        }
        });    
       
});


app.post('/api/login', function (req, res) {
    try {
        if (!req.body.eid || !req.body.password) {
            res.status(401).json({
                "message": "Something Wrong"
            });
        } else {
            const eid = req.body.eid;
            const pass = req.body.password;
            connection.query('SELECT * FROM users WHERE nid = ?', eid, async function (err, rows, fields) {
                if (!rows[0]) {
                    res.status(402).json({
                        "message": "Employee ID Cannot Found"
                    });
                } else {
                    const password = rows[0].password;
                    if (password && pass) {
                        const validPassword = await bcrypt.compare(pass, password);
                        if (validPassword) {
                            const token = jwt.sign({
                                username: rows[0].name,
                                emid: rows[0].nid,
                                id: rows[0].id,
                            }, process.env.JWT_SECRET, {
                                expiresIn: '1h'
                            })
                            res.setHeader('Authorization', 'Bearer ' + token);
                            res.status(200).json({
                                "access_token": token,
                                "message": "Login Successful"
                            })

                        } else {
                            res.status(401).json({
                                "message": "Password Wrong"
                            });
                        }
                    } else {
                        res.status(401).json({
                            "message": "Please Enter Password "
                        });
                    }
                }

            });
        }
    } catch {
        res.status(401).json({
            "message": "Something Wrong"
        });
    }
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});