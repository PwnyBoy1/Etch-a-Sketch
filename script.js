const grid = document.querySelector(".grid"); 

for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.className = "cell";
    grid.appendChild(div);
}

const cells = document.getElementsByClassName("cell");

Array.from(cells).forEach(cell => {
    cell.addEventListener("mouseover", function() {
        cell.classList.add("red");})
})