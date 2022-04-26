const cursor = document.querySelector('.new-cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 50)+"px; left:"+(e.pageX - 50)+"px;")
})

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
    circle.setAttribute('style', 'top:'+(e.pageY - 60)+"px; left:"+(e.pageX - 60)+"px;")
})
