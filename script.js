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
let id_log;

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
  };
  reader.readAsDataURL(event.target.files[0]);
};
bttn_login.onclick = () => {
  id_log = ID_user.value;
  login.style.display = "none";
  // user.style.display = "none";
  // bars.style.display = "none";
  student(ID_user.value);
};
Visitor.onclick = () => {
  id_log = "********";
  login.style.display = "none";
  // user.style.display = "none";
  // bars.style.display = "none";
  student("********");
};
edit.onclick = () => {
  id_log = "";
  login.style.display = "block";
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
