const oscurecer = document.querySelector(".oscurecer");
const button = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const enlaceHeader = document.querySelectorAll(".list-item");
const sections = document.querySelectorAll(".section");

const MOBILE_BREAKPOINT = 768;


function lockScroll(){
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    if (scrollbarWidth) document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockScroll(){
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.paddingRight = '';
}

button.addEventListener("click", (e)=>{ 
    if (window.innerWidth < MOBILE_BREAKPOINT) {
        const opened = nav.classList.toggle('open');
        oscurecer.style.display = opened ? 'block' : 'none';
        if (opened) lockScroll(); else unlockScroll();
    } else {
        // En escritorio mostrar el nav y no usar overlay
        nav.classList.remove('open');
        oscurecer.style.display = 'none';
        unlockScroll();
    }

    e.stopPropagation();
})

oscurecer.addEventListener("click", ()=>{        
    oscurecer.style.display = 'none';

    nav.classList.remove('open');
    unlockScroll();

})

window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 768) {
        nav.classList.remove('open');
        oscurecer.style.display = 'none';
        unlockScroll();
    }
});

enlaceHeader.forEach((enlace)=>{
    enlace.addEventListener("click",()=>{
        enlace.classList.add("enlace-activo");

        enlaceHeader.forEach((otherEnlace)=>{
            if(otherEnlace !== enlace){
                otherEnlace.classList.remove("enlace-activo");
            }
        })
    })
})

// Cambio de tema

document
    .getElementById("theme-switcher-grid")
    .addEventListener("click", function () {
        this.classList.toggle("night-theme");
        document.body.classList.toggle("night-theme");
        nav.classList.toggle("night-theme");
        header.classList.toggle("night-theme");
        sections.forEach(s => s.classList.toggle('night-theme'));
    });
