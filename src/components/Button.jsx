import "../styles/Button.css"

function Button (props) {
    console.log("Rendering: Button, Props: ", props)

    return <button className="button" onClick={props.onClick}>{props.name}</button>
}

export default Button;