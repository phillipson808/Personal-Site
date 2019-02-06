

//Responsive Nav Bar

const navSlide = function(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');
        
        
    });
    
}

navSlide();

const leftImage = document.getElementsByClassName('leftImage')[0];
const rightImage = document.getElementsByClassName('rightImage')[0];
const bottomLeftImage = document.getElementsByClassName('leftImage2')[0];
const bottomRightImage = document.getElementsByClassName('rightImage2')[0];

leftImage.addEventListener('click',function(){
    window.open('viloa.html','_self');
});


rightImage.addEventListener('click',function(){
    window.open('puffs.html','_self');
});

bottomLeftImage.addEventListener('click',function(){
    window.open('timberland.html','_self');
});

bottomRightImage.addEventListener('click',function(){
    window.open('portlandRoasting.html','_self');
});