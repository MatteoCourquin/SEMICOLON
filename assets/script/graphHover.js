
let graphHover = document.querySelectorAll('.graph-hover');
let graphInsert = document.querySelector('.graph-insert');

graphHover.forEach(graph => {
    graph.addEventListener('mouseover', (e) => {
        let html = `
            <div class="card-graph-percent">
                <svg viewBox="0 0 36 36" class="circle-svg" fill="transparent">
                    
                    <path class="around" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    
                    <path class="percent" stroke-dasharray="${graph.id}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    
                </svg>

                <p>${graph.id} %</p>

            </div>
        `
        console.log(e.clientX)
        // console.log(graph.id)
        graphInsert.style.top = e.pageY + 'px';
        graphInsert.style.left = e.pageX + 'px';
        graphInsert.style.display = "block"
        graphInsert.innerHTML = html;
        setTimeout(displayNone , 4000); 
        function displayNone() {
            graphInsert.style.display = "none"
        }
    })
})