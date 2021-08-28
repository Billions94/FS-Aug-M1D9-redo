// Display entire bingo board
function displayBingo(){
    const bingo = document.getElementById('bingo-container')

    for (let bingoNumber = 1; bingoNumber < 76; bingoNumber++) {
        const bingoNode = document.createElement('div')
        bingoNode.innerHTML = bingoNumber 
        bingoNode.id = bingoNumber
        bingoNode.className = 'cells'
        bingo.appendChild(bingoNode)
        
    }
}

function fillArray(){
    let array = [];
    for (let i = 0; i < array.length; i++) {
        array.push(i+1)
    }
    return array
}

function getRandomArray(range){
    let random = Math.floor(Math.random() * range.length)
    let randomNode = range.splice(random, 1)[0]
    return randomNode
}
     
function generateRandomNumber(){
    const randNum = Math.floor(Math.random() *76)
    const randNumNode = document.querySelector('h4')
    randNumNode.innerText = 'Number: ' + randNum
    let cells = document.querySelectorAll('.container .cells')
    cells[randNum -1].style.backgroundColor = 'blue'
}

function changeH1(){
    const h1 = document.querySelector('h1')
    h1.innerText = 'New Bingo Game'   
}




window.onload = function(){
    displayBingo()
    
}