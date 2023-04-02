const newDiv = document.createElement('div');
const sketchpad = document.querySelector('.sketchpad')


const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.sliderValue')

const changeGridButton = document.querySelector('#changeGridButton')
const clearButton = document.querySelector('#clearButton')


const eraseButton = document.querySelector('#erase')
const blackButton = document.querySelector('#black')
const rainbowButton = document.querySelector('#rainbow')

let blackEraseRainbow = 0 //black - 0 //erase - 1 // rainbow - 2 
let gridSize
let divSize

sliderValue.style.color = "black"
sliderValue.textContent = `${slider.value}x${slider.value}`

slider.oninput = function(){
    gridSize = slider.value
    sliderValue.innerHTML = `${slider.value}x${slider.value}`
}

gridSize = slider.value
createDivs()


function createDivs(){
    divSize = 480/gridSize
    deleteGrid()
    createGrid()
}
function deleteGrid(){
    const tempChild = document.querySelector('.deleteHelper')
    if(tempChild != null)
    {
        while(sketchpad.firstChild)
        {
            const tempChild = document.querySelector('.deleteHelper')
            sketchpad.removeChild(tempChild)
        }
    }
}
function whiteColor(){
    blackEraseRainbow = 1
}
function blackColor()
{
    blackEraseRainbow = 0
}
function rainbowColor(){
    blackEraseRainbow = 2
}
function randomColor()
{
    r = Math.floor(Math.random() * 360)
}
function createGrid(){
    for(i = 0; i<gridSize*gridSize; i++){
        const newDiv = document.createElement('div')
        newDiv.style.width = divSize + "px"
        newDiv.style.height = divSize + "px"
        newDiv.style.margin = '0px'
        newDiv.classList.add('deleteHelper')
        sketchpad.appendChild(newDiv)
        newDiv.addEventListener('mouseenter', () => 
        {
            switch(blackEraseRainbow)
            {
                case 0:
                    newDiv.style.background = 'black'
                    break;
                case 1:
                    newDiv.style.background = 'white'
                    break;
                case 2:
                    randomColor()
                    newDiv.style.background = `hsl(${r}, 100%, 50%)`
                    break;
            }  
        })
    }
}


changeGridButton.addEventListener('click', createDivs)
clearButton.addEventListener('click', createDivs)
eraseButton.addEventListener('click', whiteColor)
blackButton.addEventListener('click', blackColor)
rainbowButton.addEventListener('click', rainbowColor)