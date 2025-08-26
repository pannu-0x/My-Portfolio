var Typed = new Typed(".multiple-text", {
    strings: ["Fronted Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x'); // change icon when active
};
