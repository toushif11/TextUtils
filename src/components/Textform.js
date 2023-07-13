import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");


    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }    
    const handleclearClick = ()=>{
        console.log(" ");
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared!", "success");


    }    

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

   //copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    }
 
    //remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra spaces", "success")

    }




    const [text, setText] = useState('Enter text here');
    // setText("jghgcsjhcuj")
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'light', color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleclearClick} >Clear text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove spaces</button>
        
    <div>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>

        </div>
    </div>
    </>
  )
}
