mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
    };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.getElementById('cont_col1').addEventListener('click', function() {
    location.href = 'htmlfiles/globe.html'
}, false);

document.getElementById('cont_col2').addEventListener('click', function() {
    location.href = 'htmlfiles/3d.html'
}, false);

document.getElementById('cont_col3').addEventListener('click', function() {
    location.href = 'htmlfiles/line.html'
}, false);