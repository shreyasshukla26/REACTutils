import React,{useState} from 'react'

export default function TextForm (props) {
  const handleUpClick = ()=>{
   // console.log("uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  
    const handleOnChange = (event)=>{
    //  console.log("On Change")
      setText(event.target.value);
  }
  const[text, setText ] = useState("write your text here ");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value ={text} onChange={handleOnChange} id="my text area" rows="6"></textarea>
  < button className = ".btn.btn-primary" onClick={handleUpClick}>convert to uppercase</button>
</div>
    </div>
  )
}
