// **** SCRIPT **** //
// ================ //

// **** Line Scroll **** //

window.onload = () => {
    window.addEventListener("scroll", () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;

        let barre = (position / hauteur) * largeur;

        document.getElementById("top-barre").style.width = barre + "px";
    });
};



// **** Burger **** //

const btn = document.querySelector('.burger-menu');
const menu = document.querySelector('.nav-burger');

btn.addEventListener('click', burger);

function burger(){
    menu.classList.toggle('active');
}


// **** GreenSocks Anims **** //

const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const links = document.querySelectorAll('.item-nav');

window.addEventListener('load', () => {

    const tl = gsap.timeline({paused: true});

    tl
    .staggerFrom(links, 4, {opacity: 0, ease: "power2.out"},0.3 ,0.2)
    .from(l1, 2, {width: 0, ease: "power2.out"}, 0)
    .from(l2, 2, {width: 0, ease: "power2.out"}, 0)
    .from(l3, 2, {width: 0, ease: "power2.out"}, 0);

    tl.play();
})