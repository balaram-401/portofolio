function toggleMenu() {
    let menu = document.querySelector('.menu-links');
    let icon = document.querySelector('.humburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open')
}
let v=true;
function theme() {
    
    if (v) {
        another();
    }
    else anothr();
}
function another() {
    let body = document.getElementsByTagName('body')[0];
    let icon = document.querySelectorAll('i');
    let a = document.querySelectorAll('a');
    a.forEach((r) => {
        r.style.color = "white"
    })
    let span = document.querySelectorAll('span');
    span.forEach((s) => {
        s.style.backgroundColor = "white"
    })
    icon.forEach((s)=>{
    s.style.color='white'
    })
    body.classList.toggle('dark-mode');
    // let menulinks=document.getElementsByClassName(".menu-links");
    // menulinks.style.backgroundColor="black";
   v=false;
}
function anothr(){
    let body = document.getElementsByTagName('body')[0];
let icon = document.querySelectorAll('i');
let a = document.querySelectorAll('a');
icon.forEach((f)=>{
    f.style.color="black"
})
a.forEach((r) => {
    r.style.color = "black"
})
let span = document.querySelectorAll('span');
span.forEach((s) => {
    s.style.backgroundColor = "black"
})
body.classList.toggle('dark-mode');
// body.classList.toggle('ic')
v=true;
}
