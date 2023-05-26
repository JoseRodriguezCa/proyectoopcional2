let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');
let navRed = document.querySelector('.nav-red');
let navWhite = document.querySelector('.nav-white');
let navBlack = document.querySelector('.nav-black');

openBtn.addEventListener('click', function() {
  navBlack.classList.add('open');
});

closeBtn.addEventListener('click', function() {
  navWhite.classList.remove('open');
});

closeBtn.addEventListener('click', function() {
  setTimeout(function() {
    navRed.classList.remove('open');
  }, 650);
});

closeBtn.addEventListener('click', function() {
  setTimeout(function() {
    navBlack.classList.remove('open');
  }, 850);
});


openBtn.addEventListener('click', function() {
  setTimeout(function() {
    navWhite.classList.add('open');
  }, 1300);
});

openBtn.addEventListener('click', function() {
  setTimeout(function() {
    navRed.classList.add('open');
  }, 650);
});





