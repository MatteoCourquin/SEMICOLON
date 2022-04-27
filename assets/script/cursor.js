const cursor = document.querySelector('.new-cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 50)+"px; left:"+(e.pageX - 50)+"px;")
})

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
    circle.setAttribute('style', 'top:'+(e.pageY - 60)+"px; left:"+(e.pageX - 60)+"px;")
})

function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);
