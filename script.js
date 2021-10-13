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
let user_name = document.querySelector(".user-name");
let user_ID = document.querySelector(".user-ID");
let user_Group = document.querySelector(".user-Group");
let user_Section = document.querySelector(".user-Section");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let theme = document.querySelector(".them-file");
let id_log;
let image;
if(window.localStorage.getItem("id")){
  login.style.display = "none";
  student(window.localStorage.getItem("id"));
  bars.classList.remove("no_click");
  img_icon.classList.remove("no_click");
}
if (window.localStorage.getItem("theme")) {
  theme.href = window.localStorage.getItem("theme");
  if (window.localStorage.getItem("theme") === "sun.css") {
    sun.classList.add("theme-active");
    moon.classList.remove("theme-active");
  } else {
    sun.classList.remove("theme-active");
    moon.classList.add("theme-active");
  }
}
if(window.localStorage.getItem("image")){
  img_user_log1.innerHTML =
  `<img src="` +
  window.localStorage.getItem("image") +
  `" class="img-user-log"><label for="camera"><i class="fas fa-camera camera"></i></label>`;
img_icon.innerHTML =
  `<img src="` + window.localStorage.getItem("image") + `"onclick="user_image()">`;
image_sit.innerHTML = `<img src="` + window.localStorage.getItem("image") + `" class="user-img">`;
}
bars.onclick = () => {
  del2();
  content.style.display = "block";
  setTimeout(function () {
    content.classList.add("manu-active");
  }, 100);
};
user.onclick = () => {
  del();
  sittings.style.display = "block";
  setTimeout(function () {
    sittings.classList.add("manu-active");
  }, 100);
};
function user_image() {
  del();
  sittings.style.display = "block";
  setTimeout(function () {
    sittings.classList.add("manu-active");
  }, 100);
}
function del() {
  content.classList.remove("manu-active");
  setTimeout(function () {
    content.style.display = "none";
  }, 1000);
}
function del2() {
  sittings.classList.remove("manu-active");
  setTimeout(function () {
    sittings.style.display = "none";
  }, 1000);
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
    img_icon.innerHTML =
      `<img src="` + reader.result + `"onclick="user_image()">`;
    image_sit.innerHTML = `<img src="` + reader.result + `" class="user-img">`;
    image = reader.result;
    window.localStorage.setItem("image",image);
  };
  reader.readAsDataURL(event.target.files[0]);
};
bttn_login.onclick = () => {
  id_log = ID_user.value;
  let TF = Number.isInteger(+id_log);
  if(id_log.length===10 && TF){
      login.style.display = "none";
  student(ID_user.value);
  bars.classList.remove("no_click");
  img_icon.classList.remove("no_click");
  window.localStorage.setItem("id",ID_user.value);
  }
  else{
    window.alert("عدد الارقام المدخلة لا يساوي10 او يحتوي علي حروف ");
  }
};
Visitor.onclick = () => {
  id_log = "********";
  login.style.display = "none";
  student("********");
  bars.classList.remove("no_click");
  img_icon.classList.remove("no_click");
};
edit.onclick = () => {
  id_log = "";
  login.style.display = "block";
  bars.classList.add("no_click");
  img_icon.classList.add("no_click");
};
function student(id1) {
  for (let index = 0; index < students.length; index++) {
    let id_fun = students[index].id;
    if (id_fun == id1) {
      user_name.innerHTML = students[index].name;
      user_ID.innerHTML = students[index].id;
      user_Group.innerHTML = students[index].group;
      user_Section.innerHTML = students[index].section;
      break;
    } else {
      user_name.innerHTML = `ـــــــــــــــ`;
      user_ID.innerHTML = `ــــــــــــ`;
      user_Group.innerHTML = `ــــــ`;
      user_Section.innerHTML = `ــــــ`;
    }
  }
}
sun.onclick = () => {
  theme.href = "sun.css";
  moon.classList.remove("theme-active");
  sun.classList.add("theme-active");
  window.localStorage.setItem("theme", "sun.css");
};
moon.onclick = () => {
  theme.href = "night.css";
  sun.classList.remove("theme-active");
  moon.classList.add("theme-active");
  window.localStorage.setItem("theme", "night.css");
};
