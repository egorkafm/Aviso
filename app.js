// const headerLogin = document.getElementById('headerLogin');

// headerLogin.addEventListener('click', function() {
//   headerLogin.className.add("active");
// })

let menuBtn = document.querySelector('.burger__menu-btn');
let menu = document.querySelector('.burger__menu');
const link = document.getElementById('headerLogin');
// const loginActive = document.querySelector(".header__login");
const loginActive1 = document.querySelectorAll(".header__login")[0];
const loginActive2 = document.querySelectorAll(".header__login")[1];
const exitModalLogin = document.getElementsByClassName("close")[0];
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const loginToggle1 = document.querySelectorAll('.header__login-btn')[0];
const loginToggle2 = document.querySelectorAll('.header__login-btn')[1];

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

link.addEventListener('click', function(){
  // loginActive.style.display = "block";
  loginActive1.style.display = "block";
});

exitModalLogin.addEventListener('click', function() {
  loginActive1.style.display = "none";
  loginActive2.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == loginActive) {
    loginActive.style.display = "none";
  }
});

loginToggle1.addEventListener('click', function(){
  // loginActive.style.display = "block";
  loginActive1.style.display = "none";
  signUpBtn.style.display = "block";
});

loginToggle2.addEventListener('click', function(){
  // // loginActive.style.display = "block";
  // loginBtn.style.display = "block";
  // loginActive.style.display = "none";
  loginActive2.style.display = "none";
  loginBtn.style.display = "block";
});

// for (var i = 0; i < loginActive.length; i++) {

//   loginActive[i].onclick = function(){
//     // modal.style.display = "block";
//     // loginActive.classList.toggle('active');
//     // loginBtn.classList.toggle('active');
//     // loginBtn.classList.remove('active');
//     // console.log(loginBtn + 'ffff');
//     // loginBtn.style.display = "none";
//     // signUpBtn.style.display = "block";
//     // loginBtn.style.display = "block";
//     // loginActive.style.display = "block";
//   };
// }


// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
// initMap();


// link.addEventListener('click', function(){
//   loginActive.style.display = "block";
// });

// exitModalLogin.addEventListener('click', function() {
//   loginActive.style.display = "none";
// });

// window.addEventListener('click', function(event) {
//   if (event.target == loginActive) {
//     loginActive.style.display = "none";
//   }
// });