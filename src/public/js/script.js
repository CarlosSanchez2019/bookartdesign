let body = document.querySelector('html')

let nav = document.querySelector('header')

let ediciones = document.querySelectorAll('.ediciones')

document.addEventListener('scroll', () =>{
    
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        
        
        nav.style.background = "rgba(0,0,0,.7)";
    }else{
        
        nav.style.background = "transparent";
    }

})

document.addEventListener('scroll', () =>{
    let scrollBody = body.scrollTop;


    for(let i = 0; i < ediciones.length; i++){
    
    let imgTop = ediciones[i].offsetTop;
    
    if(scrollBody > imgTop - 300){
      ediciones[i].style.opacity = 1;
      ediciones[i].style.transform = "translateY(0)"
    }
  }
})
// ----------------------------------------------------------
let burger = document.querySelector('.burger');
let ul = document.querySelector('ul')

burger.addEventListener('click', () =>{
  
  ul.classList.toggle('agregar');
  
})