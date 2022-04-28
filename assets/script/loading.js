TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});

var t1 = new TimelineMax();

t1
.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    top: -50,
    ease: Expo.easeInOut
})
.from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    top: -50,
    ease: Expo.easeInOut
}, "-=5")
.to(".ringOne", 4, {
    delay: 0.4,
    top: 40,
    left: 40,
    position: "fixed",
    opacity: 1,
    scale: .20,
    ease: Expo.easeInOut
})
.to(".ringTwo", 4, {
    delay: 0.9,
    top: 40,
    left: 40,
    opacity: 0,
    scale: .20,
    ease: Expo.easeInOut
},"-=5");


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