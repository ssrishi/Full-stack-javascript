const color = ["#FE7BE5","#FE7BE5","#33BBC5","#19A7CE","#F6F1F1","#E1AEFF","#FFB84C","#2CD3E1","#D4ADFC","#F9E2AF","#E11299","#FBA1B7","#75C2F6","#F0DE36","#4682A9"]

const container = document.querySelector(".container")
container.addEventListener('click',(e) =>{
    let circle = document.createElement("div");
    circle.className = "div";
    circle.style.top = `${e.clientY-125}px`;
    circle.style.left = `${e.clientX-30}px`;
    circle.style.backgroundColor = `${color[Math.floor(Math.random()*15)]}`;
    container.appendChild(circle);
    
    setInterval(function() {
        circle.remove()
    }, 3000);
})

