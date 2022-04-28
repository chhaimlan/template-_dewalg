<template>
    <div class="container-fluid bg-black">
        <div class="container form pt-1 pb-1 flex-end">
        <!-- <form action="http://localhost:8080/login" id="form" method="post" onsubmit="return check()">
            <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD">
            <input type="hidden" name="real_ip" id="real_ip" value="8.8.8.8">
        <input class="username bg-black" type="text" name="username" onfocus="qudiao()"  placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password" onfocus="qudiao()"   placeholder="Password" id="password"> -->
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <a href="register.html"><input class="register bg-black klavika" type="button" value="DAFTAR"></a>
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
                <li class="menu" data-id="home"><router-link to="/index"><a href="index.vue"><img src="assets/img/icons/home.png" onmouseover="this.src='assets/img/icons/home-hover.png';" onmouseout="this.src='assets/img/icons/home.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="1"><router-link to="/casino"><a href="casino.vue"><img src="assets/img/icons/casino.png" onmouseover="this.src='assets/img/icons/casino-hover.png';" onmouseout="this.src='assets/img/icons/casino.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="2"><router-link to="/goslots"><a href="goslot.vue"><img src="assets/img/icons/slot.png" onmouseover="this.src='assets/img/icons/slot-hover.png';" onmouseout="this.src='assets/img/icons/slot.png'" alt=""></a></router-link>
                </li>
                <li class="menu" data-id="3"><router-link to="/sports"><a href="sports.vue"><img src="assets/img/icons/sports.png" onmouseover="this.src='assets/img/icons/sports-hover.png';" onmouseout="this.src='assets/img/icons/sports.png'" alt=""></a></router-link>
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
            <div class="game" id="showpp"><router-link to="/slots"><a href="Slot.vue"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
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
            <div class="game"><router-link to="/"><a href="#"><img src="assets/img/logo/sv388.png" alt=""><p>SV388</p></a></router-link>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="5" style="display: none;">
            <div class="game"><router-link to="/login"><a href="#"><img src="assets/img/logo/pkv.png" alt=""><p>SV388</p></a></router-link>
            </div>
        </div>

    </div>
