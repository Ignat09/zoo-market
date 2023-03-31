let cocki = document.cookie;
let cong = document.getElementById("cong");
if (cocki != "") {
  cong.innerHTML = `${cocki}, спасибо за покупки!`;
} else if ((cocki = "")) {
  cong.innerHTML = `Спасибо вам за покупки!`;
}

function myFunction() {
  var x = document.getElementById("myVideo").duration;
  document.getElementById("demo").innerHTML = x;
}
