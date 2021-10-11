let bars = document.querySelector(".bars");
let user = document.querySelectorAll(".user");
let img_icon = document.querySelector("#img_icon");
let content = document.getElementById("content");
let sittings = document.getElementById("sittings");
let image_sit = document.querySelector(".image_sit");
let edit = document.querySelector(".edit");
let times = document.querySelector(".times-content");
let body = document.querySelector(".body");
let camera = document.querySelector("#camera");
let camera_icon = document.querySelector(".camera");
let bttn_login = document.querySelector(".bttn-login");
let login = document.querySelector(".login");
let ID_user = document.querySelector(".ID_user");
let Visitor = document.querySelector(".Visitor");
let img_user_log = document.querySelector(".img-user-log");
let img_user_log1 = document.querySelector(".img-user-log1");
let id;

bars.onclick = () => {
  del2();
  content.classList.add("manu-active");
};
user.onclick = () => {
  del();
  sittings.classList.add("manu-active");
};
function user_image(){
  del();
  sittings.classList.add("manu-active");
}
function del() {
  content.classList.remove("manu-active");
}
function del2() {
  sittings.classList.remove("manu-active");
}
function sup_1() {
  body.innerHTML = sup1;
}
function sup_2() {
  body.innerHTML = sup2;
}
var loadFile = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    img_user_log1.innerHTML =
      `<img src="` +
      reader.result +
      `" class="img-user-log"><label for="camera"><i class="fas fa-camera camera"></i></label>`;
    img_icon.innerHTML = `<img src="` + reader.result + `"onclick="user_image()">`;
    image_sit.innerHTML=`<img src="` + reader.result + `" class="user-img">`;
  };
  reader.readAsDataURL(event.target.files[0]);
};
bttn_login.onclick = () => {
  id = ID_user.value;
  login.style.display = "none";
};
Visitor.onclick = () => {
  id = "********";
  login.style.display = "none";
};
edit.onclick = () => {
  login.style.display = "block";
};
