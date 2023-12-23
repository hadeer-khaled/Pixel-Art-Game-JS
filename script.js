let resetBtn  = document.querySelector(".reset-btn")
let eraseBtn  = document.querySelector(".erase-btn")
let colorBtn  = document.querySelector(".color-btn")
let gridSizeElem  = document.querySelector(".grid-size")
let containerElem = document.querySelector(".container")


let gridSizeValue = gridSizeElem.value
let isDraw = false
let isErase= false

function createGrid(){
    containerElem.style.setProperty("--grid-size", gridSizeValue)
    for (let boxNumber = 0 ; boxNumber < gridSizeValue * gridSizeValue  ; boxNumber++){
        let box = document.createElement("div")
        box.classList.add("box") 
    
        box.addEventListener("mouseover" , () =>{
            if( isDraw == false) return;
            if(isErase == true){
                box.style.backgroundColor ="#00000098";
            }
            else{

                 box.style.backgroundColor = colorBtn.value;
            }
        })
        box.addEventListener("mousedown" , () =>{
            if(isErase == true){
                box.style.backgroundColor = "#00000098";
    
            }
            else{   
                 box.style.backgroundColor = colorBtn.value;
            }
        } )
        containerElem.appendChild(box)
    }
}

createGrid()

window.addEventListener("mousedown",()=>{
    isDraw = true
})
window.addEventListener("mouseup",()=>{
    isDraw = false
})
resetBtn.addEventListener("click", reset)
function reset(){
    containerElem.innerHTML=" "
    createGrid()
}
gridSizeElem.addEventListener("keyup",()=>{
    gridSizeValue = gridSizeElem.value
    reset()    

})
gridSizeElem.addEventListener("change",()=>{
    gridSizeValue = gridSizeElem.value
    reset()    

})
eraseBtn.addEventListener("click",()=>{
    isErase = true ;
})

colorBtn.addEventListener("change" , ()=>{
    isErase = false ;

})