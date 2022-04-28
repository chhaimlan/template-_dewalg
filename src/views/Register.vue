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

        <div class="games grid col-6 klavika" data-id="1" style="display: none;">
            <div class="game"><router-link to="/login"><a href="Login.vue"><img src="assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p></router-link>
            </div>
        </div>
        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp" ><router-link to="/slots"><a href="Slots.vue"><img src="assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a></router-link>
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
    <div class="container">
        <div class="dt">
            <p class="pt-2 pb-2 tc">PENDAFTARAN</p>
            <form action="http://54.251.83.21:8878/register" id="form2" method="post">
                <input type="hidden" name="_token" value="CAQiza6iG1t0nq4Zu2jzrgXfcYf3U5IUaI4zAFSD">            <div class="daftar grid col-2 barlow">
                <div class="daftar-1">
                    <table>
                        <tr>
                            <td class="ss">Username</td>
                            <input type="hidden" name="real_ip" id="real_ip2" value="8.8.8.8">
                            <td><input class="sz bg-black" type="text" name="name" value="" id="name" maxlength="15" oninput="value=value.replace(/[^0-9A-Za-z]/g,'')" /></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                                <span style="color: red;margin-left: 20px;font-size: 14px" id="nameerror">
                                                                    </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Kata Sandi</td>
                            <td><input class="sz bg-black" type="password"  name="password"  id="repassword" maxlength="15"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span  style="color: red;margin-left: 20px;font-size: 15px" id="pwderror">
                                                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Ulangi Kata Sandi</td>
                            <td><input class="sz bg-black" type="password" name="password_confirmation" id="password-confirm" maxlength="15"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                                <span  style="color: red;margin-left: 20px;font-size: 15px" >
                                                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Telepon</td>
                            <td><input class="sz bg-black" type="text" id="phone" name="phone" oninput="value=value.replace(/[^\d]/g,'')"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="phoneerror">

                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Email</td>
                            <td><input class="sz bg-black" type="text" id="email" name="email"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="emailerror">

                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Nama Panggilan</td>
                            <td><input class="sz bg-black" type="text" id="nameLen" name="nameLen" maxlength="6">
                                <input type="hidden" id="is_submit" name="is_submit" value="0">
                                <input type="hidden" id="is_codeRef" name="is_codeRef" value="0">
                            </td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="nameLenerror">

                            </span>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="daftar-2">
                    <table>
                        <tr>
                            <td class="ss">Nama Bank</td>
                            <td class=""><select class="sz bg-black" name="bank" id="bankType">
                                                                            <option value="BCA" >BCA</option>
                                                                            <option value="BNI" >BNI</option>
                                                                            <option value="BRI" >BRI</option>
                                                                            <option value="DANA" >DANA</option>
                                                                            <option value="DANAMOND" >DANAMOND</option>
                                                                            <option value="LIPPO" >LIPPO</option>
                                                                            <option value="OVO" >OVO</option>
                                                                            <option value="WALETTTT" >WALETTTT</option>
                                                                    </select></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px">

                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Nama Rekening</td>
                            <td><input class="sz bg-black" type="text" id="bank_name" name="bank_name"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="bank_nameerror">

                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Nomor Rekening</td>
                            <td><input class="sz bg-black" type="text"  id="bank_number" name="bank_number" oninput="value=value.replace(/[^\d]/g,'')">

                            </td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                             <span style="color: red;margin-left: 20px;font-size: 14px" id="bank_numbererror">

                             </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Kode Referensi</td>
                            <td><input class="sz bg-black" type="text"  id="referral" name="referral"></td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="refCodeerror">

                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss">Kode Validasi</td>
                            <td><input class="sz bg-black" type="text"  id="captcha" name="captcha">

                            </td>
                            <td  class="ss">
                                <span style="margin-left: 20px;">
                                  <img id="capImg" src="captcha/flat8b81.png?RDNqNYFj" onclick="this.src='/captcha/flat?'+Math.random()">
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="ss"></td>
                            <td>
                            <span style="color: red;margin-left: 20px;font-size: 15px" id="captchaError">

                            </span>
                            </td>
                        </tr>
                    </table>

                    <div class="submit ml mt-1 mb-1 tc">
                        <input type="button" id="tijiaoBt"  onclick="checkRes() " value="Konfirmasi">
                    </div>
                    <div class="setuju flex space-between"> <input type="checkbox" id="isChoose" name="isChoose"><label></label>
                        <span class="su">Saya telah membaca dan menerima Syarat & Ketentuan Kebijakan Privasi & Aturan Bertaruh seperti yang dipublikasikan di situs ini</span>

                    </div>
                    <span style="color: red;margin-left: 20px" id="istrueError">

                    </span>
                </div>

            </div>
            </form>
        </div>


        <div class="contacts br bg-black mt-3">
            <ul class="flex space-around">
                <p class="ct"><a href="#">KONTAK KAMI</a></p>
                <li><a href="#"><img src="assets/img/icons/line.png" alt=""><p>LG CASINO</p></a></li>
                <li><a href="#"><img src="assets/img/icons/skype.png" alt=""><p>LG CASINO</p></a></li>
                <li><a href="#"><img src="assets/img/icons/whatsapp.png" alt=""><p>+6285225951680</p></a></li>
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
    name:'Register',
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