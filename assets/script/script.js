// **** SCRIPT **** //
// ================ //


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