</div>

    <div class="container">
        <div class="container form pt-1 pb-1 flex-end">
            <input class="username bg-black" type="text" name="slot_name" id="slot_name" value="" placeholder="Please enter the slots name">
            <input class="vx klavika" type="button" value="Search" @click="goSlotHb()">
        </div>
        <div class="play mt-4 grid col-6a" style="height:1000px;width:1500px; overflow-y:auto;">
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGProst')">
                        <img src="assets/img200/SGProst.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGNewYearsBash')">
                        <img src="assets/img200/SGNewYearsBash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGFly')">
                        <img src="assets/img200/SGFly.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGNineTails')">
                        <img src="assets/img200/SGNineTails.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGMarvelousFurlongs')">
                        <img src="assets/img200/SGMarvelousFurlongs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGMysticFortuneDeluxe')">
                        <img src="assets/img200/SGMysticFortuneDeluxe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGCandyTower')">
                        <img src="assets/img200/SGCandyTower.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGReturnToTheFeature')">
                        <img src="assets/img200/SGReturnToTheFeature.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGCalaverasExplosivas')">
                        <img src="assets/img200/SGCalaverasExplosivas.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGBeforeTimeRunsOut')">
                        <img src="assets/img200/SGBeforeTimeRunsOut.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGChristmasGiftRush')">
                        <img src="assets/img200/SGChristmasGiftRush.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGOrbsOfAtlantis')">
                        <img src="assets/img200/SGOrbsOfAtlantis.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGTabernaDeLosMuertos')">
                        <img src="assets/img200/SGTabernaDeLosMuertos.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTabernaDeLosMuertosUltra')">
                        <img src="assets/img200/SGTabernaDeLosMuertosUltra.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGTotemTowers')">
                        <img src="assets/img200/SGTotemTowers.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGJellyfishFlow')">
                        <img src="assets/img200/SGJellyfishFlow.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGJellyfishFlowUltra')">
                        <img src="assets/img200/SGJellyfishFlowUltra.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGWealthInn')">
                        <img src="assets/img200/SGWealthInn.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGHappyApe')">
                        <img src="assets/img200/SGHappyApe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGHeySushi')">
                        <img src="assets/img200/SGHeySushi.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGLoonyBlox')">
                        <img src="assets/img200/SGLoonyBlox.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGKnockoutFootballRush')">
                        <img src="assets/img200/SGKnockoutFootballRush.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGTechnoTumble')">
                        <img src="assets/img200/SGTechnoTumble.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGNaughtySanta')">
                        <img src="assets/img200/SGNaughtySanta.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFaCaiShenDeluxe')">
                        <img src="assets/img200/SGFaCaiShenDeluxe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGLuckyFortuneCat')">
                        <img src="assets/img200/SGLuckyFortuneCat.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGScopa')">
                        <img src="assets/img200/SGScopa.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGColossalGems')">
                        <img src="assets/img200/SGColossalGems.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGHotHotHalloween')">
                        <img src="assets/img200/SGHotHotHalloween.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGWizardsWantWar')">
                        <img src="assets/img200/SGWizardsWantWar.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGMountMazuma')">
                        <img src="assets/img200/SGMountMazuma.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGWildTrucks')">
                        <img src="assets/img200/SGWildTrucks.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGLuckyLucky')">
                        <img src="assets/img200/SGLuckyLucky.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGHotHotFruit')">
                        <img src="assets/img200/SGHotHotFruit.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SG5LuckyLions')">
                        <img src="assets/img200/SG5LuckyLions.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGJump')">
                        <img src="assets/img200/SGJump.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGPumpkinPatch')">
                        <img src="assets/img200/SGPumpkinPatch.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGHappiestChristmasTree')">
                        <img src="assets/img200/SGHappiestChristmasTree.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGEgyptianDreamsDeluxe')">
                        <img src="assets/img200/SGEgyptianDreamsDeluxe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFortuneDogs')">
                        <img src="assets/img200/SGFortuneDogs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGKnockoutFootball')">
                        <img src="assets/img200/SGKnockoutFootball.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGPresto')">
                        <img src="assets/img200/SGPresto.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGWaysOfFortune')">
                        <img src="assets/img200/SGWaysOfFortune.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGMagicOak')">
                        <img src="assets/img200/SGMagicOak.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGSantasVillage')">
                        <img src="assets/img200/SGSantasVillage.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGRollingRoger')">
                        <img src="assets/img200/SGRollingRoger.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SG5Mariachis')">
                        <img src="assets/img200/SG5Mariachis.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGCakeValley')">
                        <img src="assets/img200/SGCakeValley.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGLondonHunter')">
                        <img src="assets/img200/SGLondonHunter.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFourDivineBeasts')">
                        <img src="assets/img200/SGFourDivineBeasts.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGNuwa')">
                        <img src="assets/img200/SGNuwa.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGTheKoiGate')">
                        <img src="assets/img200/SGTheKoiGate.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGOceansCall')">
                        <img src="assets/img200/SGOceansCall.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGScruffyScallywags')">
                        <img src="assets/img200/SGScruffyScallywags.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGBirdOfThunder')">
                        <img src="assets/img200/SGBirdOfThunder.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGTheDeadEscape')">
                        <img src="assets/img200/SGTheDeadEscape.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGPandaPanda')">
                        <img src="assets/img200/SGPandaPanda.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFireRooster')">
                        <img src="assets/img200/SGFireRooster.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFenghuang')">
                        <img src="assets/img200/SGFenghuang.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGFaCaiShen')">
                        <img src="assets/img200/SGFaCaiShen.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SG12Zodiacs')">
                        <img src="assets/img200/SG12Zodiacs.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGSparta')">
                        <img src="assets/img200/SGSparta.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGGangsters')">
                        <img src="assets/img200/SGGangsters.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" @click="toGame('SGRuffledUp')">
                        <img src="assets/img200/SGRuffledUp.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGDragonsThrone')">
                        <img src="assets/img200/SGDragonsThrone.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGBombsAway')">
                        <img src="assets/img200/SGBombsAway.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGGoldRush')">
                        <img src="assets/img200/SGGoldRush.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGWickedWitch')">
                        <img src="assets/img200/SGWickedWitch.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSuperTwister')">
                        <img src="assets/img200/SGSuperTwister.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGRomanEmpire')">
                        <img src="assets/img200/SGRomanEmpire.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGCoyoteCrash')">
                        <img src="assets/img200/SGCoyoteCrash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGBuggyBonus')">
                        <img src="assets/img200/SGBuggyBonus.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGGlamRock')">
                        <img src="assets/img200/SGGlamRock.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGJugglenaut')">
                        <img src="assets/img200/SGJugglenaut.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGGalacticCash')">
                        <img src="assets/img200/SGGalacticCash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGZeus2')">
                        <img src="assets/img200/SGZeus2.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGKanesInferno')">
                        <img src="assets/img200/SGKanesInferno.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTreasureTomb')">
                        <img src="assets/img200/SGTreasureTomb.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGArcaneElements')">
                        <img src="assets/img200/SGArcaneElements.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTreasureDiver')">
                        <img src="assets/img200/SGTreasureDiver.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTheDragonCastle')">
                        <img src="assets/img200/SGTheDragonCastle.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGKingTutsTomb')">
                        <img src="assets/img200/SGKingTutsTomb.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGCarnivalCash')">
                        <img src="assets/img200/SGCarnivalCash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGShaolinFortunes100')">
                        <img src="assets/img200/SGShaolinFortunes100.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGShaolinFortunes243')">
                        <img src="assets/img200/SGShaolinFortunes243.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGLittleGreenMoney')">
                        <img src="assets/img200/SGLittleGreenMoney.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGMonsterMashCash')">
                        <img src="assets/img200/SGMonsterMashCash.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGDrFeelgood')">
                        <img src="assets/img200/SGDrFeelgood.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGVikingsPlunder')">
                        <img src="assets/img200/SGVikingsPlunder.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGDoubleODollars')">
                        <img src="assets/img200/SGDoubleODollars.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGWeirdScience')">
                        <img src="assets/img200/SGWeirdScience.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGBlackbeardsBounty')">
                        <img src="assets/img200/SGBlackbeardsBounty.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSOS')">
                        <img src="assets/img200/SGSOS.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGPoolShark')">
                        <img src="assets/img200/SGPoolShark.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSpaceFortune')">
                        <img src="assets/img200/SGSpaceFortune.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGPamperMe')">
                        <img src="assets/img200/SGPamperMe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGZeus')">
                        <img src="assets/img200/SGZeus.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSuperStrike')">
                        <img src="assets/img200/SGSuperStrike.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGJungleRumble')">
                        <img src="assets/img200/SGJungleRumble.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGEgyptianDreams')">
                        <img src="assets/img200/SGEgyptianDreams.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGBarnstormerBucks')">
                        <img src="assets/img200/SGBarnstormerBucks.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTowerOfPizza')">
                        <img src="assets/img200/SGTowerOfPizza.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGMummyMoney')">
                        <img src="assets/img200/SGMummyMoney.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGBikiniIsland')">
                        <img src="assets/img200/SGBikiniIsland.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGMysticFortune')">
                        <img src="assets/img200/SGMysticFortune.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGArcticWonders')">
                        <img src="assets/img200/SGArcticWonders.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGFlyingHigh')">
                        <img src="assets/img200/SGFlyingHigh.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGMrBling')">
                        <img src="assets/img200/SGMrBling.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGQueenOfQueens1024')">
                        <img src="assets/img200/SGQueenOfQueens1024.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGDragonsRealm')">
                        <img src="assets/img200/SGDragonsRealm.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGAllForOne')">
                        <img src="assets/img200/SGAllForOne.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGCashReef')">
                        <img src="assets/img200/SGCashReef.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGQueenOfQueens243')">
                        <img src="assets/img200/SGQueenOfQueens243.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGPuckerUpPrince')">
                        <img src="assets/img200/SGPuckerUpPrince.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSirBlingalot')">
                        <img src="assets/img200/SGSirBlingalot.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGRideEmCowboy')">
                        <img src="assets/img200/SGRideEmCowboy.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGGrapeEscape')">
                        <img src="assets/img200/SGGrapeEscape.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGGoldenUnicorn')">
                        <img src="assets/img200/SGGoldenUnicorn.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGPiratesPlunder')">
                        <img src="assets/img200/SGPiratesPlunder.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGAzlandsGold')">
                        <img src="assets/img200/SGAzlandsGold.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGShogunsLand')">
                        <img src="assets/img200/SGShogunsLand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGFrontierFortunes')">
                        <img src="assets/img200/SGFrontierFortunes.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGIndianCashCatcher')">
                        <img src="assets/img200/SGIndianCashCatcher.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGSkysTheLimit')">
                        <img src="assets/img200/SGSkysTheLimit.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGTheBigDeal')">
                        <img src="assets/img200/SGTheBigDeal.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGHauntedHouse')">
                        <img src="assets/img200/SGHauntedHouse.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGRodeoDrive')">
                        <img src="assets/img200/SGRodeoDrive.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGCashosaurus')">
                        <img src="assets/img200/SGCashosaurus.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SGDiscoFunk')">
                        <img src="assets/img200/SGDiscoFunk.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TGBlackjackAmerican')">
                        <img src="assets/img200/TGBlackjackAmerican.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TGDragonTiger')">
                        <img src="assets/img200/TGDragonTiger.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BlackJack3HDoubleExposure')">
                        <img src="assets/img200/BlackJack3HDoubleExposure.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BlackJack3H')">
                        <img src="assets/img200/BlackJack3H.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('Baccarat3HZC')">
                        <img src="assets/img200/Baccarat3HZC.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('SicBo')">
                        <img src="assets/img200/SicBo.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TGThreeCardPoker')">
                        <img src="assets/img200/TGThreeCardPoker.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TGWar')">
                        <img src="assets/img200/TGWar.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TGThreeCardPokerDeluxe')">
                        <img src="assets/img200/TGThreeCardPokerDeluxe.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('GambleBeatDealer')">
                        <img src="assets/img200/GambleBeatDealer.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('CaribbeanStud')">
                        <img src="assets/img200/CaribbeanStud.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AmericanBaccarat')">
                        <img src="assets/img200/AmericanBaccarat.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('CaribbeanHoldem')">
                        <img src="assets/img200/CaribbeanHoldem.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('EURoulette')">
                        <img src="assets/img200/EURoulette.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TensorBetter100Hand')">
                        <img src="assets/img200/TensorBetter100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TensorBetter5Hand')">
                        <img src="assets/img200/TensorBetter5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TensorBetter10Hand')">
                        <img src="assets/img200/TensorBetter10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TensorBetter50Hand')">
                        <img src="assets/img200/TensorBetter50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JokerPoker100Hand')">
                        <img src="assets/img200/JokerPoker100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('TensorBetter1Hand')">
                        <img src="assets/img200/TensorBetter1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JokerPoker5Hand')">
                        <img src="assets/img200/JokerPoker5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JokerPoker10Hand')">
                        <img src="assets/img200/JokerPoker10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JokerPoker50Hand')">
                        <img src="assets/img200/JokerPoker50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleDoubleBonusPoker50Hand')">
                        <img src="assets/img200/DoubleDoubleBonusPoker50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleDoubleBonusPoker100Hand')">
                        <img src="assets/img200/DoubleDoubleBonusPoker100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JokerPoker1Hand')">
                        <img src="assets/img200/JokerPoker1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleDoubleBonusPoker1Hand')">
                        <img src="assets/img200/DoubleDoubleBonusPoker1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleDoubleBonusPoker5Hand')">
                        <img src="assets/img200/DoubleDoubleBonusPoker5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleDoubleBonusPoker10Hand')">
                        <img src="assets/img200/DoubleDoubleBonusPoker10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleBonusPoker50Hand')">
                        <img src="assets/img200/DoubleBonusPoker50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleBonusPoker100Hand')">
                        <img src="assets/img200/DoubleBonusPoker100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleBonusPoker1Hand')">
                        <img src="assets/img200/DoubleBonusPoker1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleBonusPoker5Hand')">
                        <img src="assets/img200/DoubleBonusPoker5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DoubleBonusPoker10Hand')">
                        <img src="assets/img200/DoubleBonusPoker10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusPoker50Hand')">
                        <img src="assets/img200/BonusPoker50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusPoker100Hand')">
                        <img src="assets/img200/BonusPoker100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusPoker1Hand')">
                        <img src="assets/img200/BonusPoker1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusPoker5Hand')">
                        <img src="assets/img200/BonusPoker5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusPoker10Hand')">
                        <img src="assets/img200/BonusPoker10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusDuecesWild50Hand')">
                        <img src="assets/img200/BonusDuecesWild50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusDuecesWild100Hand')">
                        <img src="assets/img200/BonusDuecesWild100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusDuecesWild1Hand')">
                        <img src="assets/img200/BonusDuecesWild1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusDuecesWild5Hand')">
                        <img src="assets/img200/BonusDuecesWild5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('BonusDuecesWild10Hand')">
                        <img src="assets/img200/BonusDuecesWild10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AllAmericanPoker50Hand')">
                        <img src="assets/img200/AllAmericanPoker50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AllAmericanPoker100Hand')">
                        <img src="assets/img200/AllAmericanPoker100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AllAmericanPoker1Hand')">
                        <img src="assets/img200/AllAmericanPoker1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AllAmericanPoker5Hand')">
                        <img src="assets/img200/AllAmericanPoker5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AllAmericanPoker10Hand')">
                        <img src="assets/img200/AllAmericanPoker10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AcesandEights50Hand')">
                        <img src="assets/img200/AcesandEights50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AcesandEights100Hand')">
                        <img src="assets/img200/AcesandEights100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AcesandEights1Hand')">
                        <img src="assets/img200/AcesandEights1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AcesandEights5Hand')">
                        <img src="assets/img200/AcesandEights5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('AcesandEights10Hand')">
                        <img src="assets/img200/AcesandEights10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DuecesWild50Hand')">
                        <img src="assets/img200/DuecesWild50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DuecesWild100Hand')">
                        <img src="assets/img200/DuecesWild100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DuecesWild1Hand')">
                        <img src="assets/img200/DuecesWild1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DuecesWild5Hand')">
                        <img src="assets/img200/DuecesWild5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('DuecesWild10Hand')">
                        <img src="assets/img200/DuecesWild10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JacksorBetter50Hand')">
                        <img src="assets/img200/JacksorBetter50Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JacksorBetter100Hand')">
                        <img src="assets/img200/JacksorBetter100Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JacksorBetter5Hand')">
                        <img src="assets/img200/JacksorBetter5Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JacksorBetter10Hand')">
                        <img src="assets/img200/JacksorBetter10Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
            </div>
                        <div class="play mt-4 grid col-6a">
                    <a href="#" onclick="toGame('JacksorBetter1Hand')">
                        <img src="assets/img200/JacksorBetter1Hand.png" width="200" height="200" alt="" class="responsive"/>
                    </a>
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
            <p>Copyright © {{ Year }} LG DEWALG Online Game. All rights reserved.</p>
        </div>

    </div>
</div>
<router-view />
</template>

<script>
export default {
    name:'Hbslots',
    data(){
        return{
            Year: new Date().getFullYear()
        }
    },

    methods:{
         toGame(gameId){
                    },
          goSlotHb(){
            var slotName = $('#slot_name').val();
            window.location.href='/hbslot?slotName='+slotName;
        }
    },
    // getAfbSport(){
    // window.location.href = "/sports";        
    // }
}
</script>

<style scoped>

</style>