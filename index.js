window.addEventListener("load", function (event) {
  
  let aboutEle = document.querySelector('.nav__link--about');
  let homeEle = document.querySelector('.nav__link--home');
  let contactEle = document.querySelector('.nav__link--contact');
  let workEle = document.querySelector('.nav__link--work');
  let resumeEle = document.querySelector('.nav__link--resume');
  let navToggleEle = document.querySelector('.nav-toggle');
  let navEle = document.querySelector('.nav');
  let hamburger = document.querySelectorAll('.hamburger');

  let path = window.location.pathname;
  let page = path.split("/").pop();


  window.addEventListener('scroll', () =>{
    let yheight = window.scrollY;
    document.body.classList.remove('nav__show');
    hamburger.forEach(element => {
      element.classList.remove('hamburger__cross');
    });
    if(yheight > 40){
      navEle.classList.add('nav--color');
    }else{
      navEle.classList.remove('nav--color');
    }
  })

  navToggleEle.addEventListener('click', () =>{
    document.body.classList.toggle('nav__show');
    hamburger.forEach(element => {
      element.classList.toggle('hamburger__cross');
    });

  })

  navEle.addEventListener('click', (ele) => {
    navEle.classList.add('nav--color');
  })

  if(page === 'index.html' || path === '/'){
    homeEle.classList.add('nav_link_js');
  }
  if(page === 'about.html'){
    aboutEle.classList.add('nav_link_js');
  }
  if(page === 'work.html'){
    workEle.classList.add('nav_link_js');
  }
  if(page === 'contact.html'){
    contactEle.classList.add('nav_link_js');
  }
  if(page === 'resume.html'){
    resumeEle.classList.add('nav_link_js');
  }

});