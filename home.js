const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const logo = document.getElementById('logo')
const navbar = document.querySelector('.nav-sidebar')
const listitem = document.querySelectorAll('.collaspe')
const arrow_next = document.querySelector('.arrow-next')
const arrow_previous = document.querySelector('.arrow-previous')
const menu = document.querySelector('.mobile-menu img')

next.addEventListener('click',function(){
    logo.classList.add('expand');
    navbar.classList.add('open')
    listitem.forEach((collaspe) =>{
        collaspe.classList.add('show')
    })
    arrow_next.classList.add('open')
    arrow_previous.classList.add('open')
    
    // alert('working');
})
previous.addEventListener('click',function(){
    logo.classList.remove('expand');
    navbar.classList.remove('open')
    listitem.forEach((collaspe) =>{
        collaspe.classList.remove('show')
    })
    arrow_next.classList.remove('open')
    arrow_previous.classList.remove('open')
})
menu.addEventListener('click',function(){
    navbar.classList.toggle('active')
    menu.classList.toggle('active')
    listitem.forEach((collaspe) =>{
        collaspe.classList.toggle('show')
    })
})
