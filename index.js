// gsap animation

gsap.from('nav', {
  y: 15,
  delay: 0.4,
  duration: 0.8,
  ease: 'slow',
});

gsap.from('.heade-text, h1, h2, h4, .btn-div', {
  y: 100,
  delay: 0.9,
  duration: 0.5,
  stagger: 0.1,
  ease: 'slow.out',
});

// progress bar
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// image scren functions
function openImg(imgName) {
  var i, x;
  x = document.getElementsByClassName('picture');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(imgName).style.display = 'block';
}

// aos initial
AOS.init();

// dynamic year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
