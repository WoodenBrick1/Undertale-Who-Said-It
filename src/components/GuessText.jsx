import "../styles/GuessText.css"

function GuessText ({ guessedCorrectly, characterSelected, correctCharacter, gameOver }) {
    console.log("Rendering: GuessText, Props: ", guessedCorrectly, characterSelected, correctCharacter, gameOver)

    let text = "If you see this, something went rly wrong"
    let color = ""

    if (characterSelected === "") {
        if (guessedCorrectly == null) {
            text = "Please Select a Character"
        } else if (guessedCorrectly) {
            text = `You guessed correctly!!!`
            color = "green"
        } else if (!gameOver) {
            text = `You we're wrong!`
            color = "red"
        } else {
            text = `You we're wrong! It was ${correctCharacter}`
            color = "red"
        }
    } else {
        text = `Selected: ${characterSelected}`
    }

    return (
        <p id="guess-text" className={color}>{text}</p>
    )
}

export default GuessText