import React, { useState } from 'react'


export default function (props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // text = "new Text" // Wrong way to Change the State
    // setText ("new text"); right way to set the State
    return (
        <>
         <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                {/* <label for="MyBox" className="form-label">Write Your Text</label> */}
                <textarea className="form-control" value = {text}  onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-2">
          <h2>Your text summery</h2>
        <p>{text.split(" ").length} Words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
       
    )
}
 