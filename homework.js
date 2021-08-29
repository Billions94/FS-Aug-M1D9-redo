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
    const array = [];
    for (let i = 0; i < 76; i++) {
        array.push(i + 1)
    }
    return array
}

function getRandomNum(range){
    const random = Math.floor(Math.random() * range.length)
    const randomNode = range.splice(random, 1)[0]
    return randomNode
}
     
function generateRandomNumber(range){
    const randNum = getRandomNum(range)
    const randNumNode = document.querySelector('h4')
    randNumNode.innerText = 'Number: ' + randNum
    let cells = document.querySelectorAll('.container .cells')
    cells[randNum -1].classList.add('highlight')
}

function changeH1(){
    const h1 = document.querySelector('h1')
    h1.innerText = 'New Bingo Game'   
}


function createUserBoard(){
    const userNum = document.getElementById('value').value
    const  userBoardContainer = document.getElementById('userboard')
    if (parseInt(userNum) > 0) {
        for (let i = 0; i < parseInt(userNum); i++) {
            const userBoard = document.createElement('div')
            userBoard.className = 'userBoard'
            for (let i = 1; i < 25; i++) {
                userBoard.innerText = Math.round(Math.random() *76)
                
            }
            userBoardContainer.appendChild(userBoard)
            
        }
    }
}


    
window.onload = function(){
    displayBingo()
    const range = fillArray()
    const randomBtn = document.getElementById('btn');
    randomBtn.addEventListener('click', function(){
        generateRandomNumber(range)
    })
    
    
} 