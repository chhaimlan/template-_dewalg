<template>
  <div class="container-fluid bg-black">
         <div class="container form pt-1 pb-1 flex-end">
      <!--  <form action="http://localhost:8080/login" id="form" method="post" onsubmit="return check()">
            <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD">
            <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8">
        <input class="username bg-black" type="text" name="username" onfocus="qudiao()"  placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password" onfocus="qudiao()"   placeholder="Password" id="password"> -->
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <router-link to="/register"><a href="register"><input class="register bg-black klavika" type="button" value="DAFTAR"></a></router-link>
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
                  <li class="menu" data-id="home"><router-link to="/"><a href="#"><img src="assets/img/icons/home.png" onmouseover="this.src='assets/img/icons/home-hover.png';" onmouseout="this.src='assets/img/icons/home.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="1"><router-link to="/casino"><a href="#"><img src="assets/img/icons/casino.png" onmouseover="this.src='assets/img/icons/casino-hover.png';" onmouseout="this.src='assets/img/icons/casino.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="2"><router-link to="/goslots"><a href="#"><img src="assets/img/icons/slot.png" onmouseover="this.src='assets/img/icons/slot-hover.png';" onmouseout="this.src='assets/img/icons/slot.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="3"><router-link to="/sports"><a href="#"><img src="assets/img/icons/sports.png" onmouseover="this.src='assets/img/icons/sports-hover.png';" onmouseout="this.src='assets/img/icons/sports.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/sa"><a href="#"><img src="assets/img/icons/sa.png" onmouseover="this.src='assets/img/icons/sa-hover.png';" onmouseout="this.src='assets/img/icons/sa.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/poker"><a href="#"><img src="assets/img/icons/poker.png" onmouseover="this.src='assets/img/icons/poker-hover.png';" onmouseout="this.src='assets/img/icons/poker.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/bonus"><a href="#"><img src="assets/img/icons/bonus.png" onmouseover="this.src='assets/img/icons/bonus-hover.png';" onmouseout="this.src='assets/img/icons/bonus.png'" alt=""></a></router-link>
                </li>
                <!-- <li class="menu" data-id="home" @mouseover="home_h = true" @mouseout="home_h = false"><router-link to="/index" @click="reloadPage">
                <a href="#">
                    <img v-if="home_h" src="assets/img/icons/home-hover.png" alt="">
                    <img v-else src="assets/img/icons/home.png" alt="">
                </a></router-link>
                </li>
                <li class="menu" data-id="1" @mouseover="casino_h = true" @mouseout="casino_h = false"><router-link to="/casino" @click="reloadPage">
                <a href="#">
                    <img v-if="casino_h" src="assets/img/icons/casino-hover.png" alt="">
                    <img v-else src="assets/img/icons/casino.png" alt="">
                 </a></router-link>
                </li>
                <li class="menu" data-id="2" @mouseover="slot_h = true" @mouseout="slot_h = false"><router-link to="/goslots" @click="reloadPage">
                  <a href="#">
                      <img v-if="slot_h" src="assets/img/icons/slot-hover.png" alt="">
                      <img v-else src="assets/img/icons/slot.png" alt="">
                  </a></router-link>
                </li>
                <li class="menu" data-id="3" @mouseover="sports_h = true" @mouseout="sports_h = false"><router-link to="/sports" @click="reloadPage">
                  <a href="#">
                      <img v-if="sports_h" src="assets/img/icons/sports-hover.png" alt="">
                      <img v-else src="assets/img/icons/sports.png" alt="">
                </a></router-link>
                </li>
                <li class="menu" @mouseover="sa_h = true" @mouseout="sa_h = false"><router-link to="/sa" @click="reloadPage">
                  <a href="#">
                      <img v-if="sa_h" src="assets/img/icons/sa-hover.png" alt="">
                      <img v-else src="assets/img/icons/sa.png" alt="">
                  </a></router-link>
                </li>
                <li class="menu" @mouseover="poker_h = true" @mouseout="poker_h = false"><router-link to="/poker" @click="reloadPage">
                  <a href="#">
                      <img v-if="poker_h" src="assets/img/icons/poker-hover.png" alt="">
                      <img v-else src="assets/img/icons/poker.png" alt="">
                  </a></router-link>
                </li>
                <li class="menu" @mouseover="bonus_h = true" @mouseout="bonus_h = false"><router-link to="/bonus" @click="reloadPage">
                   <a href="#">
                        <img v-if="bonus_h" src="assets/img/icons/bonus-hover.png" alt="">
                        <img v-else src="assets/img/icons/bonus.png" alt="">
                    </a></router-link>
                </li> -->
            </ul>
        </div>
    </div>
</div>

