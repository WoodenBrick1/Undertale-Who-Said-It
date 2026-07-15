import "../styles/TextBox.css"

function TextBox (props) {
    console.log("Rendering: TextBox, Props: ", props);
    

    return (
    <div id="text-box">
        <span id="asteriks">*</span> {props.text}
    </div>)
}


export default TextBox;