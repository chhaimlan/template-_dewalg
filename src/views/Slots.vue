<template>
     <div class="container-fluid bg-black">
        <div class="container form pt-1 pb-1 flex-end">
            <!-- <form action="http://localhost:8080/login" id="form" method="post" onsubmit="return check()">
                <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD" />
                <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8" />
                <input class="username bg-black" type="text" name="username" onfocus="qudiao()" placeholder="Username"
                    id="username" />
                <input class="password bg-black" type="password" name="password" onfocus="qudiao()"
                    placeholder="Password" id="password" /> -->
                <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK" /></a>
               <router-link to="/register"><a href="Register.html"><input class="register bg-black klavika" type="button" value="DAFTAR" /></a></router-link>
            <!-- </form> -->
        </div>
    </div>
    <div class="container-fluid bg-gray main-menu">
        <div class="header container grid">
            <div class="logo">
                <img src="assets/img/logo/logo.png" alt="" />
            </div>
            <div class="navigation">
                <ul class="menus flex space-between">
                   <li class="menu" data-id="home"><router-link to="/"><a href="Login.vue"><img src="assets/img/icons/home.png" onmouseover="this.src='assets/img/icons/home-hover.png';" onmouseout="this.src='assets/img/icons/home.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="1"><router-link to="/casino"><a href="Casino.vue"><img src="assets/img/icons/casino.png" onmouseover="this.src='assets/img/icons/casino-hover.png';" onmouseout="this.src='assets/img/icons/casino.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="2"><router-link to="goslots"> <a href="Goslots.vue"><img src="assets/img/icons/slot.png" onmouseover="this.src='assets/img/icons/slot-hover.png';" onmouseout="this.src='assets/img/icons/slot.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="3"><router-link to="/sports"> <a href="Sports.vue"><img src="assets/img/icons/sports.png" onmouseover="this.src='assets/img/icons/sports-hover.png';" onmouseout="this.src='assets/img/icons/sports.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/sa"> <a href="Sa.vue"><img src="assets/img/icons/sa.png" onmouseover="this.src='assets/img/icons/sa-hover.png';" onmouseout="this.src='assets/img/icons/sa.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/poker"> <a href="Poker.vue"><img src="assets/img/icons/poker.png" onmouseover="this.src='assets/img/icons/poker-hover.png';" onmouseout="this.src='assets/img/icons/poker.png'" alt=""></a></router-link>
                </li>
                <li class="menu"><router-link to="/bonus"> <a href="Bonus.vue"><img src="assets/img/icons/bonus.png" onmouseover="this.src='assets/img/icons/bonus-hover.png';" onmouseout="this.src='assets/img/icons/bonus.png'" alt=""></a></router-link>
                </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container-fluid dropdown tc bg-black">
        <div class="container">
            <div class="games grid col-6 klavika" data-id="1" style="display: none">
                <div class="game">
                    <router-link to="/"><a href="login"><img src="assets/img/logo/lg-casino.png" alt="" /></a>
                    <p>LG88</p>
                    </router-link>
                </div>
            </div>
            <div class="games grid col-6 klavika" data-id="2" style="display: none">
                <div class="game" id="showpp">
                  <router-link to="/slots"><a href="Slots.vue"><img src="assets/img/logo/pragmatic.png" alt="" />
                        <p>Pragmatic Play</p>
                    </a></router-link>
                </div>
                <div class="game" id="showhb">
                    <router-link to="/hbslots">
                    <a href="Hbslots.vue"><img src="assets/img/logo/habanero.png" alt="" />
                        <p>Habanero Play</p>
                    </a></router-link>
                </div>
                <div class="game" id="showpg">
                    <router-link to="/pgslots">
                    <a href="Pgslot.vue"><img src="assets/img/logo/pg-logo.png" alt="" />
                        <p>PG SLOTS</p>
                    </a></router-link>
                </div>
            </div>

            <div class="games grid col-6 klavika" data-id="3" style="display: none">
                <div class="game">
                    <a onclick="getAfbSport()"><img src="assets/img/logo/afb-1.png" alt="" />
                        <p>AFB1188</p>
                    </a>
                </div>
            </div>

            <div class="games grid col-6 klavika" data-id="4" style="display: none">
                <div class="game">
                    <router-link to="/login">
                    <a href="Login.vue"><img src="assets/img/logo/sv388.png" alt="" />
                        <p>SV388</p>
                    </a></router-link>
                </div>
            </div>

            <div class="games grid col-6 klavika" data-id="5" style="display: none">
                <div class="game">
                    <router-link to="/index">
                    <a href="Index.vue"><img src="assets/img/logo/pkv.png" alt="" />
                        <p>SV388</p>
                    </a></router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="container form pt-1 pb-1 flex-end">
            <input class="username bg-black" type="text" name="slot_name" id="slot_name" value=""
                placeholder="Please enter the slots name" />
            <input class="vx klavika" type="button" value="Search" @click="goSlotPp()" />
        </div>
          
         <div class="play mt-4 grid col-6a" style="height: 1000px; width: 1500px; overflow-y: auto">
              <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('vs20olympgate')">
                        <img src="assets/200/vs20olympgate.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
                </div>
                 <div class="play mt-4 grid col-6a">
                    <a href="#" oneclick="toGame('vs20doghouse')">
                        <img src="assets/200/vs20doghouse.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
                 </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20fruitsw')">
                        <img src="assets/200/vs20fruitsw.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20tweethouse')">
                        <img src="assets/200/vs20tweethouse.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243lionsgold')">
                        <img src="assets/200/vs243lionsgold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5aztecgems')">
                        <img src="assets/200/vs5aztecgems.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysdogs')">
                        <img src="assets/200/vswaysdogs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20sbxmas')">
                        <img src="assets/200/vs20sbxmas.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40wildwest')">
                        <img src="assets/200/vs40wildwest.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20starlight')">
                        <img src="assets/200/vs20starlight.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20hburnhs')">
                        <img src="assets/200/vs20hburnhs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20bonzgold')">
                        <img src="assets/200/vs20bonzgold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysrhino')">
                        <img src="assets/200/vswaysrhino.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs4096bufking')">
                        <img src="assets/200/vs4096bufking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20pbonanza')">
                        <img src="assets/200/vs20pbonanza.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10fruity2')">
                        <img src="assets/vs10fruity2.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5joker')">
                        <img src="assets/200/vs5joker.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayslions')">
                        <img src="assets/200/vswayslions.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20bermuda')">
                        <img src="assets/200/vs20bermuda.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs9aztecgemsdx')">
                        <img src="assets/200/vs9aztecgemsdx.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10firestrike')">
                        <img src="assets/200/vs10firestrike.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysmadame')">
                        <img src="assets/200/vswaysmadame.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20xmascarol')">
                        <img src="assets/200/vs20xmascarol.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs7776aztec')">
                        <img src="assets/200/vs7776aztec.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25scarabqueen')">
                        <img src="assets/200/vs25scarabqueen.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysbufking')">
                        <img src="assets/200/vswaysbufking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs15diamond')">
                        <img src="assets/200/vs15diamond.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20goldfever')">
                        <img src="assets/200/vs20goldfever.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20fruitparty')">
                        <img src="assets/200/vs20fruitparty.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10nudgeit')">
                        <img src="assets/200/vs10nudgeit.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20vegasmagic')">
                        <img src="assets/200/vs20vegasmagic.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10amm')">
                        <img src="assets/200/vs10amm.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayshammthor')">
                        <img src="assets/200/vswayshammthor.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5ultra')">
                        <img src="assets/200/vs5ultra.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs7fire88')">
                        <img src="assets/200/vs7fire88.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayssamurai')">
                        <img src="assets/200/vswayssamurai.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20phoenixf')">
                        <img src="assets/200/vs20phoenixf.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysaztecking')">
                        <img src="assets/200/vswaysaztecking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25mustang')">
                        <img src="assets/200/vs25mustang.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25pandagold')">
                        <img src="assets/200/vs25pandagold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20chickdrop')">
                        <img src="assets/200/vs20chickdrop.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20terrorv')">
                        <img src="assets/200/vs20terrorv.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayslight')">
                        <img src="assets/200/vswayslight.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10bbbonanza')">
                        <img src="assets/200/vs10bbbonanza.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20trsbox')">
                        <img src="assets/200/vs20trsbox.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20eightdragons')">
                        <img src="assets/200/vs20eightdragons.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20rhinoluxe')">
                        <img src="assets/200/vs20rhinoluxe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs12bbb')">
                        <img src="assets/200/vs12bbb.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25aztecking')">
                        <img src="assets/200/vs25aztecking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs75empress')">
                        <img src="assets/200/vs75empress.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20rhino')">
                        <img src="assets/200/vs20rhino.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10floatdrg')">
                        <img src="assets/200/vs10floatdrg.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10egyptcls')">
                        <img src="assets/200/vs10egyptcls.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20midas')">
                        <img src="assets/200/vs20midas.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25rio')">
                        <img src="assets/200/vs25rio.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1024lionsd')">
                        <img src="assets/200/vs1024lionsd.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40pirate')">
                        <img src="assets/200/vs40pirate.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs576treasures')">
                        <img src="assets/200/vs576treasures.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs75bronco')">
                        <img src="assets/200/vs75bronco.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1024temuj')">
                        <img src="assets/200/vs1024temuj.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs432congocash')">
                        <img src="assets/200/vs432congocash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25chilli')">
                        <img src="assets/200/vs25chilli.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1dragon8')">
                        <img src="assets/200/vs1dragon8.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243fortune')">
                        <img src="assets/200/vs243fortune.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10cowgold')">
                        <img src="assets/200/vs10cowgold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20fparty2')">
                        <img src="assets/200/vs20fparty2.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25pyramid')">
                        <img src="assets/200/vs25pyramid.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1money')">
                        <img src="assets/200/vs1money.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysbankbonz')">
                        <img src="assets/200/vswaysbankbonz.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1fortunetree')">
                        <img src="assets/200/vs1fortunetree.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25gldox')">
                        <img src="assets/200/vs25gldox.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25hotfiesta')">
                        <img src="assets/200/vs25hotfiesta.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25goldpig')">
                        <img src="assets/200/vs25goldpig.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20magicpot')">
                        <img src="assets/200/vs20magicpot.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243lions')">
                        <img src="assets/200/vs243lions.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25wildspells')">
                        <img src="assets/200/vs25wildspells.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs9piggybank')">
                        <img src="assets/200/vs9piggybank.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25mmouse')">
                        <img src="assets/200/vs25mmouse.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243chargebull')">
                        <img src="assets/200/vs243chargebull.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243mwarrior')">
                        <img src="assets/200/vs243mwarrior.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('cs5triple8gold')">
                        <img src="assets/200/cs5triple8gold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20kraken')">
                        <img src="assets/200/vs20kraken.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243caishien')">
                        <img src="assets/vs243caishien.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayschilheat')">
                        <img src="assets/200/vswayschilheat.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1masterjoker')">
                        <img src="assets/200/vs1masterjoker.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25wolfgold')">
                        <img src="assets/200/vs25wolfgold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayscryscav')">
                        <img src="assets/200/vswayscryscav.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs50juicyfr')">
                        <img src="assets/200/vs50juicyfr.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswaysyumyum')">
                        <img src="assets/200/vswaysyumyum.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs576hokkwolf')">
                        <img src="assets/200/vs576hokkwolf.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20daydead')">
                        <img src="assets/200/vs20daydead.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40spartaking')">
                        <img src="assets/200/vs40spartaking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243fortseren')">
                        <img src="assets/200/vs243fortseren.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10eyestorm')">
                        <img src="assets/200/vs10eyestorm.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1024dtiger')">
                        <img src="assets/200/vs1024dtiger.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25asgard')">
                        <img src="assets/200/vs25asgard.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20emptybank')">
                        <img src="assets/200/vs20emptybank.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20wildboost')">
                        <img src="assets/200/vs20wildboost.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5drhs')">
                        <img src="assets/200/vs5drhs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10bookoftut')">
                        <img src="assets/200/vs10bookoftut.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10luckcharm')">
                        <img src="assets/200/vs10luckcharm.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1600drago')">
                        <img src="assets/200/vs1600drago.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayswest')">
                        <img src="assets/200/vswayswest.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10goldfish')">
                        <img src="assets/200/vs10goldfish.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10wildtut')">
                        <img src="assets/200/vs10wildtut.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40pirgold')">
                        <img src="assets/200/vs40pirgold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25jokerking')">
                        <img src="assets/200/vs25jokerking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayswerewolf')">
                        <img src="assets/200/vswayswerewolf.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10returndead')">
                        <img src="assets/200/vs10returndead.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25newyear')">
                        <img src="assets/200/vs25newyear.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1tigers')">
                        <img src="assets/200/vs1tigers.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs243dancingpar')">
                        <img src="assets/200/vs243dancingpar.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vswayshive')">
                        <img src="assets/200/vswayshive.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25goldrush')">
                        <img src="assets/200/vs25goldrush.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10mayangods')">
                        <img src="assets/200/vs10mayangods.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40voodoo')">
                        <img src="assets/200/vs40voodoo.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10threestar')">
                        <img src="assets/200/vs10threestar.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5super7')">
                        <img src="assets/200/vs5super7.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20ekingrr')">
                        <img src="assets/200/vs20ekingrr.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25samurai')">
                        <img src="assets/200/vs25samurai.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs50chinesecharms')">
                        <img src="assets/200/vs50chinesecharms.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5spjoker')">
                        <img src="assets/200/vs5spjoker.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1ball')">
                        <img src="assets/200/vs1ball.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs10madame')">
                        <img src="assets/200/vs10madame.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25tigerwar')">
                        <img src="assets/200/vs25tigerwar.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs5ultrab')">
                        <img src="assets/200/vs5ultrab.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs20hercpeg')">
                        <img src="assets/200/vs20hercpeg.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25vegas')">
                        <img src="assets/200/vs25vegas.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs25peking')">
                        <img src="assets/200/vs25peking.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs1fufufu')">
                        <img src="assets/200/vs1fufufu.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs40madwheel')">
                        <img src="assets/200/vs40madwheel.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('vs18mashang')">
                        <img src="assets/200/vs18mashang.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20honey')">
                    <img src="assets/200/vs20honey.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5drmystery')">
                    <img src="assets/200/vs5drmystery.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20santa')">
                    <img src="assets/200/vs20santa.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25kingdoms')">
                    <img src="assets/200/vs25kingdoms.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25dragonkingdom')">
                    <img src="assets/200/vs25dragonkingdom.png" width="200"
                        height="200" alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs15fairytale')">
                    <img src="assets/200/vs15fairytale.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5hotburn')">
                    <img src="assets/200/vs5hotburn.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs117649starz')">
                    <img src="assets/200/vs117649starz.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50safariking')">
                    <img src="assets/200/vs50safariking.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25walker')">
                    <img src="assets/200/vs25walker.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20egypttrs')">
                    <img src="assets/200/vs20egypttrs.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25bkofkngdm')">
                    <img src="assets/200/vs25bkofkngdm.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs9chen')">
                    <img src="assets/200/vs9chen.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25gladiator')">
                    <img src="assets/200/vs25gladiator.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25journey')">
                    <img src="assets/200/vs25journey.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50pixie')">
                    <img src="assets/200/vs50pixie.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs4096mystery')">
                    <img src="assets/200/vs4096mystery.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50aladdin')">
                    <img src="assets/200/vs50aladdin.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs40frrainbow')">
                    <img src="assets/200/vs40frrainbow.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20chicken')">
                    <img src="assets/200/vs20chicken.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs7776secrets')">
                    <img src="assets/200/vs7776secrets.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20eking')">
                    <img src="assets/200/vs20eking.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs9hotroll')">
                    <img src="assets/200/vs9hotroll.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs9madmonkey')">
                    <img src="assets/200/vs9madmonkey.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs3train')">
                    <img src="assets/200/vs3train.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs7pigs')">
                    <img src="assets/200/vs7pigs.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5trdragons')">
                    <img src="assets/200/vs5trdragons.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs8magicjourn')">
                    <img src="assets/200/vs8magicjourn.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25safari')">
                    <img src="assets/200/vs25safari.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs40beowulf')">
                    <img src="assets/200/vs40beowulf.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20wildpix')">
                    <img src="assets/200/vs20wildpix.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('cs3w')">
                    <img src="assets/200/cs3w.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25davinci')">
                    <img src="assets/200/vs25davinci.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs10egypt')">
                    <img src="assets/200/vs10egypt.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50hercules')">
                    <img src="assets/200/vs50hercules.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25queenofgold')">
                    <img src="assets/200/vs25queenofgold.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20bl')">
                    <img src="assets/200/vs20bl.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs243crystalcave')">
                    <img src="assets/200/vs243crystalcave.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50kingkong')">
                    <img src="assets/200/vs50kingkong.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('cs3irishcharms')">
                    <img src="assets/200/cs3irishcharms.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs10vampwolf')">
                    <img src="assets/200/vs10vampwolf.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('cs5moneyroll')">
                    <img src="assets/200/cs5moneyroll.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs1024butterfly')">
                    <img src="assets/200/vs1024butterfly.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs40streetracer')">
                    <img src="assets/200/vs40streetracer.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20leprechaun')">
                    <img src="assets/200/vs20leprechaun.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20godiva')">
                    <img src="assets/200/vs20godiva.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20gorilla')">
                    <img src="assets/200/vs20gorilla.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5trjokers')">
                    <img src="assets/200/vs5trjokers.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20leprexmas')">
                    <img src="assets/200/vs20leprexmas.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20aladdinsorc')">
                    <img src="assets/200/vs20aladdinsorc.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs13g')">
                    <img src="assets/200/vs13g.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20cm')">
                    <img src="assets/200/vs20cm.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25dwarves_new')">
                    <img src="assets/200/vs25dwarves_new.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25sea')">
                    <img src="assets/200/vs25sea.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs13ladyofmoon')">
                    <img src="assets/200/vs13ladyofmoon.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs4096jurassic')">
                    <img src="assets/200/vs4096jurassic.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs7monkeys')">
                    <img src="assets/200/vs7monkeys.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs1024atlantis')">
                    <img src="assets/200/vs1024atlantis.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25champ')">
                    <img src="assets/200/vs25champ.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25pantherqueen')">
                    <img src="assets/200/vs25pantherqueen.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs50amt')">
                    <img src="assets/200/vs50amt.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20egypt')">
                    <img src="assets/200/vs20egypt.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25dwarves')">
                    <img src="assets/200/vs25dwarves.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20rome')">
                    <img src="assets/200/vs20rome.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25kingdomsnojp')">
                    <img src="assets/200/vs25kingdomsnojp.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs7monkeys_jp')">
                    <img src="assets/200/vs7monkeys_jp.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('sc7piggiesai')">
                    <img src="assets/200/sc7piggiesai.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('sc7piggies')">
                    <img src="assets/200/sc7piggies.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs1dragon8_jp')">
                    <img src="assets/200/vs1dragon8_jp.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('bjmb')">
                    <img src="assets/200/bjmb.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5aztecgems_jp')">
                    <img src="assets/200/vs5aztecgems_jp.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('bca')">
                    <img src="assets/200/bca.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vswaysbbb')">
                    <img src="assets/200/vswaysbbb.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs40bigjuan')">
                    <img src="assets/200/vs40bigjuan.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs10bookfallen')">
                    <img src="assets/200/vs10bookfallen.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" onclick="toGame('vs10bookviking')">
                    <img src="assets/200/vs10bookviking.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25btygold')">
                    <img src="assets/200/vs25btygold.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs10bxmasbnza')">
                    <img src="assets/200/vs10bxmasbnza.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs15b')">
                    <img src="assets/200/vs15b.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs5dewajoker')">
                    <img src="assets/200/vs5dewajoker.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scdiamond')">
                    <img src="assets/200/scdiamond.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" onclick="toGame('scdiamondai')">
                    <img src="assets/200/scdiamondai.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('bnadvanced')">
                    <img src="assets/200/bnadvanced.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('bndt')">
                    <img src="assets/200/bndt.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25h')">
                    <img src="assets/200/vs25h.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scgoldrush')">
                    <img src="assets/200/scgoldrush.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scgoldrushai')">
                    <img src="assets/200/scgoldrushai.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20hockey')">
                    <img src="assets/200/vs20hockey.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs9hockey')">
                    <img src="assets/200/vs9hockey.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scsafari')">
                    <img src="assets/200/scsafari.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scsafariai')">
                    <img src="assets/200/scsafariai.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vpa')">
                    <img src="assets/200/vpa.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs15ktv')">
                    <img src="assets/200/vs15ktv.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25champlg')">
                    <img src="assets/200/vs25champlg.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('bjma')">
                    <img src="assets/200/bjma.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25pandatemple')">
                    <img src="assets/200/vs25pandatemple.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scpanda')">
                    <img src="assets/200/scpanda.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scpandai')">
                    <img src="assets/200/scpandai.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scqog')">
                    <img src="assets/200/scqog.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scqogai')">
                    <img src="assets/200/scqogai.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs25romeoandjuliet')">
                    <img src="assets/200/vs25romeoandjuliet.png" width="200"
                        height="200" alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('rla')">
                    <img src="assets/200/rla.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20santawonder')">
                    <img src="assets/200/vs20santawonder.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20smugcove')">
                    <img src="assets/200/vs20smugcove.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20gg')">
                    <img src="assets/200/vs20gg.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs10starpirate')">
                    <img src="assets/200/vs10starpirate.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20cms')">
                    <img src="assets/200/vs20cms.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20cmv')">
                    <img src="assets/200/vs20cmv.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20cw')">
                    <img src="assets/200/vs20cw.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20superx')">
                    <img src="assets/200/vs20superx.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs9catz')">
                    <img src="assets/200/vs9catz.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs30catz')">
                    <img src="assets/200/vs30catz.png" width="200" height="200" alt=""
                        class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scwolfgold')">
                    <img src="assets/200/scwolfgold.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('scwolfgoldai')">
                    <img src="assets/200/scwolfgoldai.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div>
            <div class="play mt-4 grid col-6a">
                <a href="#" @click="toGame('vs20santawonder')">
                    <img src="assets/200/vs20santawonder.png" width="200" height="200"
                        alt="" class="responsive" />
                </a>
            </div> 
        </div> 

        <div class="container contacts br bg-black mt-3">
            <ul class="flex space-around">
                <p class="ct"><a href="#">KONTAK KAMI</a></p>
                <li>
                    <a href="#"><img src="assets/img/icons/line.png" alt="" />
                        <p>DewaLG</p>
                    </a>
                </li>
                <li>
                    <a href="#"><img src="assets/img/icons/telegram.png" alt="" />
                        <p>DewaLG</p>
                    </a>
                </li>
                <li>
                    <a href="#"><img src="assets/img/icons/whatsapp.png" alt="" />
                        <p>+081269200299</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="container-fluid bg-black mt-3">
        <div class="container">         
            <div class="text-footer tc fg">
                <p>
                    Copyright © {{ Year }} LG DEWALG Online Game. All rights reserved.
                </p>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
export default {
    name:'Slots',
    data(){
        return{
            Year: new Date().getFullYear()
        }
    },
 methods:{      
         toGame(gameId){
                    },
         goSlotPp(){
            var slotName = $('#slot_name').val();
            window.location.href='/slot?slotName='+slotName;
        }   
    },
    // getAfbSport(){
    // window.location.href = "/sports";        
    // }
}
</script>

<style scoped>

</style>