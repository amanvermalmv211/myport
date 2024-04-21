burger = document.querySelector('.burger');
navbar = document.querySelector('.navBar');
navList = document.querySelector('.nav-list');
logo = document.querySelector('.log');
rightNav = document.querySelector('.logInOut');
icon = document.querySelector('.myIcon')

let myPopUp = document.getElementById("myPopUp");
let makeItActive = document.getElementById("makeItActive");

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    logo.classList.toggle('v-class');
    navbar.classList.toggle('h-nav')
});

function openPopUp(){
    myPopUp.classList.add("open-PopUP");
    makeItActive.classList.add("active");
}

function closePopUp(){
    myPopUp.classList.remove("open-PopUP");
    makeItActive.classList.remove("active");
}