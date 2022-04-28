// **** CURSOR ****
// ================

const cursor = document.querySelector(".new-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
    );
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);