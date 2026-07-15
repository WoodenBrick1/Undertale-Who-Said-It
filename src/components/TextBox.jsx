import "../styles/TextBox.css"

function TextBox (props) {
    console.log("Rendering: TextBox, Props: ", props);
    

    return (
    <div id="text-box">
        * {props.text}
    </div>)
}


export default TextBox;