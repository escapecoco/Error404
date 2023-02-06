const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - -130)+"px; left:"+(e.pageX - 25)+"px;")
})

/*
document.addEventListener('click', turnonoff);
function turnonoff(){
}
*/

window.onload = function(){
    console.log('active');
    document.querySelector('.hero').style.background = "black";
    document.querySelector('.h1').style.color = "white";
    document.querySelector('.p1').style.color = "white";
    /* Indécis
    document.querySelector('.navbar-brand p').style.color = "white";
    for (i = 0; i < document.querySelectorAll('.navbar-line a').length; i++) {
        document.querySelectorAll('.navbar-line a')[i].style.color="white";
    }
    */
    setTimeout(() => {
        document.querySelector('.h1').style.display = "none";
        document.querySelector('.p1').style.display = "none";
        cursor.classList.add('display');
        document.querySelector('body').style.cursor = "none";
        for (e = 0; e < document.querySelectorAll('.hero .random-div').length; e++) {
            document.querySelectorAll('.hero .random-div')[e].classList.add('display-block');
        }
    }, "14000")
}
document.querySelector('.error').addEventListener('click', success);
function success(){
    document.querySelector('.hero').style.background = "#dadada";
    document.querySelector('.h1').style.color = "black";
    document.querySelector('.p1').style.color = "black";
    document.querySelector('.h1').textContent = "Bravo !";
    document.querySelector('.p1').textContent = "Raffraichis la page pour recommencer";
    cursor.classList.remove('display');
    document.querySelector('body').style.cursor = "auto";
    document.querySelector('.h1').style.display = "inline-block";
    document.querySelector('.p1').style.display = "inline-block";
    cursor.classList.remove('display-flex');
    setTimeout(() => {
        document.querySelector('.h1').style.display = "inline-block";
        document.querySelector('.p1').style.display = "inline-block";
        cursor.classList.remove('display-flex');
    }, "5000");

}

var randomdiv = document.querySelectorAll('.random-div');
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for ( var i = 0; i < randomdiv.length; i++ ) {
    var thisDiv = randomdiv[i];
    
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";
}
function getRandomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}


const btnA = document.querySelector('.mobile-nav');
const btnB = document.querySelector('.cross2');
const slide = document.querySelector('.left-part-slide');
const filterappear = document.querySelector('.filter-black');

let togglebtn;

btnA.addEventListener('click', sliderightmobile);
btnB.addEventListener('click', crossclose);


function sliderightmobile(){

    if(!togglebtn) {
        slide.style.setProperty("transform", "translate(0)", "important");
        //slide.style.transform = "translate(0)"; Si sa ne marche pas
        filterappear.style.background = "#00000060";
        return;
    }
};

function crossclose(){

    if(!togglebtn) {
        slide.style.transform = "translate(100%)";
        filterappear.style.background = "#00000000";
        return;
    }
}