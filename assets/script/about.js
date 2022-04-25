const imgStudent = document.querySelectorAll('.img-student')
const carStudent = document.querySelectorAll('.card-student')
let i

function randomInt(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1)
}

carStudent.forEach(element => {
    i = randomInt(0, 1)
    gsap.to(element, {repeat: -1, delay: i, keyframes:[
        {duration: 1, y: -5, ease: 'easeInOut'},
        {duration: 1, y: 0, ease: 'easeInOut'},
    ]})
});