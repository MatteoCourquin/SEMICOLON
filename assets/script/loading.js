TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
    delay: 0.4,
    x: 250,
    ease: Expo.easeInOut
}).to(".ringTwo", 4, {
    delay: 0.9,
    x: 250,
    ease: Expo.easeInOut
},"-=5");


var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

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


    document.body.style.overflowY = 'hidden';
    delayedScroll()

let menuIcon = document.querySelector('.menu-toggle')
menuIcon.style.display = 'none';

function delayedScroll() {
    timeoutID = window.setTimeout(enableScroll, 9000);
}

function enableScroll() {
    menuIcon.style.display = 'block';
    document.body.style.overflowY = 'initial';

}