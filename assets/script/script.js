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







let sections = document.querySelectorAll('.section-to-anim')

sections.forEach(section => {

    let title = document.querySelector(`#${section.id} .title`)
    let text1 = document.querySelector(`#${section.id} .text1`)
    let text2 = document.querySelector(`#${section.id} .text2`)

    const TL = gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: title,
            start: "top 60%",
            end: "bottom top"
        }
    })
    
    TL
    .to(title, {duration: 1, opacity: 1, y: 0})
    .to(text1, {duration: 1, opacity: 1, y: 0}, '-=0.75')
    .to(text2, {duration: 1, opacity: 1, y: 0}, '-=0.75')

})