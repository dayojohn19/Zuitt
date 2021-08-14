

var wel = document.querySelector('.welcome');
document.addEventListener('DOMContentLoaded', ()=>{
    wel.style.display = 'block';
});

window.onclick = function(event) {
    if (event.target == wel) {
      wel.style.display = "none";
    }
  }

function git_repositories(){var gr = document.querySelector('.git_repositories');var gf = document.querySelector('.git_fork');gr.style.display = 'block';gf.style.display = 'none';}
function git_fork (){var gr = document.querySelector('.git_repositories');var gf = document.querySelector('.git_fork');gf.style.display = 'block';gr.style.display = 'none';}

var mybutton = document.getElementById("myBtn");window.onscroll = function() {scrollFunction()};function scrollFunction() {if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {mybutton.style.display = "block";} else {mybutton.style.display = "none";}}function topFunction() {document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}