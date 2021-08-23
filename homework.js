// Display entire bingo board
function displayBingo(){
    const bingo = document.getElementById('bingo-container')

    for (let bingoNumber = 1; bingoNumber < 77; bingoNumber++) {
        const bingoNode = document.createElement('div')
        bingoNode.innerHTML = bingoNumber
        bingoNode.id = bingoNumber
        bingoNode.className = 'cells'
        bingo.appendChild(bingoNode)
        
    }
}
     
function generateRandomNumber(){
    const randNum = Math.floor(Math.random() *76)
    const randNumNode = document.querySelector('h4')
    randNumNode.innerText = 'Number: ' + randNum
    const cells = document.querySelectorAll('.container .cells')
    cells.innerText = 'yo'

}

function changeH1(){
    const h1 = document.querySelector('h1')
    h1.innerText = 'New Bingo Game'
    
}




window.onload = function(){
    displayBingo()
    
}