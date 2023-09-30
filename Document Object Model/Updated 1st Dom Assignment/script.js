const container = document.querySelector(".container");
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
container.addEventListener('click', (e) => {
    let circle = document.createElement("div");
    let width = 50
    let height = 50
    circle.className = "div";
    circle.style.height = `${height}px`
    circle.style.width =  `${width}px`

    // Calculate the position relative to the container
    const offsetX = e.clientX - container.offsetLeft;
    const offsetY = e.clientY - container.offsetTop;
    // console.log(container.getBoundingClientRect().left)
    circle.style.top = `${offsetY - 15}px`;
    circle.style.left = `${offsetX - 30}px`;
    circle.style.backgroundColor = `${randomColor()}`;
    container.appendChild(circle);
    setInterval(function (){
        if(width < 400){
            width = width +1
            height = height +1
            circle.style.height = `${height}px`
            circle.style.width =  `${width}px`
        }
    },10)
    setTimeout(function () {
        circle.remove();
    }, 5000);
});
