document.addEventListener('DOMContentLoaded', () => {
  const imgNavHamburger = document.getElementById('img-nav-hamburger');
  const menuNav = document.querySelector('nav > ul');
  
  imgNavHamburger.addEventListener('click', (e) => {
    if (menuNav.classList.contains('hide')) {
      menuNav.classList.remove('hide');
    } else {
      menuNav.classList.add('hide');
    }
  })
});