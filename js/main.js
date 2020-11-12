const headerMenu = document.querySelector('.header-menu');
const headerBurger = document.querySelector('.header-burger');
const hederLink = document.querySelectorAll('.heder-link');
headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
hederLink.forEach(function (event) {
  event.addEventListener('click', function () {
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
  });
});
$(function () {
  let header = $('#header');
  let headerH = header.height();
  let scrollPos = $(window).scrollTop('-200px');

  $(window).on('scroll load resize', function () {
    introH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > headerH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
  header.addClass('fixed');
});

$(document).ready(function () {
  $('.heder-link').click(function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top + 'px',
      },
      { duration: 800, esing: 'swing' }
    );
  });
});
