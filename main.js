const icon = document.querySelector('.mobile-screen img')
const nav = document.querySelector('.top')
const btn =document.querySelector('.logo-wrapper button')

icon.addEventListener('click',function(){
    nav.classList.toggle('active')
    btn.classList.toggle('active')
})

