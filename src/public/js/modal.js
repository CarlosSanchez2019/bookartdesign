let btn = document.querySelector('.btn-compra')
let modal = document.querySelector('.modal')
let close = document.querySelector('.btn-close')

btn.addEventListener('click', () => {
    modal.classList.toggle('hide')
})

close.addEventListener('click', ()  => {
    modal.classList.toggle('hide')
})

window.addEventListener('keyup', e  => {
    
    if(e.keyCode===27){
        modal.classList.toggle('hide')
    }
})