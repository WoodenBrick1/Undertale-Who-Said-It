import "../styles/CharactersButtons.css"

function CharactersButtons ({ characters, setCharacterSelected }) {
    console.log("Rendering: CharactersButtons, Props: ", characters, setCharacterSelected)

    return (
        <div id="characters">
            {characters.map((character) => {
                return (
                    <button className="characterBtn" key={character.id} onClick={() => setCharacterSelected(character.name)}>
                        {character.name}
                    </button>)
            })}
        </div>
    )
}

export default CharactersButtons