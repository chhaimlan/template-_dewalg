// $('.btn-kontak').hover(function () {
//     $('.content-kontak').show();
// });
// $('.kontak').mouseleave(function() {
//     $('.content-kontak').hide();
// });
//
// $('.btn-bank').hover(function () {
//     $('.content-bank').show();
// });
// $('.bank').mouseleave(function() {
//     $('.content-bank').hide();
// });
// $('#home').addClass('active_menu');
// // 调用 公告滚动函数
$.get(
  "/api/newList",
  (data) => {
    if (data.data.notices) {
      var str;
      for (var i = 0; i < data.data.notices.length; i++) {
        var name = data.data.notices[i].notice_name;
        var content = data.data.notices[i].content;
        var contents = [content];
        if (content.indexOf(",") > 0) {
          contents = content.split(",");
        }
        var number = i + 1;
        if (i === 0) {
          str = content;
        } else {
          str = str + "&nbsp;&nbsp;&nbsp;" + content;
        }
      }
      $("#noticeHtml").html(str);
    }
  },
  "json"
);

$(function () {
  $.get("https://icanhazip.com/", (data) => {
    $("#real_ip2").val(data);
  });
  $("input").bind("input propertychange", function () {
    if (document.getElementById("tijiaoBt").disabled) {
      document.getElementById("tijiaoBt").disabled = false;
    }
    $("#pwderror").html("");
    $("#phoneerror").html("");
    $("#emailerror").html("");
    $("#istrueError").html("");
    $("#nameLenerror").html("");
    if ($(this).attr("name") == "name") {
      $("#nameerror").html("");
      var name = $(this).val();
      if (name != null && name != "" && name.length > 4 && name.length < 16) {
        name = name.replace(/[ ]/g, "");
        $(this).val(name);
        if (name.indexOf("_") != -1) {
          $("#nameerror").html('Account Not allowed "_"');
          $("#is_submit").val(2);
        } else {
          $.get(
            "/user/checkUser?name=" + name,
            (data) => {
              if (data.data.istrue == 1) {
                $("#nameerror").html("Nama Username ini telah terdaftar");
                $("#is_submit").val(2);
                return;
              } else {
                $("#is_submit").val(0);
              }
            },
            "json"
          );
        }
      } else {
        $("#nameerror").html("Username Minimun 5 - 15 karakter ");
        $("#is_submit").val(11);
      }
    }
    if ($(this).attr("name") == "referral") {
      $("#refCodeerror").html("");
      var name = $(this).val();
      if (name != null && name != "") {
        if (name == 0) {
          $("#refCodeerror").html("Kode Referensi anda salah");
          $("#is_codeRef").val(3);
          return;
        } else {
          $.get(
            "/user/checkUser?ref_code=" + name,
            (data) => {
              if (data.data.istrue == 1) {
                $("#refCodeerror").html("Kode Referensi anda salah");
                $("#is_codeRef").val(3);
                return;
              } else {
                $("#is_codeRef").val(0);
              }
            },
            "json"
          );
        }
      } else {
        $("#is_codeRef").val(0);
      }
    }
    if (
      $(this).attr("name") == "bank_name" ||
      $(this).attr("name") == "bank" ||
      $(this).attr("name") == "bank_number"
    ) {
      $("#bank_nameerror").html("");
      $("#bank_numbererror").html("");
      var bank_number = $("#bank_number").val();
      if (bank_number) {
        $.get(
          "/user/checkBank?bank_number=" + bank_number,
          (data) => {
            if (data.data.istrue == 1) {
              $("#bank_numbererror").html("Rekening Bank anda sudah terdaftar");
              $("#is_submit").val(1);
              return false;
            } else if (data.data.istrue == 2) {
              $("#bank_numbererror").html("Rekening Bank anda telah diblokir");
              $("#is_submit").val(6);
              return false;
            } else {
              $("#is_submit").val(0);
            }
          },
          "json"
        );
      } else {
        $("#bank_numbererror").html("Nomor Rekening Bank anda");
        $("#is_submit").val(16);
        return false;
      }
    }
    if ($(this).attr("name") == "captcha") {
      $("#captchaError").html("");
      var captcha = $(this).val();
      if (captcha != null && captcha != "" && captcha.length > 3) {
        $.get(
          "/user/checkCaptcha?captcha=" + captcha,
          (data) => {
            if (data.data.isTrue == 1) {
              $("#captchaError").html("Kode Validasi anda salah");
              $("#is_submit").val(5);
              $(this).val("");
              $("#capImg").click();
              return;
            } else {
              $("#is_submit").val(0);
            }
          },
          "json"
        );
      } else {
        $("#is_submit").val(5);
      }
    }
  });
});

