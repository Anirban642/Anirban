import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick =()=>{
        // console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleclearClick =()=>{
        // console.log("Lowercase was clicked");
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleCopy =()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }
    const handleExtraSpaces =()=> {
        let newText= text.split(/[ ]+/);
        setText (newText.join(" "));
        props.showAlert("Removed Extra Spaces","success")
}
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-2 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Above Box to Preview it here."}</p>
    </div>
    </>
  )
}
