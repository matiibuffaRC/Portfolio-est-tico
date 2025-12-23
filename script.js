const oscurecer = document.querySelector(".oscurecer");
const button = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

button.addEventListener("click", (e)=>{ 
    nav.classList.toggle('open');
    oscurecer.style.display = 'block';

    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    e.stopPropagation();
})

oscurecer.addEventListener("click", ()=>{        
    oscurecer.style.display = 'none';

    nav.classList.remove('open');
    document.getElementsByTagName("html")[0].style.overflow = "auto";

})

document
    .getElementById("theme-switcher-grid")
    .addEventListener("click", function () {
    this.classList.toggle("night-theme");
        const isNight = this.classList.contains("night-theme");
            document.body.style.backgroundColor = isNight
                ? "var(--bg-color-dark)"
                : "var(--bg-color-light)";
            document.body.classList.toggle("night-theme", isNight);
            header.classList.toggle("night-theme", isNight);
            nav.classList.toggle("night-theme", isNight);
            button.classList.toggle("night-theme", isNight);
            header.style.backgroundColor = isNight
                ? "var(--bg-color-dark)"
                : "var(--bg-color-light)";
    });

