import "../styles/GuessText.css"

function GuessText ({ guessedCorrectly, characterSelected, correctCharacter }) {
    console.log("Rendering: GuessText, Props: ", guessedCorrectly, characterSelected, correctCharacter)

    let text = "If you see this, something went rly wrong"
    if (guessedCorrectly === null) {

        if (characterSelected === "") {
            text = "Please Select a Character"
        } else {
            text = `Selected: ${characterSelected}`
        }
    } else if (guessedCorrectly) {
        text = `You guessed correctly!!!`
    } else {
        text = `You we're wrong! It was ${correctCharacter}`
    }


    return (
        <p id="guess-text">{text}</p>
    )
}

export default GuessText