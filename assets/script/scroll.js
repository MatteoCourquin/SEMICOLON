
let btnScroll = document.querySelector('.arrow-scroll-button')
let scrollButton = document.querySelector('.scroll-button')
let firstSection = document.querySelector('.second')
let lastSection = document.querySelector('.seventh')
let rootElement = document.documentElement;

gsap.to(btnScroll, {
    right: 40,
    scrollTrigger: {
        trigger: firstSection,
        toggleActions: "play play play reverse", 
        start: 'top 90%',
        // markers: true,
    }
})
gsap.to(btnScroll, {
    rotate: 225,
    scrollTrigger: {
        trigger: lastSection,
        toggleActions: "play play play reverse",
        start: 'top 90%',
        // markers: true,
    }
})

btnScroll.addEventListener("click", (e) => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function scrollClientHeight() {
    let scrollDistance = document.documentElement.clientHeight;
    window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth'
    })
}
scrollButton.addEventListener("click", scrollClientHeight)
btnScroll.addEventListener("click", scrollClientHeight)

gsap.to(btnScroll, {y: '-10', repeat: -1, yoyo: true, duration: 0.6, ease: 'power1.inOut'})