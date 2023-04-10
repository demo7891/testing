//----------------------- preloader--------------------------
function hidev(){
    document.getElementById("center").style.display="none";
}
setTimeout("hidev()",7000)
    


function showv(){
document.getElementById("original_page").style.display="block";
document.body.style.backgroundColor="#9cd1cd";
}setTimeout("showv()",7000)

//----------------------- preloader--------------------------





//----------------------- navmenu----------------------------
let menu= document.querySelector('#menu-icon');
let navlist= document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navlist.classList.toggle('open');

}

function myFunction(x) {
    x.classList.toggle("fa-xmark");
  }
  
//----------------------- navmenu----------------------------






//----------------------- content ----------------------------
document.getElementById('rd').addEventListener('click',function(){
    document.getElementById('rd').style.display='none';
    document.getElementById("hiden").style.display="block";
})

document.getElementById('rl').addEventListener('click',function(){
    document.getElementById("rd").style.display="block";
    document.getElementById('hiden').style.display='none';
})
//----------------------- content ----------------------------





//----------------------- slider(gallery) ----------------------------
var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000)
//----------------------- slider(gallery) ----------------------------






//----------------------- testimonial----------------------------
const wrapper = document.querySelector('.wrapper');
const indicators =[...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0 ;//default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () =>{
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100*i}%`;
        item.classList.add('active');
        currentTestimonial = i ;
    })
})

//----------------------- testimonial----------------------------