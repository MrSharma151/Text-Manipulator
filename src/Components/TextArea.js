import {React, useState} from 'react'

export const TextArea = (props) => {
  const [text, setText] = useState('Enter your text...');

  function onClickSetText(event){
    let newText = event.target.value;
    // console.log(newText);
    setText(newText);
  }

  function onClickUpperCase(){
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  }

  function onClickLowerCase(){
    let newText = text.toLowerCase();
    setText(newText);
  }

  function onClickClearText(){
    let newText = '';
    setText(newText);
  }
   
  return (
    <div className='container my-3' style={{color : props.theme === 'light' ? 'black' : 'white'}}>
        <h1>{props.title}</h1>
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={onClickSetText} value={text} style={{height: 200 + 'px' ,color : props.theme === 'light' ? 'black' : 'white', backgroundColor : props.theme === 'light' ? 'white' : 'black'}}></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-primary my-3" onClick={onClickUpperCase} >UpperCase</button>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={onClickLowerCase} >LowerCase</button>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={onClickClearText} >Clear Text</button>
        </div>
        <div>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes takes to read.</p>
        </div>
    </div>
  )
}

export default TextArea;
