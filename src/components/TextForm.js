import React, { useState } from 'react'
export default function TextForm(props) {

//initialization of state variable text 
const [text, setText] = useState ('Enter your text'); // the index is called state variable and the setindex is setter function and this process is called array destructuring where the useState("this is a text ") is stored in text state variable
let newText = text.toUpperCase();


const buttonclicked= ()=> {
    // console.log("the uppercase button was clicked");
    setText(newText) // the arrow function is provoked only when the button is clicked
}

const Handleonchange = (event)=>{
    // console.log("on changed")
    setText(event.target.value) // target the value of event and update it 
}

    return (
  <>  <div >
     <h1>{props.heading}</h1>
      <div className="px-5"> {/*padding in x axis 5  */}
   <textarea className="form-control" id="textarea" rows="8" value={text} onChange={Handleonchange}  ></textarea>
  <button className="btn btn-outline-light m-2" onClick={buttonclicked} >Convert to UpperCase</button>
  </div>
  </div>
   </>
  )
    }
