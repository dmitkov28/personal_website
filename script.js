const navBtn = document.getElementById('nav-icon');

const navContent = document.querySelector('.navigation-mobile');

const description = document.querySelector('.description');

navBtn.addEventListener('click', function(){

    if(navContent.classList.contains('active')){
        navContent.classList.remove('active');
    } else {
        navContent.classList.add('active');
     
    }

});


navBtn.addEventListener('click', ()=>{
  if(navBtn.classList.contains('open')){
    navBtn.classList.remove('open')
  } else {
    navBtn.classList.add('open');
  }
});


const form = document.querySelector('form');

window.onload = ('load',() => {
    
    description.classList.add('description-animation');

    form.classList.add('description-animation');
  });

