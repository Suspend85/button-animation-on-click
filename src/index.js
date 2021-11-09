$(document).ready(function() {
    $(".button").click(function(){
      $(this).addClass("active");

      setTimeout(function() {
        $('.button').addClass("success");
      }, 3700);
      setTimeout(function() {
        $('.button').removeClass("active");
        $('.button').removeClass("success");
      }, 5000);
    });
});


// document.addEventListener('DOMContentLoaded', function(){
// 	console.log('Готов!');
// });

// const button = document.querySelector("button");

// button.addEventListener("click", async() => {
  
//   })


// document.querySelector(document).ready(function() {
//   document.querySelector(".button").click(function(){
//     document.querySelector(this).classList.add("active");

//     setTimeout(function() {
//       document.querySelector('.button').classList.add("success");
//     }, 3700);
//     setTimeout(function() {
//       document.querySelector('.button').removeClass("active");
//       document.querySelector('.button').removeClass("success");
//     }, 5000);
//   });
// });