function checkRes() {
  document.getElementById("tijiaoBt").disabled = true;
  var is_submit = $("#is_submit").val();
  var is_codeRef = $("#is_codeRef").val();
  if (is_submit == 1) {
    $("#bank_numbererror").html("Rekening Bank anda sudah terdaftar");
    return false;
  }
  if (is_submit == 2) {
    $("#nameerror").html("Nama Username ini telah terdaftar");
    return false;
  }
  if (is_codeRef == 3) {
    $("#refCodeerror").html("Kode Referensi anda salah");
    return false;
  }
  if (is_submit == 5) {
    $("#captchaError").html("Kode Validasi anda salah");
    return false;
  }
  if (is_submit == 6) {
    $("#bank_numbererror").html("Rekening Bank anda telah diblokir");
    return false;
  }
  if (is_submit == 11) {
    $("#nameerror").html("Username Minimun 5 - 15 karakter");
    return false;
  }
  if (is_submit == 16) {
    $("#bank_numbererror").html("Nomor Rekening Bank anda");
    return false;
  }
  var name = $("#name").val();
  if (name != null && name != "" && name.length > 4 && name.length < 16) {
  } else {
    $("#nameerror").html("Masukkan Username yang diinginkan");
    return false;
  }
  var password = $("#repassword").val();
  var password2 = $("#password-confirm").val();
  if (password != null && password != "" && password.length > 5) {
    if (password2 != null && password2 != "" && password2.length > 5) {
      if (password != password2) {
        $("#pwderror").html("Kata Sandi anda salah");
        return false;
      }
    } else {
      $("#pwderror").html("Ulangi Kata Sandi anda");
      return false;
    }
  } else {
    if (password != null && password != "") {
      $("#pwderror").html("Kata Sandi Minimun 6 karakter");
      return false;
    } else {
      $("#pwderror").html("Masukkan Kata Sandi anda");
      return false;
    }
  }
  var phone = $("#phone").val();
  if (phone == null || phone == "") {
    $("#phoneerror").html("Masukkan Nomor Kontak anda");
    return false;
  }
  var email = $("#email").val();
  if (email == null || email == "") {
    $("#emailerror").html("Masukkan Alamat Email anda");
    return false;
  }
  var nameLen = $("#nameLen").val();
  if (nameLen == null || nameLen == "") {
    $("#nameLenerror").html("Masukkan Nama Panggilan anda");
    return false;
  }
  var bank_name = $("#bank_name").val();
  if (bank_name == null || bank_name == "") {
    $("#bank_nameerror").html("Nama Rekening Bank anda");
    return false;
  }
  var bank_number = $("#bank_number").val();
  if (bank_number == null || bank_number == "") {
    $("#bank_numbererror").html("Nomor Rekening Bank anda");
    return false;
  }
  if (!$("#isChoose").prop("checked")) {
    $("#istrueError").html("Please choose.");
    return false;
  }
  var captcha = $("#captcha").val();
  if (captcha == null || captcha == "") {
    $("#captchaError").html("Masukkan Kode Validasi");
    return false;
  }
  $.get(
    "/user/checkUser?name=" + name,
    (data) => {
      if (data.data.istrue == 1) {
        $("#nameerror").html("Nama Username ini telah terdaftar");
        return false;
      } else {
        $.get(
          "/user/checkBank?bank_number=" + bank_number,
          (data) => {
            if (data.data.istrue == 1) {
              $("#bank_numbererror").html("Rekening Bank anda sudah terdaftar");
              return false;
            } else if (data.data.istrue == 2) {
              $("#bank_numbererror").html("Rekening Bank anda telah diblokir");
              return false;
            } else {
              $("#form2").submit();
            }
          },
          "json"
        );
      }
    },
    "json"
  );
}
