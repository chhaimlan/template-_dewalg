<template>
    <div class="container-fluid bg-black">
        <div class="container form pt-1 pb-1 flex-end">
        <!-- <form action="http://localhost:8080/login" id="form" method="post" onsubmit="return check()">
            <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD">
            <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8">
        <input class="username bg-black" type="text" name="username" onfocus="qudiao()"  placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password" onfocus="qudiao()"   placeholder="Password" id="password"> -->
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <router-link to="/register">
        <a href="#">            
          <input class="register bg-black klavika" type="button" value="DAFTAR">      
        </a>
        </router-link>
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
                <li class="menu" data-id="home"><router-link to="/"><a href="login"><img src="assets/img/icons/home.png" onmouseover="this.src='assets/img/icons/home-hover.png';" onmouseout="this.src='assets/img/icons/home.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="1"><router-link to="/casino"><a href="casino"><img src="assets/img/icons/casino.png" onmouseover="this.src='assets/img/icons/casino-hover.png';" onmouseout="this.src='assets/img/icons/casino.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="2"><router-link to="goslots"> <a href="goslots"><img src="assets/img/icons/slot.png" onmouseover="this.src='assets/img/icons/slot-hover.png';" onmouseout="this.src='assets/img/icons/slot.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="3"><router-link to="/sports"> <a href="sports"><img src="assets/img/icons/sports.png" onmouseover="this.src='assets/img/icons/sports-hover.png';" onmouseout="this.src='assets/img/icons/sports.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/sa"> <a href="sa"><img src="assets/img/icons/sa.png" onmouseover="this.src='assets/img/icons/sa-hover.png';" onmouseout="this.src='assets/img/icons/sa.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/poker"> <a href="poker"><img src="assets/img/icons/poker.png" onmouseover="this.src='assets/img/icons/poker-hover.png';" onmouseout="this.src='assets/img/icons/poker.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/bonus"> <a href="bonus"><img src="assets/img/icons/bonus.png" onmouseover="this.src='assets/img/icons/bonus-hover.png';" onmouseout="this.src='assets/img/icons/bonus.png'" alt=""></a></router-link>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="container-fluid dropdown tc bg-black">
    <div class="container">

        <div class="games grid col-6 klavika" data-id="1" style="display: none;">
            <div class="game"><router-link to="/"> <a href="login"><img src="assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p></router-link>
            </div>

        </div>

        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp"><router-link to="/slots"> <a href="#"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
            </div>
            <div class="game" id="showhb"> <router-link to="/hbslots"> <a href="#"><img src="assets/img/logo/habanero.png" alt=""><p>Habanero Play</p></a></router-link>
            </div>
            <div class="game" id="showpg"><router-link to="/pgslots"> <a href="#"><img src="assets/img/logo/pg-logo.png" alt=""><p>PG SLOTS</p></a></router-link>
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
                    <li><img src="assets/banner/b1.jpg" alt="javascript slider" title="" id="slider1" class="responsive" /></li>
                    <li><img src="assets/banner/b2.jpg" alt="javascript slider" title="" id="slider2" class="responsive" /></li>
                    <li><img src="assets/banner/b3.jpg" alt="javascript slider" title="" id="slider3" class="responsive"/></li>
                    <li><img src="assets/banner/b2.jpg" alt="javascript slider" title="" id="slider4" class="responsive"/></li>
                </ul>
            </div>
            <div class="ws_bullets"><div>
                    <a href="#" title="Casino"><span>1</span></a>
                    <a href="#" title="Slot"><span>2</span></a>
                    <a href="#" title="Sports"><span>3</span></a>
                    <a href="#" title="Poker"><span>4</span></a>
                </div></div><div class="ws_script" style="position:absolute;left:-99%"></div>
            <div class="ws_shadow"></div>
        </div>     
    </div>

    <div class="container">
        <div class="join mt-2">
            <img src="assets/img/banner/join.png" alt="" class="responsive">
        </div>

        <div class="running-text mt-2 br klavika flex space-around bg-black">
            <span class="date"> {{currentDateTime()}}</span>
            <img src="assets/img/icons/info.png" alt="">
            <marquee scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();" id="noticeHtml">Selamat Datang di Situs LGCASINO</marquee>
        </div>

        <div class="gaming grid mt-2">
            <div class="jackpot">
                <p>123.456.789,00</p>
            </div>

            <div class="banner-mid mt-2">
                <a href="#"><img src="assets/banner/showh.png" alt=""></a>
            </div>

            <div class="winner-slots br bg-black">
                <p class="win klavika">PEMENANG SLOT</p>
                <div class="winners br grid bg-gray">
                    <div class="win-1">
                        <a href="#"><img src="assets/img/banner/winner-slots1.png" alt=""></a>
                    </div>
                    <div class="win-2 klavika">
                        <p>lemp****9</p>
                        <p>IDR <span class="idr">448.00</span></p>
                        <p>Colossal Gems</p>
                    </div>
                </div>

                <div class="winners br grid bg-gray">
                    <div class="win-1">
                        <a href="#"><img src="assets/img/banner/winner-slots2.png" alt=""></a>
                    </div>
                    <div class="win-2 klavika">
                        <p>lemp****9</p>
                        <p>IDR <span class="idr">448.00</span></p>
                        <p>Star Bounty</p>
                    </div>
                </div>

                <div class="winners br grid bg-gray">
                    <div class="win-1">
                        <a href="#"><img src="assets/img/banner/winner-slots1.png" alt=""></a>
                    </div>
                    <div class="win-2 klavika">
                        <p>lemp****9</p>
                        <p>IDR <span class="idr">448.00</span></p>
                        <p>Colossal Gems</p>
                    </div>
                </div>

                <div class="winners br grid bg-gray">
                    <div class="win-1">
                        <a href="#"><img src="assets/img/banner/winner-slots2.png" alt=""></a>
                    </div>
                    <div class="win-2 klavika">
                        <p>lemp****9</p>
                        <p>IDR <span class="idr">448.00</span></p>
                        <p>Star Bounty</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="brand-power mt-3 grid">
            <div class="withdraw br bg-black">
                <table>
                    <tr>
                        <th colspan="3">PENARIKAN DANA</th>
                    </tr>
                    <tr>
                        <td class="fg">q9ysh***lb</td>
                        <td class="fg">8-28 22:20</td>
                        <td>954377</td>
                    </tr>
                    <tr>
                        <td class="fg">wtejp***ts</td>
                        <td class="fg">8-28 22:42</td>
                        <td>407269</td>
                    </tr>
                    <tr>
                        <td class="fg">iagnh***qb</td>
                        <td class="fg">8-28 22:06</td>
                        <td>121726</td>
                    </tr>
                    <tr>
                        <td class="fg">z79sn***3k</td>
                        <td class="fg">8-28 22:20</td>
                        <td>954377</td>
                    </tr>
                    <tr>
                        <td class="fg">8gk1v***7t</td>
                        <td class="fg">8-28 22:34</td>
                        <td>173097</td>
                    </tr>
                    <tr>
                        <td class="fg">xxd92***uu</td>
                        <td class="fg">8-28 22:40</td>
                        <td>115160</td>
                    </tr>
                    <tr>
                        <td class="fg">mftdv***s4</td>
                        <td class="fg">8-28 22:07</td>
                        <td>586009</td>
                    </tr>
                </table>
            </div>

            <div class="service br bg-black">
                <h2>KEUNGGULAN LAYANAN</h2>
                <div class="text">
                    <div class="tx">
                        <h3>PENARIKAN</h3>
                        <div class="average flex space-between">
                            <p>PERKIRAAN WAKTU</p>
                            <p><span class="min">5</span> MIN</p>
                        </div>
                    </div>
                    <div class="service-img tc">
                        <img src="assets/img/icons/dp-wd.png" alt="">
                    </div>
                </div>

                <div class="text">
                    <div class="tx">
                        <h3>SETORAN</h3>
                        <div class="average flex space-between">
                            <p>PERKIRAAN WAKTU</p>
                            <p><span class="min">5</span> MIN</p>
                        </div>
                    </div>
                    <div class="service-img tc">
                        <img src="assets/img/icons/dp-wd.png" alt="">
                    </div>
                </div>

                <div class="tx-2">
                    <p class="fg">*The above average time for deposit and withdrawal is for reference only.</p>
                    <p class="fg">*Except during bank maintenance, please consult online customer service for details.</p>
                </div>
            </div>

            <div class="payment br tc bg-black">
                <h2>METODE PEMBAYARAN</h2>
                <img src="assets/img/banner/payment-methode.png" alt="">
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
    </div>
<div class="container-fluid bg-black mt-3">
    <div class="container">    
        <div class="text-footer tc fg">
            <p id="fullyear">Copyright © {{ currentYear }} LG DEWALG Online Game. All rights reserved.<router-link to="/sliderimg">Slider Images</router-link> </p>
        </div>

    </div>
</div>
<router-view/>
</template>

<script>
export default {
    name:'Login',
     data() {
    return {
      currentYear: new Date().getFullYear(), 
    }
  },
    methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+' - '+(current.getMonth()+1)+' -'+current.getDate();
      const time = current.getHours() + " : " + current.getMinutes() + " : " + current.getSeconds();
      const dateTime = date +' '+ time;

      return dateTime;
    }
  }, 
       
}
</script>

<style scoped>

</style>