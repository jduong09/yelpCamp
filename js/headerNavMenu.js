document.addEventListener('DOMContentLoaded', () => {
  const linkLogout = document.getElementById('link-logout');
  const imgNavHamburger = document.getElementById('img-nav-hamburger');
  const menuNav = document.querySelector('nav > ul');
  
  imgNavHamburger.addEventListener('click', (e) => {
    if (menuNav.classList.contains('hide')) {
      menuNav.classList.remove('hide');
    } else {
      menuNav.classList.add('hide');
    }
  });

  linkLogout.addEventListener('click', (e) => {
    e.preventDefault();

    menuNav.innerHTML = '';

    const listItemHome = document.createElement('li');
    const listItemLogin = document.createElement('li');
    const listItemCreate = document.createElement('li');

    const linkHome = document.createElement('a');
    const linkLogin = document.createElement('a');
    const linkCreate = document.createElement('a');

    linkHome.innerHTML = 'Home';
    linkHome.href = './index.html';
    linkLogin.innerHTML = 'Login';
    linkLogin.href = './signIn.html';
    linkCreate.innerHTML = 'Create an account';
    linkCreate.href = './signUp.html';
    linkCreate.classList.add('btn-cta');

    listItemHome.append(linkHome);
    listItemLogin.append(linkLogin);
    listItemCreate.append(linkCreate);

    menuNav.append(listItemHome, listItemLogin, listItemCreate);

  });

  if (window.innerWidth >= 1400) {
    imgNavHamburger.classList.add('hide');
    menuNav.classList.remove('hide');
  } else {
    imgNavHamburger.classList.remove('hide');
    menuNav.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1400) {
      imgNavHamburger.classList.add('hide');
      menuNav.classList.remove('hide');
    } else {
      imgNavHamburger.classList.remove('hide');
      menuNav.classList.add('hide');
    }
  });
});