<template>
    <div class="container-fluid bg-black">
        <div class="container form pt-1 pb-1 flex-end">
        <!-- <form action="http://localhost:8080/login" id="form" method="post" onsubmit="return check()">
            <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD">
            <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8">
        <input class="username bg-black" type="text" name="username" onfocus="qudiao()"  placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password" onfocus="qudiao()"   placeholder="Password" id="password"> -->
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <router-link to="/register"><a href="Register.vue"><input class="register bg-black klavika" type="button" value="DAFTAR"></a></router-link>
     <!-- </form> -->
    </div>
    </div>

<div class="container-fluid bg-gray main-menu">
    <div class="header container grid">
        <div class="logo">
            <img src="assets/img/logo/logo.png" alt="">
        </div>
        <div class="navigation">
            <ul class="menus flex space-between">
                <li class="menu" data-id="home"><router-link to="/index"><a href="Index.vue"><img src="assets/img/icons/home.png" onmouseover="this.src='assets/img/icons/home-hover.png';" onmouseout="this.src='assets/img/icons/home.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="1"><router-link to="/casino"><a href="Casino.vue"><img src="assets/img/icons/casino.png" onmouseover="this.src='assets/img/icons/casino-hover.png';" onmouseout="this.src='assets/img/icons/casino.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="2"><router-link to="/goslots"><a href="Goslots.vue"><img src="assets/img/icons/slot.png" onmouseover="this.src='assets/img/icons/slot-hover.png';" onmouseout="this.src='assets/img/icons/slot.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="3"><router-link to="/sports"><a href="Sports.vue"><img src="assets/img/icons/sports.png" onmouseover="this.src='assets/img/icons/sports-hover.png';" onmouseout="this.src='assets/img/icons/sports.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/sa"><a href="Sa.vue"><img src="assets/img/icons/sa.png" onmouseover="this.src='assets/img/icons/sa-hover.png';" onmouseout="this.src='assets/img/icons/sa.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/poker"><a href="Poker.vue"><img src="assets/img/icons/poker.png" onmouseover="this.src='assets/img/icons/poker-hover.png';" onmouseout="this.src='assets/img/icons/poker.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/bonus"><a href="Bonus.vue"><img src="assets/img/icons/bonus.png" onmouseover="this.src='assets/img/icons/bonus-hover.png';" onmouseout="this.src='assets/img/icons/bonus.png'" alt=""></a></router-link>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="container-fluid dropdown tc bg-black">
    <div class="container">

        <div class="games grid col-6 klavika" data-id="1" style="display: none;">
            <div class="game"><router-link to="/"><a href="Login.vue"><img src="assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p></router-link>
            </div>

        </div>

        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp"><router-link to="/slots"><a href="Slots.vue"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
            </div>
            <div class="game" id="showhb"><router-link to="/hbslots"><a href="Hbslots.vue"><img src="assets/img/logo/habanero.png" alt=""><p>Habanero Play</p></a></router-link>
            </div>
            <div class="game" id="showpg"><router-link to="/pgslots"><a href="Pgslot.vue"><img src="assets/img/logo/pg-logo.png" alt=""><p>PG SLOTS</p></a></router-link>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="3" style="display: none;">




           <div class="game"><a onclick="getAfbSport()"><img src="assets/img/logo/afb-1.png" alt=""><p>AFB1188</p></a>
            </div>




        </div>

        <div class="games grid col-6 klavika" data-id="4" style="display: none;">
            <div class="game"><a href="#"><img src="assets/img/logo/sv388.png" alt=""><p>SV388</p></a>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="5" style="display: none;">
            <div class="game"><a href="#"><img src="assets/img/logo/pkv.png" alt=""><p>SV388</p></a>
            </div>
        </div>

    </div>
</div>

    <div class="carousel">
        <!-- Start WOWSlider.com BODY section -->
        <div id="wowslider-container1">
            <div class="ws_images">
                <ul>
                    <li><img src="assets/img/slider/slot.png" alt="javascript slider" title="" id="slider1" class="responsive" /></li>
                </ul>
            </div>

        </div>
    </div>

    <div class="container">
        <div class="play mt-4 grid col-6a" id="ppdetail">
            <router-link to="/slots"><a href="Slots.vue"><img src="assets/img/play/pp.png" width="214" height="261" alt="" ></a></router-link>
            <router-link to="/hbslots"><a href="Hbslots.vue"><img src="assets/img/play/hb.png" width="214" height="261" alt=""></a></router-link>
            <router-link to="/pgslots"><a href="Pgslots.vue"><img src="assets/img/play/pgsolt.png" width="214" height="261" alt=""></a></router-link>
        </div>

        <div class="container contacts br bg-black mt-3">
            <ul class="flex space-around">
                <p class="ct"><a href="#">KONTAK KAMI</a></p>
                <li><a href="#"><img src="assets/img/icons/line.png" alt=""><p>DewaLG</p></a></li>
                <li><a href="#"><img src="assets/img/icons/telegram.png" alt=""><p>DewaLG</p></a></li>
                <li><a href="#"><img src="assets/img/icons/whatsapp.png" alt=""><p>+081269200299</p></a></li>
            </ul>
        </div>
    </div>
<div class="container-fluid bg-black mt-3">
    <div class="container">    
        <div class="text-footer tc fg">
            <p>Copyright © {{ Year }} LG DEWALG Online Game. All rights reserved.</p>
        </div>

    </div>
</div>
<router-view/>
</template>

<script>
export default {
    name:'Pgslots',
    data(){
        return{
            Year: new Date().getFullYear()
        }
    },
    // getAfbSport(){
    // window.location.href = "/sports";        
    // }
}
</script>

<style scoped>

</style>