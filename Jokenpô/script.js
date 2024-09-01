const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResults = document.querySelector('.computer-results img')
const userResults = document.querySelector('.user-results img')

const computerSrcImages = [
    'images/pedra.png', 
    'images/papel.png', 
    'images/tesoura.png'
]
/* 
(R) 0 Rock - Pedra 
(P) 1 Papper - Papel
(S) 2 Scissors - Tesoura

Pedra - Ganha de Tesoura, perde para papel 
Papel - Ganha de Pedra, perde para tesoura
Tesoura - Ganha de Papel, Perde para de Pedra
*/

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
}

//Array => 3 posições / 0,1,2
/*
   R - P - S 
   rock
   paper
   scissors
*/

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.textContent = "..."

    userResults.src = computerResults.src = 'images/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userResults.src = computerSrcImages [userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length)
        computerResults.src = computerSrcImages[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue =  ['R', 'P', 'S'][randomNumber]
        const userComputerResults = userValue + computerValue
        const finalResults = winner[userComputerResults]

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResults + ' Ganhou'

    }, 2000);
}



optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})