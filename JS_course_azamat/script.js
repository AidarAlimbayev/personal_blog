let startButtons = document.querySelectorAll('[data-start-button]')

let player 
let turn
let endGame = false
let startGameElement = document.getElementById('start_game')
let board = document.querySelector('.board')
let cells = document.querySelectorAll('.cell')
let endGameElement = document.querySelector('.end_game')
let restartButton = document.querySelector('.restart_game')
let endGameMessage = document.querySelector('.end_game_message')
let WinComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


startButtons.forEach(function(button){
    button.addEventListener('click', startGame)
    console.log(button)
})

function startGame(event) { //start game function after press button
    event.preventDefault()
    if (this.className == "x"){ //player choose
        player = "x"   
    } else {
        player = "o"
    }
    console.log("This player is - ")
    console.log(player)

    startGameElement.classList.add('hide')
    board.classList.remove('hide')
    board.classList.add(turn)
}

cells.forEach(function(cell){
    cell.addEventListener('click', handleClick)
})

function handleClick(e) {
    this.classList.add(player)
    let isDraw
    if(checkWin(player)){
        isDraw = false
        console.log('win')
        endGameFunc(player, isDraw)
    } else if (checkDraw()){
        isDraw = true
        endGameFunc(player)
    } else {
        swapTurns()
    }
        
    if(endGame){
        endGameElement.classList.remove('hide')
        endGameMessage.innerText = `$(player) Won`
    }
    //console.log(checkWin)
}

function endGamefunc(endGame) {
    endGameElement.classList.
}

function swapTurns() { 
    if(player == 'x') {
        player = 'o'
        turn = 'o_turn'
    } else {
        player = 'x'
        turn = 'x_turn'
    }
    board.classList.remove('x_trun')
    board.classList.remove('o_trun')

    board.classList.add(turn)
 }

restartButton.addEventListener('click', restartGame)

function restartGame(e) {
    e.preventDefault()
    board.classList.add('hide')
    endGameElement.classList.add('hide')
    startGameElement.classList.remove('hide')

    cells.forEach(function(cell)) {
        cell.classList.remove('o')
        cell.classList.remove('x')
    }
}


function checkWin(player) {
    WinComb.forEach(function(comb){
        let check = 0
        comb.forEach(function(index) {
            let c = cells[index].classList.contains(player)
            if(c == true){
                check++
            }
        })
        if (check == 3){
            endGame = true
            return true
        }
    })

    if(!endgame){
        return false
    } else {
        return true
    }

    
}

function checkDraw() {
    cells.forEach(function(cell){
        let has0 = cell.classList.contains('o')
        let hasX = cell.classList.contains('x')

        if (has0 || hasX) {
            check++
        }
    })
    if (check == 9) {
        endGame = true
        return true
    }
    retrun true
}




// function checkWin(currentClass) {
//    let res =  WinComb.some(combination => {

//         let rs = combination.every(index => {

//             let rss = cells[index].classList.contains(currentClass)

//             console.log(index)
//         })
//         console.log(rs)
//     })
//     console.log(res)
//     return res
// }