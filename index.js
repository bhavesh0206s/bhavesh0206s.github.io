
  window.addEventListener("load", function (event) {
    
    let aboutEle = document.querySelector('.nav__link--about');
    let homeEle = document.querySelector('.nav__link--home');
    let contactEle = document.querySelector('.nav__link--contact');
    let workEle = document.querySelector('.nav__link--work');
    let resumeEle = document.querySelector('.nav__link--resume');

    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    if(page === 'index.html'){
      homeEle.classList.add('nav_link_js')
    }
    if(page === 'about.html'){
      aboutEle.classList.add('nav_link_js')
    }
    if(page === 'work.html'){
      workEle.classList.add('nav_link_js')
    }
    if(page === 'contact.html'){
      contactEle.classList.add('nav_link_js')
    }
    if(page === 'resume.html'){
      resumeEle.classList.add('nav_link_js')
    }

 });