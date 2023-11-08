<template>
<div>
  <!-- <footer class="site-footer fixed-bottom">
    <div class="container">
      <div class="row">
        <div class="footer_copy">
            <div class="container">
                <div class="column one">
                    <div class="copyright">
                        © MYTV Bangladesh. All Rights Reserved. Developed by <a target="_blank" href="#">MYTV IT</a> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</footer> -->
      </div>
</template>

<script>

</script>

<style >
.kjkj{
   transition: left 5s cubic-bezier(.5, -1, .5, 2);
}

@keyframes myfirst
{
    0%      {background:rgb(11, 230, 200);}
    25%     {background:rgb(0, 98, 255);}
    75%     {background:rgb(255, 60, 0);}
    100%    {background:rgb(30, 255, 0);}
}
.rainbow-1{
   background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 5s linear infinite;
   color: azure;
}
@keyframes slidebg {
  to {
    background-position:20vw;
  }
}
.vl {
  border-left: 2px solid green;
  height: 100px;
}
.cl{
  color:#e8ebea;
}
.kj{
  color:white
}
.hi{
    color:#bb2124;
    height:30px;
}
.g{
    height:130px;
    width:140px;
}
.jkh{
    text-align:left;
    color: ghostwhite;
}
.footer{
color:white;
background-color: #4BB543

}

.jjh a{
    color:ghostwhite;
}
.jjh a:hover{
    text-decoration: none;
    color:#030504;
}
.l{
       color:#ffffff;
       font-weight:bold;
}
.kjk{
    background-color: slategrey;
}
footer {
  background: #0ed1c7;
  background: -webkit-linear-gradient(59deg, #26d684, #32c3d6);
  background: linear-gradient(59deg, #18c9ba, #0598b3);
  color: white;
 
}

footer a {
  color: #fff;
  font-size: 14px;
  transition-duration: 0.2s;
}

footer a:hover {
  color: #FA944B;
  text-decoration: none;
}

.copy {
  font-size: 12px;
  padding: 10px;
  border-top: 1px solid #FFFFFF;
}

.footer-middle {
  padding-top: 2em;
  color: white;
}
  .navsa{
  box-shadow:
 0 1px 4px rgba(46, 46, 46, 0.3), 0 0 40px rgba(238, 240, 240, 0.959) inset;

}
 .hht{
   margin-top:10px;
 } 
.nav-link:hover{
  color:rgb(218, 35, 59)!important;
}
.cla{
  color:rgb(61, 138, 112)
}
.gh{
  color:rgb(48, 122, 98);
  text-align:left;
}
 .site-footer
{
  background-color:#10b885;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#ffffff;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#ffffff;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#ffffff
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#37bebe
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
</style>