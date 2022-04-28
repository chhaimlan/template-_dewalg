<template>
  <div class="container-fluid bg-black">
        <div class="container form pt-1 pb-1 flex-end">
        <!-- <form action="http://localhost:8080/login" id="form" method="post">
            <input type="hidden" name="_token" value="id">
            <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8">
        <input class="username bg-black" type="text" name="username"  placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password"  placeholder="Password" id="password"> -->
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <router-link to="/register"> <a href="#"><input class="register bg-black klavika" type="button" value="DAFTAR"></a></router-link>
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
            <div class="game"><router-link to="/"><a href="login"><img src="assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p></router-link>
            </div>
        </div>
        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp" ><router-link to="/slots"><a href="Slots.vue"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
            </div>
            <div class="game" id="showhb"><router-link to="/hbslots"><a href="Hbslots.vue"><img src="assets/img/logo/habanero.png" alt=""><p>Habanero Play</p></a></router-link>
            </div>
            <div class="game" id="showpg"><router-link to="/pgslots"><a href="Pgslots"><img src="assets/img/logo/pg-logo.png" alt=""><p>PG SLOTS</p></a></router-link>
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
        <!-- End WOWSlider.com BODY section -->
    </div>

    <div class="container">
        <div class="join mt-2">
            <img src="assets/img/banner/join.png" alt="" class="responsive">
        </div>

        <div class="running-text mt-2 br klavika flex space-around bg-black">
            <span class="date">{{currentDateTime()}}</span>
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
                <img src="assets/img/banner/meto.png" alt="">
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
        <!-- footer bar -->
         <!-- <div class="about">
            <ul class="flex-center">
                <li><p><a href="#">Tentang DEWALG</a><span class="line">|</span></p></li>
                <li><p><a href="#">Responsible Gambling</a><span class="line">|</span></p></li>
                <li><p><a href="#">Syarat dan Ketentuan</a><span class="line">|</span></p></li>
                <li><p><a href="#">Pusat Bantuan</a></p></li>
            </ul>
        </div>

        <div class="wording fg tc">
          <h1 style="padding-bottom:1px;">DewaLG Situs Judi Online dan Casino Online Terpercaya Indonesia</h1>
            <p>DewaLG ialah salah satu tempat bermain judi online yang terbilang sudah terpercaya sejak beberapa tahun lalu. Disini kalian bisa menikmati banyak sekali permainan menarik seperti casino online, slot game, bola online, sabung ayam, serta poker. Permainan tersebut terbilang sudah terkenal di Indonesia dan sering dimainkan oleh warga Indonesia. Dengan menggunakan fitur canggih yang dipastikan dapat memberikan sistem permainan yang lebih nyaman serta cepat.</p>
            <h2 style="padding-bottom:1px;">Situs Bola Online dengan Permainan Slot Online Gacor Winrate Tertinggi</h2>
			<p>Dengan bermain disini, kalian akan dipastikan untuk mendapatkan keamanan berkualitas dan permainannya yang 100% adil. Kalian harus mencoba pada permainan bola online ataupun slot online yang dibilang permainan populer di DewaLG. Kami juga menyediakan aplikasi super ringan yang cocok di semua jenis smartphone yang kalian gunakan. Kami akan menjamin bahwa chip kalian tidak akan keboboloan atau dicuri oleh hacker</p>
			<h3 style="padding-bottom:1px;">Situs Casino Online &amp; Slot Online Transaksi Tercepat di Indonesia</h3>
            <p>DewaLG menerima berbagai macam jenis transaksi dari virtual akun, bank lokal, dan juga pulsa selama 24 jam. Jenis transaksi virtual akun yang diterima seperti ovo, gopay, dana, dan linkaja dengan minimal deposit yang minimum. Juga menerima pulsa telkomsel dengan rate tertinggi yang pastinya membuat kalian lebih senang bermain di DewaLG. Kami jamin bahwa transaksi yang kami berikan ini lebih cepat dan aman yang akan membantu performa permainan kalian lebih lancar.</p>
            <p>Kami juga memberikan pelayanan terbaik yang online 24 jam dan siap membantu kalian yang mengalami berbagai masalah saat bermain di DewaLG. Setiap customer service kami terlatih dan dapat dipastikan bisa berbicara menggunakan bahasa indonesia yang benar dan santun. Kami yakin bahwa situs kami inilah yang cocok dan terbaik untuk kalian coba mainkan setiap harinya. Apabila kalian ingin mencoba bermain disini, silahkan di klik menu daftar diatas untuk melakukan pembuatan user id.</p>
        </div>

        <div class="footer klavika flex space-between">
            <div class="logo-footer">
                <p>SERTIFICATE :</p>
                <img src="assets/img/logo/logo-footer.png" alt="">
            </div>
            <div class="bank">
                <p>BANK SUPPORT :</p>
                <div class="banks grid col-5">
                    <div class="bank">
                        <img src="assets/img/bank/green.png" alt="">
                        <img src="assets/img/bank/bca.png" alt="">
                    </div>
                    <div class="bank">
                        <img src="assets/img/bank/green.png" alt="">
                        <img src="assets/img/bank/bri.png" alt="">
                    </div>
                    <div class="bank">
                        <img src="assets/img/bank/green.png" alt="">
                        <img src="assets/img/bank/mandiri.png" alt="">
                    </div>
                    <div class="bank">
                        <img src="assets/img/bank/green.png" alt="">
                        <img src="assets/img/bank/bni.png" alt="">
                    </div>
                    <div class="bank">
                        <img src="assets/img/bank/red.png" alt="">
                        <img src="assets/img/bank/danamon.png" alt="">
                    </div>
                </div>
            </div>
        </div> -->
        <div class="text-footer tc fg">
            <p>Copyright © {{ currentYear }} LG DEWALG Online Game. All rights reserved.</p>
        </div>

    </div>
</div>
<router-view/>
</template>

<script>
export default {
  name: 'Index',
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
//   getAfbSport(){
//     window.location.href = "/sports";        
//     }
}
</script>

<style scoped>

</style>
