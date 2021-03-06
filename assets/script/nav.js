// **** NAV **** //
// ============= //

var buttonsMenuToggle = document.querySelectorAll(".menu-toggle");

var menuBar = gsap.timeline({ paused: true});

menuBar.to('.bar-1', 1.3,{
    attr:{d: "M8,2 L2,8"},
    x:1,
    ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 1.3,{
    autoAlpha:0
}, 'start')

menuBar.to('.bar-3', 1.3,{
    attr:{d: "M8,8 L2,2"},
    x:1,
    ease: Power2.easeInOut
}, 'start')

menuBar.reverse();

var navTl = gsap.timeline({ paused:true });

navTl.to('.fullpage-menu', {
    duration:0,
    display: "block",
    ease: Expo.easeInOut
}, "<");

navTl.to('.menu-bg', {
    duration: .8,
    opacity:1,
    ease: Expo.easeInOut
}, "<");

navTl.from('.main-menu li a', {
    duration: .5,
    y:"100%",
    rotateY:30,
    stagger:0.2,
    ease: Expo.easeInOut
}, "-=0.5");

navTl.reverse();

buttonsMenuToggle.forEach(menuToggle => {
    menuToggle.addEventListener('click', () =>{
        menuBar.reversed(!menuBar.reversed());
        navTl.reversed(!navTl.reversed());
    })
});
