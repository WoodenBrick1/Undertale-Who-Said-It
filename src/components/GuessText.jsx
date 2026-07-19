import "../styles/GuessText.css"

function GuessText ({ guessedCorrectly, characterSelected, correctCharacter, gameOver }) {
    console.log("Rendering: GuessText, Props: ", guessedCorrectly, characterSelected, correctCharacter, gameOver)

    let text = "If you see this, something went rly wrong"

    if (characterSelected === "") {
        if (guessedCorrectly == null) {
            text = "Please Select a Character"
        } else if (guessedCorrectly) {
            text = `You guessed correctly!!!`
        } else if (!gameOver) {
            text = `You we're wrong!`
        } else {
            text = `You we're wrong! It was ${correctCharacter}`
        }
    } else {
        text = `Selected: ${characterSelected}`
    }

    return (
        <p id="guess-text">{text}</p>
    )
}

export default GuessText