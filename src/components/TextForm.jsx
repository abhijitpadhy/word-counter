import React, { useState } from "react";

const TextForm = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase", "success");

        console.log("Clicked");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase", "warning");

        console.log("Clicked");
    };

    const handleClearClick = () => {
        let newText  = '';
        setText(newText);
        props.showalert("the Box is cleared", "success");

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("The text is copied", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra space removed", "danger");


    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    };
  
      
    const [text, setText] = useState("");
    //   text = "new text" // wrong way to change the state
    //   setText("new text"); //Correct way to change the state
    //   console.log(useState("Enter text here"))
    return (
        <>
        
            <div className="container my-3 " 
                        style={{color:props.mode===`dark`?`white`:`#042743`}}>
                
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor:props.mode===`dark`?`gray`:`white`,color:props.mode===`dark`?`white`:`#042743`}}
                        rows="8"
                    ></textarea>
                </div>
                <div className="p-2">
                    <button className="btn btn-warning rounded-pill" onClick={handleUpClick}>
                        Uppercase
                    </button>
                    <button className="btn btn-warning mx-2 rounded-pill" onClick={handleLoClick}>
                        Lowercase
                    </button>
                    <button className="btn btn-warning mx-2 rounded-pill" onClick={handleClearClick}>
                        Clear Text
                    </button>
                    <button className="btn btn-warning mx-2 rounded-pill" onClick={handleCopy}>
                        Copy Text
                    </button>
                    <button className="btn btn-warning mx-2 rounded-pill" onClick={handleExtraSpaces}>
                        Remove Extra Space
                    </button>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
                <h2>Your text summary</h2>
                <b>{text.split(" ").length} words {text.length} characters </b>
                <b>{0.008 *text.split(" ").length} Minutes to read </b>
                <h2>Preview</h2>
                <b>{text.length>0?text:"Enter something in above textbox to preview it here"}</b>

            </div>
            <div className="container my-3">
      
     
    </div>


        </>
    );
};

export default TextForm;
