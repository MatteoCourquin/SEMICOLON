var textWrapper = document.querySelector(".ml7 .letters")
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
)

anime.timeline({ loop: false }).add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: function (el, i) {
        return 900 + 50 * i;
    },
});



var currentSection = ''
let sections = document.querySelectorAll('.section-to-anim')

sections.forEach(section => {

    let title = document.querySelector(`#${section.id} .title`)
    let text1 = document.querySelector(`#${section.id} .text1`)
    let text2 = document.querySelector(`#${section.id} .text2`)

    const TL = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top 60%",
            end: "bottom top",
            // markers: true,
        }
    })
    
    TL
    .to(title, {duration: 1, opacity: 1, y: 0})
    .to(text1, {duration: 1, opacity: 1, y: 0}, '-=0.75')
    .to(text2, {duration: 1, opacity: 1, y: 0}, '-=0.75')

    let currentFunction = section.getAttribute('data-trigger-key')

    ScrollTrigger.create({
        trigger: section,
        // markers: true,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        snap: 1,
        onEnter: ({ progress, direction, isActive }) => {
            getCurrenAnimation(currentFunction)
            // console.log('enter down ' + currentSection)
        },
        onEnterBack: ({ progress, direction, isActive }) => {
            getCurrenAnimation(currentFunction)
            // console.log('enter up ' + currentSection)
        },
    })
})

function getCurrenAnimation(fnstring) {
    switch (fnstring) {
        case "first": 
            currentSection = 'first'; 
            break;
        case "second":
            currentSection = 'second'; 
            break;
        case "third": 
            currentSection = 'third'; 
            break;
        case "fourth":
            currentSection = 'fourth';
            break;
        case "fifth":
            currentSection = 'fifth';
            break;
        case "sixth":
            currentSection = 'sixth';
            break;
        case "seventh":
            currentSection = 'seventh';
            break;
    }
}



// Scroll 

let btnScroll = document.querySelector('.arrow-scroll-button')
let rootElement = document.documentElement;
let firstSection = document.querySelector('.second')
let lastSection = document.querySelector('.seventh')


gsap.to(btnScroll, {
    right: 20,
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


btnScroll.addEventListener('click', () => {
    let scrollDistance = document.documentElement.clientHeight;
    window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth'
    })
})


gsap.to(btnScroll, {y: '-10', repeat: -1, yoyo: true, duration: 0.6, ease: 'power1.inOut'})