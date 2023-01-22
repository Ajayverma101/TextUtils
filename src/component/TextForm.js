
import React, {useState} from 'react';

export default function TextForm(props) {
const [text, setText] = useState("");

const handelUpClick=() =>{
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}

const handelLoClick=() =>{
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to lowercase!", "success");
}

const handelClearClick=() =>{
    let newText = "";
    setText(newText);
    props.showAlert("Clear textfield!", "success");
}

const handelCapitalisedClick=() =>{
    let newText1 = text.toLowerCase();
    let newText = newText1.charAt(0).toUpperCase() + newText1.slice(1);
    setText(newText);
    props.showAlert("Converted to capitalized!", "success");
}

const handelOnChange=(event) =>{
    setText(event.target.value);
}

const handelCopyText=()=>{
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copyed!", "success");
}               

const handelremoveSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove all spaces!", "success");
}

  return (
    <>
    <div className='container' style={{color : props.mode === 'light'?'black':'white'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text here '
        style={{backgroundColor : props.mode === 'light'?'white':'#485460' , color : props.mode === 'light'?'black':'white'}} ></textarea>
        </div>
        
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelClearClick}>Text Clear</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelCapitalisedClick}>Convert to Capitalised</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelCopyText}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode === 'light'?'dark':'light'} mx-2 my-1`} onClick={handelremoveSpace}>Remove Extra Space</button>
       
    </div>
    <div className="container my-3"  style={{color : props.mode === 'light'?'black':'white'}}>
        <h2>Your text summary</h2>
       
        <h6>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</h6>
        <h6>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</h6>
        <hr />
    </div>
    </>
  )
}
