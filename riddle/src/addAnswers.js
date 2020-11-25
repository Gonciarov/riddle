import React, { useState, useContext } from "react";
import {Container, Button, Form} from 'react-bootstrap';
import { RiddleContext } from './riddleContext';

function AddAnswers() {

  
  const {value, setValue} = useContext(RiddleContext);



  const [header, setHeader] = useState(value.header);
  const [question, setQuestion] = useState(value.question);
  const [existing, setExisting] = useState(false);



  
  const [inputAnswers, setInputAnswers] = useState([ { answer: "", correct: false } ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Answers = [...inputAnswers];
    Answers[index][name] = value;
    setInputAnswers(Answers);
  };

  const handleCheckbox = (index) => {
    const Answers = [...inputAnswers];
    Answers[index["i"]]["correct"] = !Answers[index["i"]]["correct"]
    setInputAnswers(Answers);
    console.log(Answers);
  }

  async function saveData() {
  const data = {
      header: header,
      question: question,
      answers: inputAnswers,
      id: Date.now()
  }
  console.log(data);
  setExisting(!existing)

}

  const handleRemoveClick = index => {
    const Answers = [...inputAnswers];
    Answers.splice(index, 1);
    setInputAnswers(Answers);
  };

  const handleAddClick = () => {
    setInputAnswers([...inputAnswers, { answer: "", correct: false }]);
  };

  return (

    existing ? (<div className="col-md-8 inline-block"><Button onClick={e => setExisting(!existing)}>Edit</Button></div>) :
    
    (<div className="col-md-8 inline-block">
      
      <div>Заголовок: </div>
      <div><textarea rows={3} value={header} onInput={e => setHeader(e.target.value)}/></div>
      
      <div>Текст вопроса: </div>
      <div><input value={question} onInput={e => setQuestion(e.target.value)}/></div>
       
      
    
      
    
    
                        <h3>ВАРИАНТЫ ОТВЕТОВ</h3>
      {inputAnswers.map((x, i) => {
        return (
          x.correct ?
          (<div>
            <input id="correct" type="checkbox" checked onChange={e => handleCheckbox({i})}/>
            <input
              name="answer"
              
              value={x.answer}
              onChange={e => handleInputChange(e, i)}
            />
            
            <div className="btn-box">
              {inputAnswers.length !== 1 && <button
                
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputAnswers.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>) : 

          (<div>
            <input id="correct" type="checkbox" onChange={e => handleCheckbox({i})}/>
            <input
              name="answer"
              
              value={x.answer}
              onChange={e => handleInputChange(e, i)}
            />
            
            <div className="btn-box">
              {inputAnswers.length !== 1 && <button
                
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputAnswers.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>)
          
        );
        
      })}
      <div><Button onClick={saveData}>click</Button></div>
      
    </div>
    
    
  ));
}

export default AddAnswers;