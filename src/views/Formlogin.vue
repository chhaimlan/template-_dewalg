<template>
     <div class="page-wraper">
         <div class="page-body">
             <div :style="image" class="content-formlogin">
                 <div class="login-wraper">
                      <div class="logo-log">
                          <img src="assets/img/logo/logo.png" alt="">
                      </div>
                      <div class="input-group">
                         <div class="input-row">
                              <div class="input-view">
                                  <i class="fa fa-user" aria-hidden="true"></i>
                                  <input type="text" placeholder="username">
                              </div>
                              <div class="input-view">
                                  <i class="fa fa-lock" aria-hidden="true"></i>
                                  <input type="password" placeholder="password">
                              </div>
                         </div>
                         <div class="btn-row">
                             <div :style="btnImg" class="botton-login">
                               <router-link to="/index">
                                  <a href="index"><p>Login</p></a>
                               </router-link>
                             </div>                             
                         </div>
                         <div class="btn-row">
                             <div :style="btnImg" class="botton-login">   
                                 <router-link to="/register">                        
                                  <a href="register"><p>Register</p></a>
                                 </router-link>  
                             </div>
                         </div>
                      </div>
                 </div>
                 <div class="footer-bottom">
                    <div :style="footerImg"  class="botom-menu">
                        <div class="footer-menu">
                            <img src="assets/images/home.png" alt="">
                        </div>
                        <div class="footer-menu">
                            <img src="assets/images/promo.png" alt="">
                        </div>
                        <div class="footer-menu">
                            <img src="assets/images/livechat.png" alt="">
                        </div>
                        <div class="footer-menu">
                            <img src="assets/images/contactus.png" alt="">
                        </div>
                        <div class="footer-menu">
                            <img src="assets/images/whatsapp.png" alt="">
                        </div>
                    </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
    name:'Formlogin',
    data() {
     return {
          image: {backgroundImage: "url(assets/img/banner/background.png)"},
          btnImg:{backgroundImage: "url(assets/img/banner/button_login.png)"},
          footerImg:{backgroundImage: "url(assets/img/banner/nav-footer.png)"}
         };
      }
}
</script>
 
<style scoped>

.botton-login{
  background-repeat: no-repeat 50%;
}
.page-wraper{
    top: 20%;
    display: block;
    height: 100%;
    position: relative;
}
.page-body {    
    display: block;
    box-sizing: border-box;
    width: 100%;
}
.content-formlogin{
    top: 880%;
    position: relative;
    height: 100%;    
    background-size: 100% 100%;
     /* background-size: cover; */
    background-position: 50%;
   
}
.login-wraper{
    position: absolute;
    /* top: 900%; */
    top: 35%;
    left: 50%;
    -webkit-transform: translate(-50%,-25%);
    transform: translate(-50%,-25%);
    width: 80%;
}
.logo-log{
    text-align: center;
}

.input-row{
   display: inline-block; 
   
}
.input-view{
     display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    -webkit-box-flex: 1;
    flex: 1;
    height: 52px;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    border: solid .5px #fc9;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 95%;
}
.input-view i{
    margin: 0px 5px 0px 5px;
    color: #fc9;
   
}
.input-view input{
    border: none;
    background-color: #000;
    width: 100%;
    height: 45px;
}
.botton-login{
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    line-height: 2.55555556;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    color: #000;    
    cursor: pointer;
    color: #333;
    font-size: 20px;
    width: 200px;
    border-radius: 13px;
}
.btn-row{
    margin-bottom: 10px;
}

.botton-login p{
    position: relative;
    border: none;
    font-size: 20px;
    border-radius: 13px;
}


.footer-bottom{
    display: inline-block;  
    height: 50rem;
}
.botom-menu{
    display: flex; 
    justify-content: space-evenly;  
    position: fixed;
    bottom: 0px;
    width: 90rem;
    padding: 0px 0px 0px 150px;
    
}
.botom-menu .footer-menu{
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: cover;    
    height: 3rem;
    width: 100%;
}

.footer-menu img{
    bottom: 5px;
    position: relative;
    height: 50px;  
    padding: 10px 0px 0px 0px; 
}
@media only screen and (max-width: 1200px) {
   .logo-log{
       margin-bottom: 20px;
   }
   .input-view {
        margin-left: 70%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 75rem;
        max-width: 100%;
        padding: 0px 0px 0px 130px;
    }
}
@media only screen and (max-width: 999px) {
   .logo-log{
       margin-bottom: 20px;
   }
   .input-view {
        margin-left: 53%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 63rem;
        max-width: 100%;
        padding: 0px 0px 0px 110px;
    }
}
@media only screen and (max-width: 800px) {
   .logo-log{
       margin-bottom: 20px;
   }
   .input-view {
        margin-left: 30%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 63rem;
        max-width: 100%;
        padding: 0px 0px 0px 110px;
    }
}
@media only screen and (max-width: 500px) {
   .logo-log{
       margin-bottom: 20px;
   }
   .input-view {
        margin-left: 0%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 32rem;
        max-width: 100%;
        padding: 0px 0px 0px 30px;
    }
}
@media only screen and (max-width: 600px) {
   .logo-log{
       margin-bottom: 20px;
   }
   .input-view {
        margin-left: 10%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 38rem;
        max-width: 100%;
        padding: 0px 0px 0px 30px;
    }
}
@media only screen and (max-width: 530px) {
    .input-view {
        margin-left: 5%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 33rem;
        padding: 0px 0px 0px 40px;
    }
}
@media only screen and (max-width: 400px) {
    .input-view {
        margin-left: 0%;
    }
    .footer-bottom{
        padding: 0px;
    }
    .botom-menu{
        width: 400px;
        padding: 0px 0px 0px 25px;
    }
}


</style>