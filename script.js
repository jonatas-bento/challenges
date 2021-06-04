const openMenu = document.querySelector('.hamburguer');

openMenu.addEventListener('click', function() {
  if (openMenu.classList.contains('open')) {
    openMenu.classList.remove('open');
    document.querySelector('.navBar').style.top = '-614px';
  } else {
    openMenu.classList.add('open');
    document.querySelector('.navBar').style.top = '114px';
  }
}, false);