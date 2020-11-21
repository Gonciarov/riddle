import React, { useState } from "react";
import {Container, Button, Form} from 'react-bootstrap';

function AddAnswers() {

  



  const [header, setHeader] = useState("");
  const [question, setQuestion] = useState("");
  const [existing, setExisting] = useState(false);



  
  const [inputAnswers, setInputAnswers] = useState([{ answer: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Answers = [...inputAnswers];
    Answers[index][name] = value;
    setInputAnswers(Answers);
  };

  

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
    setInputAnswers([...inputAnswers, { answer: "" }]);
  };

  return (

    existing ? (<div className="col-md-8 inline-block"><Button onClick={e => setExisting(!existing)}>Edit</Button></div>) :
    
    (<div className="col-md-8 inline-block">
      <div>Заголовок<input 
      name="header"
      onChange={e => setHeader(e.target.value)}
      />
      </div>
      <div>Вопрос<input 
      name="question"
      onChange={e => setQuestion(e.target.value)}
      />
      </div>
    
                        <h3>ВАРИАНТЫ ОТВЕТОВ</h3>
      {inputAnswers.map((x, i) => {
        return (
          <div>
    
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
          </div>
          
        );
        
      })}
      <div><Button onClick={saveData}>click</Button></div>
      
    </div>
    
    
  ));
}

export default AddAnswers;