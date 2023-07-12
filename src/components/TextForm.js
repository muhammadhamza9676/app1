import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was Clicked");
        let newText = text.toLocaleUpperCase();
        upText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = ()=>{
        //console.log("Uppercase was Clicked");
        let newText = text.toLocaleLowerCase();
        upText(newText);
    }

    const handleClearClick = ()=>{
        let newText = '';
        upText(newText);
    }

    const handleUpChange = (event)=>{
        //console.log("On Change");
        upText(event.target.value);
    }
    const [text, upText] = useState('');
    return (
        <>
       <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'black' }} placeholder='Enter Text Here' onChange={handleUpChange} rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleClearClick} >Clear Text</button>
        </div>

        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>
                Your Text Summary
            </h2>
            <p>{text.split(" ").length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter Something in textbox to preview.'}</p>
        </div>

        </div> 
        </>
    )
}
