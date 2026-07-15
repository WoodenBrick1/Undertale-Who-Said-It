import { useState } from 'react'
import TextBox from "./components/TextBox"
import allText from "./assets/undertaleTexts.json"
import './styles/App.css'

function App() {

const [dialogue, setDialogue] = useState("");

console.log("Rendering: App");


const GetRandomDialogue = () => {
  setDialogue(allText[Math.floor(Math.random() * allText.length)]);
}

if (dialogue == "") {
  GetRandomDialogue();
}

console.log("Dialogue: ", dialogue)

  return (
    <div>
      <TextBox text={dialogue.dialogue}/>
    </div>
  )
}

export default App
