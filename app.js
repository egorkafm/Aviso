// const headerLogin = document.getElementById('headerLogin');

// headerLogin.addEventListener('click', function() {
//   headerLogin.className.add("active");
// })

let menuBtn = document.querySelector('.burger__menu-btn');
let menu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})