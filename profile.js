const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

const page = document.querySelector(".page");
// const page = document.getElementsByClassName("page");

const exitModal = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// btn.addEventListener('click', function() {
//   modal.style.display = "block";
// });

page.addEventListener('click', function() {
  modal.style.display = "block";
});

// exitModal.onclick = function() {
//   modal.style.display = "none";
// }

exitModal.addEventListener('click', function() {
  modal.style.display = "none";
});

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});