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

  console.log("Rendering: App")


  const GetRandomDialogue = () => {
    setDialogue(allText[Math.floor(Math.random() * allText.length)])
  }

  const Guess = () => {
    if (characterSelected === dialogue.character) {
      setGuessedCorrectly(true)
    } else {
      setGuessedCorrectly(false)
    }
  }

  if (dialogue == "") {
    GetRandomDialogue()
  }

  console.log("Dialogue: ", dialogue)

  return (
    <div id="main-container">
      <TextBox text={dialogue.dialogue} />

      <div id="button-container">
        <Button name="GUESS" onClick={Guess}></Button>
      </div>

      <GuessText guessedCorrectly={guessedCorrectly} characterSelected={characterSelected} correctCharacter={dialogue.character} />
      <CharactersButtons characters={allCharacters} setCharacterSelected={setCharacterSelected} />
    </div>
  )
}

export default App
