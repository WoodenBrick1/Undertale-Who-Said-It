import { useState } from 'react'
import TextBox from "./components/TextBox"
import Credits from "./components/Credits"
import Button from "./components/Button"
import CharactersButtons from "./components/CharactersButtons"
import GuessText from "./components/GuessText"

import allText from "./assets/undertaleTexts.json"
import allCharacters from "./assets/characters.json"
import './styles/App.css'

function App () {

  const [dialogue, setDialogue] = useState("")
  const [characterSelected, setCharacterSelected] = useState("")
  const [guessedCorrectly, setGuessedCorrectly] = useState(null)
  const [numOfGuesses, setNumOfGuesses] = useState(0)

  const gameOver = guessedCorrectly || numOfGuesses == 2
  console.log(gameOver)
  console.log("Rendering: App")


  if (gameOver && characterSelected !== "") {
    setCharacterSelected("")
  }

  const GetRandomDialogue = () => {
    setDialogue(allText[Math.floor(Math.random() * allText.length)])
  }


  const Guess = () => {

    if (characterSelected === "") {
      return
    }

    if (characterSelected === dialogue.character) {
      setGuessedCorrectly(true)
    } else {
      setGuessedCorrectly(false)
    }

    setNumOfGuesses(numOfGuesses + 1)
    setCharacterSelected("")
  }

  const Reset = () => {
    GetRandomDialogue()
    setNumOfGuesses(0)
    setCharacterSelected("")
    setGuessedCorrectly(null)
  }

  if (dialogue == "") {
    GetRandomDialogue()
  }

  console.log("Dialogue: ", dialogue)

  return (
    <div id="main-container">
      <TextBox text={dialogue.dialogue} />

      <div id="button-container">
        {!gameOver ?
          <Button name="GUESS" onClick={Guess}></Button> :
          <Button name="PLAY AGAIN" onClick={Reset} />}
      </div>

      <GuessText guessedCorrectly={guessedCorrectly} characterSelected={characterSelected} correctCharacter={dialogue.character} gameOver={gameOver} />

      <CharactersButtons characters={allCharacters} setCharacterSelected={setCharacterSelected} />
    </div>
  )
}

export default App
