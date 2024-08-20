import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, setText] = useState("");
    const handleUpClick = ()=>{
        // console.log("UpperCase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text is converted to UpperCase", "success")
    }
    const handleLowClick = ()=>{
        // console.log("UpperCase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text is converted to lower case", "success")
    }
    const handleClear = ()=>{
        // console.log("UpperCase button was clicked" + text);
        let newText = '' ;
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }
    const handleCaptaliseClick = ()=>{
        // console.log("UpperCase button was clicked" + text);
        text=text.toLowerCase();
        let newText='';
        text=text.split(" ");
        for (let i of text){
            let f= i.charAt(0);
            let f1= i.charAt(0).toUpperCase();
            if (i===text[text.length-1]){
                newText=newText+i.replace(f,f1);
            }else{
                newText=newText+i.replace(f,f1)+" ";
            }
        }
        setText(newText)
        props.showAlert("Text is Captalized", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange was clicked");
        setText(event.target.value)
    }
    const handleInversely=()=>{
        let newText="";
        for (let i of text){
            if (i===i.toUpperCase()){
                newText=newText+i.toLowerCase();}
            else{
                newText=newText+i.toUpperCase();}
        }
        setText(newText)
        props.showAlert("Text is changed inversely", "success")
    }
    let handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("The text is coppied to clipboard", "success")
    }
    let handleSpace=()=>{
        // let a=text.split(' ');
        // let newText='';
        // for (let i of a){
        //     if(i===a[a.length-1]){
        //         newText=newText+i;
        //     }else if(i===''){
        //         newText=newText;
        //     }
        //     else{
        //         newText=newText+i+' ';
        //     }
        // }
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Extra space is handled", "success")
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?"black ":"white"}}>
    <h1 style={{color :  props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} id="MyBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?"white ":"grey" , color: props.mode==='light'?"black ":"white"}}  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCaptaliseClick}>Captalise Text</button>
        <button className="btn btn-primary mx-2" onClick={handleInversely}>Inversly Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Handle Space</button>
    </div>
    <div className={`container my-3 `} style={{color: props.mode==='light'?"black ":"white"}}>
        <h1>Your text summary</h1>
        <p id="para">{text.split(/[ ]+/).length} words and {text.length} characters</p>
        <p>Time to read the word given {text.split(/[ ]+/).length*0.008} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Enter your Text for Preview"}</p>
    </div>
    </>
  )
}

