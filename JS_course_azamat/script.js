let startButtons = document.querySelectorAll('[data-start-button]')

let player 


startButtons.forEach(function(button){
    button.addEventListener('click', startGame)
    console.log(button)
})

function startGame(event) {
    event.preventDefault()
    if (this.className == "x"){
        player = "x"
    } else {
        player = "o"
    }
    console.log("This player is - ")
    console.log(player)
}
