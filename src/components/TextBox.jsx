function TextBox (props) {
    console.log("Rendering: TextBox, Props: ", props);
    

    return (<div>
        {props.text}
    </div>)
}


export default TextBox;