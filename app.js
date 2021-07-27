// const headerLogin = document.getElementById('headerLogin');

// headerLogin.addEventListener('click', function() {
//   headerLogin.className.add("active");
// })

let menuBtn = document.querySelector('.burger__menu-btn');
let menu = document.querySelector('.burger__menu');
const link = document.getElementById('headerLogin');
const loginActive = document.querySelector(".header__login");
const span = document.getElementsByClassName("close")[0];

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});


link.addEventListener('click', function(){
  loginActive.style.display = "block";
});

span.addEventListener('click', function() {
  loginActive.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == loginActive) {
    loginActive.style.display = "none";
  }
})