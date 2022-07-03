function rollDice(_diceFace) {
    return Math.ceil(Math.random() * _diceFace)
}

function displayResults(_diceResults, _diceFace) {
    const diceContainer = document.getElementById("dice_container")
    diceContainer.innerHTML = ""
    _diceResults.forEach(_diceResults => {
        let currentDice = document.createElement("span")
        currentDice.innerHTML = _diceResults + "_ON_D" + _diceFace

        diceContainer.append(currentDice)
    })
}

function generateDiceRoll(_diceCount, _diceFace) {
    const result = []
    for (let diceIndex = 0; diceIndex < _diceCount; diceIndex++) {
        result.push(rollDice(_diceFace))
    }
    return result
}

window.addEventListener("load", _event => {
    const diceContainer = document.getElementById("dice_container");
    ([4, 6, 8, 10, 12, 20]).reverse().forEach((_diceFace) => {
        let newDiceButton = document.createElement("button")
        newDiceButton.innerHTML = "Lancer D" + _diceFace
        newDiceButton.onclick = () => {
            diceContainer.className = "dicier"
                    displayResults(
                        generateDiceRoll(1, _diceFace), _diceFace + generateDiceRoll()
                    )
        }
        const removeButton = document.getElementById("effacer")
        removeButton.onclick = () => {
            displayResults(0)
        }
        document.getElementById("app").prepend(newDiceButton)
    })
})