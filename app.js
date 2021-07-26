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

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

// const btn = document.querySelectorAll(".myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}