<div class="container-fluid dropdown tc bg-black">
    <div class="container">

        <div class="games grid col-6 klavika" data-id="1" style="display: none;">
            <div class="game"><router-link to="/" @click="reloadPage"><a href="login"><img src="assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p></router-link>
            </div>

        </div>

        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp" ><router-link to="/slots" @click="reloadPage"><a href="#"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
            </div>
            <div class="game" id="showhb"><router-link to="/hbslots" @click="reloadPage"><a href="#"><img src="assets/img/logo/habanero.png" alt=""><p>Habanero Play</p></a></router-link>
            </div>
            <div class="game" id="showpg"><router-link to="/pgslots" @click="reloadPage"><a href="#"><img src="assets/img/logo/pg-logo.png" alt=""><p>PG SLOTS</p></a></router-link>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="3" style="display: none;">
           <div class="game"><a onclick="getAfbSport()"><img src="assets/img/logo/afb-1.png" alt=""><p>AFB1188</p></a>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="4" style="display: none;">
            <div class="game"><router-link to="/" @click="reloadPage"> <a href="login"><img src="assets/img/logo/sv388.png" alt=""><p>SV388</p></a></router-link>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="5" style="display: none;">
            <div class="game"><router-link to="/index" @click="reloadPage"><a href="index"><img src="assets/img/logo/pkv.png" alt=""><p>SV388</p></a></router-link>
            </div>
        </div>

    </div>
</div>

    <div class=" promotion bg-black">
        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="assets/banner/bs1.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>SLOT GAMES</span><p>Promo Rollingan</p></div>
            <div class="detail tc bg-gray-1"></div>
        </div>

        <div class="detail-1 bg-gray-1">
            <h3>Bonus Rollingan Slot Games 0.5% (No Limit): </h3>
            <p> - Minimal Turnover 3.000.000</p>
            <p>- Komisi dibagikan setiap hari Rabu jam 13:00-18:00 wib</p>
            <p>- Syarat dan ketentuan DewaLG Berlaku</p>
            <p> - KEPUTUSAN ADMIN DEWALG ADALAH MUTLAK DAN TIDAK DAPAT DIGANGGU GUGAT</p>
        </div>

        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="assets/banner/bs2.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>ALL GAMES</span><p>BONUS DEPOSIT </p></div>
              <div class="detail tc bg-gray-1"></div>
        </div>
        <div class="detail-1 bg-gray-1">
            <h3>BONUS DEPOSIT 10% ( ALL GAMES )</h3>
            <p>1. Minimal Deposit Rp 100.000</p>
            <p>2. Maksimal Bonus Yang Di dapatkan Rp 300.000</p>
            <p>3. Untuk Withdraw, Turnover harus mencapai 12x dari total bonus deposit + bonus yang di dapatkan Contoh: Deposit 100.000 Bonus yang di dapatkan 10.000 ( 110.000 x 12 = Rp 1.320.000 ) Maka Turnover Harus Mencapai Rp 1.320.000 Jika ingin melakukan withdraw</p>
            <p>4. Jika turnover tidak mencapai target saat melakukan withdraw, maka bonus akan ditarik kembali</p>
            <p>5. Bonus hanya bisa di klaim 1 hari 1x</p>
            <p>6. Bonus ini berlaku untuk semua permainan.</p>
            <p>7. Bonus hanya bisa diclaim melalui Telegram Ataupun Livechat DewaLG</p>
        </div>
        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="assets/banner/bs3.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>CASINO</span><p>BONUS ROLLINGAN CASINO</p></div>
              <div class="detail tc bg-gray-1"></div>
        </div>
        <div class="detail-1 bg-gray-1">
            <h3>BONUS ROLLINGAN CASINO 0.8%</h3>
            <p>1. Minimal Bonus yang diberikan Rp.5.000.</p>
            <p>2. Bonus diberikan kepada member yang mengalami kekalahan.</p>
            <p>3. Apabila ditemukan bermain dengan Safety Bet / Bet Kiri Kanan antar ID dengan IP, No HP, atau Email yang sama, maka Rollingan tidak akan diberikan.
            </p>
            <p>4. Tidak ada syarat untuk Penarikan Withdraw.</p>
        </div>
    </div>

    <div class="container contacts br bg-black mt-3">
        <ul class="flex space-around">
            <p class="ct"><a href="#">KONTAK KAMI</a></p>
            <li><a href="#"><img src="assets/img/icons/line.png" alt=""><p>DewaLG</p></a></li>
            <li><a href="#"><img src="assets/img/icons/telegram.png" alt=""><p>DewaLG</p></a></li>
            <li><a href="#"><img src="assets/img/icons/whatsapp.png" alt=""><p>+081269200299</p></a></li>
        </ul>
    </div>
<div class="container-fluid bg-black mt-3">
    <div class="container">
        <div class="text-footer tc fg">
            <p>Copyright © {{ currenY }} LG DEWALG Online Game. All rights reserved.</p>
        </div>
    </div>
</div>
<router-view />
</template>
<script>
export default {
  name:'Bonus',
  data(){
      return{
          //click: false,
          home_h: false,
          casino_h:false,
          sports_h:false,
          slot_h:false,
          sa_h:false,
          bonus_h:false,
          poker_h:false,
          currenY: new Date().getFullYear()
      }
  },
     
   methods: {
      reloadPage() {   
      window.location.reload();      
    }    
 }
}
</script>

<style scoped>

</style>
