const navButton = document.querySelector('.menu-mobile');

const navContent = document.querySelector('.navigation-mobile');

const description = document.querySelector('.description');

navButton.addEventListener('click', function(){
    
    if(navContent.classList.contains('active')){
        navContent.classList.remove('active');
    } else {
        navContent.classList.add('active');
    }

});


window.onload = ('load',() => {
    description.classList.add('description-animation');
  });