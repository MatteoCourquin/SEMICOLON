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
            end: "bottom top"
        }
    })
    
    TL
    .to(title, {duration: 1, opacity: 1, y: 0})
    .to(text1, {duration: 1, opacity: 1, y: 0}, '-=0.75')
    .to(text2, {duration: 1, opacity: 1, y: 0}, '-=0.75')

    let currentFunction = section.getAttribute('data-trigger-key')

    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onEnter: ({ progress, direction, isActive }) => {
            getCurrenAnimation(currentFunction)
            console.log('enter down ' + currentSection)
        },
        onEnterBack: ({ progress, direction, isActive }) => {
            getCurrenAnimation(currentFunction)
            console.log('enter up ' + currentSection)
        },
    })

    console.log(`#${section.id} .title`)
})


ScrollTrigger.create({
    snap: 1 / 3
})

function getCurrenAnimation(fnstring) {
    switch (fnstring) {
        case "first": first(); break;
        case "second": second(); break;
        case "third": third(); break;
        case "fourth": fourth(); break;
    }
}

function first() {
    currentSection = 'first'
    // timeline1.play()
}

function second() {
    currentSection = 'second'
    // timeline2.play()
}

function third() {
    currentSection = 'third'
    // timeline3.play()
}

function fourth() {
    currentSection = 'fourth'
    // timeline4.play()
}
