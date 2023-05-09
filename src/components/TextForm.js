import React, { useState } from 'react'
export default function TextForm(props) {

//initialization of state variable text 
const [text, setText] = useState (''); // the index is called state variable and the setindex is setter function and this process is called array destructuring where the useState("this is a text ") is stored in text state variable


const HandleUpClass= ()=> {
    let newText = text.toUpperCase();
    setText(newText) // the arrow function is provoked only when the button is clicked
   
}

const HandleLoCase= ()=> {
    let newText = text.toLowerCase();
    setText(newText) 
    
}
const ClearText =()=> {
    let newText = text.slice(0,0) ;
    setText(newText)
}

const Handleonchange = (event)=>{
    setText(event.target.value) // target the value of event and update it 
}

    return (
  <>  <div className='container'>
     <h1>{props.heading}</h1>
      <div className="px-5"> {/*padding in x axis 5  */}
   <textarea className="form-control" id="textarea" rows="8" value={text} onChange={Handleonchange} placeholder='Enter your text' ></textarea>
  <button className="btn btn-outline-light m-2" onClick={HandleUpClass} >Convert to UpperCase</button>
  <button className="btn btn-outline-light m-2" onClick={HandleLoCase} >Convert to LowerCase</button>
  <button className="btn btn-outline-light m-2" onClick={ClearText} >Clear Text</button>


  </div>
  </div>
  <div className="container">
    <h1>Words and character counter</h1>
    <p>The number of words is {text.split(" ").length} and character is {text.length}</p>
    <p>The average time to read this text is {0.6* text.split(" ").length} seconds</p>
    <div><h3>Preview</h3>
    {text}
    </div>
  </div>

   </>
  )
    }
