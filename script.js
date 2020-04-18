const navButton = document.querySelector('.menu-mobile');

const navContent = document.querySelector('.navigation-mobile');

const description = document.querySelector('.description');

navButton.addEventListener('click', function(){


    if(navContent.classList.contains('active')){
        navContent.classList.remove('active');
        document.querySelector('.bar-1').classList.remove('open-1');
        document.querySelector('.bar-2').classList.remove('open-2');
        document.querySelector('.bar-3').classList.remove('open-3');

    } else {
        navContent.classList.add('active');
    document.querySelector('.bar-1').classList.add('open-1');
    document.querySelector('.bar-2').classList.add('open-2');
    document.querySelector('.bar-3').classList.add('open-3');
     
    }

});

const form = document.querySelector('form');

window.onload = ('load',() => {
    
    description.classList.add('description-animation');

    form.classList.add('description-animation');
  });

