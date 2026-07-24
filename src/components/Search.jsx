import "../styles/Search.css"

function Search ({ search, onChange }) {
    console.log("Rendering: Search, Props: ", search)


    return (
        <div id="search">

            <p>Search:</p>
            <input value={search} onChange={onChange}></input>
        </div>)
}

export default Search