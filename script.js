const navButton = document.querySelector('.menu-mobile');

const navContent = document.querySelector('.navigation-mobile');

const description = document.querySelector('.description');

navButton.addEventListener('click', function(){

    

    if(navContent.classList.contains('active')){
        navContent.classList.remove('active');

document.querySelector('.bar.bar-2').style.opacity='1';
document.querySelector('.bar.bar-2').style.transition='500ms';

document.querySelector('.bar.bar-1').style.transform='rotate(0deg)';
document.querySelector('.bar.bar-1').style.transition='500ms';

document.querySelector('.bar.bar-3').style.transform='rotate(0deg)';
document.querySelector('.bar.bar-3').style.transition='500ms';




    } else {
        navContent.classList.add('active');
        document.querySelector('.bar.bar-2').style.opacity='0';
document.querySelector('.bar.bar-2').style.transition='500ms';

document.querySelector('.bar.bar-1').style.transform='rotate(45deg)translate(0.5em, 0em)';
document.querySelector('.bar.bar-1').style.transition='600ms';
document.querySelector('.bar.bar-1').style.transformOrigin='center';

document.querySelector('.bar.bar-3').style.transform='rotate(-45deg)translate(0.7em, -0.35em)';
document.querySelector('.bar.bar-3').style.transition='600ms';
document.querySelector('.bar.bar-3').style.transformOrigin='center center';
    }

});

const form = document.querySelector('form');

window.onload = ('load',() => {
    
    description.classList.add('description-animation');

    form.classList.add('description-animation');
  });

