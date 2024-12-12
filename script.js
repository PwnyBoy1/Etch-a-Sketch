const grid = document.querySelector(".grid"); 
//let gridSize = 16;
let gridSize = prompt("Please Enter Preferred Grid Size.", "16")

function createGrid (){
    grid.innerHTML = "";
    for(let i = 0; i < gridSize * gridSize; i++){
    const div = document.createElement("div");
    div.className = "cell";
    grid.appendChild(div);
}
}

createGrid();
const cells = document.getElementsByClassName("cell");

Array.from(cells).forEach(cell => {
    cell.addEventListener("mouseover", function() {
        cell.classList.add("red");})
})


