// Modal for cinemaPage 
const cinemaPage = document.querySelectorAll(".cinemaPage");
const modal = document.getElementById("myModal");

for (var i = 0; i < cinemaPage.length; i++) {

  cinemaPage[i].onclick = function(){
    modal.style.display = "block";
  };
}
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Modal for cinemaPage with mouseover, but is not correct works
// const cinemaPage = document.querySelectorAll(".cinemaPage");
// const modal = document.getElementById("myModal");

// for (var i = 0; i < cinemaPage.length; i++) {

//   cinemaPage[i].addEventListener('mouseover', function(){
//     modal.style.display = "block";
//   });
// }
// window.addEventListener('mouseover', function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


// Modal for details 
const detailsBtn = document.querySelectorAll(".detailsBtn");
const pageDetails = document.querySelector(".modal__details");

for (var i = 0; i < detailsBtn.length; i++) {

  detailsBtn[i].onclick = function() {
    pageDetails.style.display = "block";
  };

};

window.addEventListener('click', function(event) {
  if (event.target == pageDetails) {
    pageDetails.style.display = "none";
  }
});


// !!!!!!!!!!!!! 1
// const modal = document.getElementById("myModal");
// const page = document.querySelector(".page");
// const exitModal = document.getElementsByClassName("close")[0];

// exitModal.addEventListener('click', function() {
//   modal.style.display = "none";
// });

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// window.addEventListener('click', function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


// !!!!!!!!!!!!! 2
// const modalDetails = document.getElementById("modalDetails");
// const btnDetails = document.getElementById("modalDetailsBtn");

// const pageDetails = document.querySelector(".modal__details");
// const exitModalDetails = document.getElementsByClassName("close")[1];

// btnDetails.addEventListener('click', function() {
//   pageDetails.style.display = "block";
// });

// exitModalDetails.addEventListener('click', function() {
//   pageDetails.style.display = "none";
// });

// window.addEventListener('click', function(event) {
//   if (event.target == pageDetails) {
//     pageDetails.style.display = "none";
//   }
// });