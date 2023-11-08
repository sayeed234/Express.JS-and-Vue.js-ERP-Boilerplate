const jwt = require('jsonwebtoken')
const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username, emid } = decoded;
        req.id = id;
        req.username = username;
        req.emid = emid;
        next();
    } catch {
        next("Authentication Failure");
    }
}
module.exports = checkLogin;