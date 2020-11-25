
import React, { useState, useContext } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Container, Button, Form} from 'react-bootstrap';
import AddAnswers from './addAnswers';
import { RiddleContext } from './riddleContext';

const quizzQuestions = [
  { 
    id: "1",
    header: "Холмс",
    question: "Бывал ли Шерлок Холмс в России?",
    answers: ["да", "нет"]
  },

  {
    id: "2",
    header: "Пушкин",
    question: "Бывал ли Пушкин в России?",
    answers: ["да", "нет"]
  },

  {
    id: "3",
    header: "Ленин",
    question: "Бывал ли Ленин в России?",
    answers: ["да", "нет"]
  },

  {
    id: "4",
    header: "Байрон",
    question: "Бывал ли Байрон в России?",
    answers: ["да", "нет"]
  }

]





function App() {
    const [questions, updateQuestions] = useState(quizzQuestions);
    const [value, setValue] = useState({ header: "qu", question: "", answers: [] })
    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(questions);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateQuestions(items);
    }



    
  
  return (
    <div className="App">
      
      <h1>ВОПРОСЫ</h1>
      
      <RiddleContext.Provider value={{value, setValue}}>
        <Container className="container">
        <div className="col-md-8 inline-block">
          <div className="questions"><Button>Add Question</Button></div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
            
          <ul className="questions" {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map(({id, header}, index) => { 
              return (
                <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (


                <li ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}>
                
                  <h2>
                    {header}
                  </h2>
                
                    </li>
                 
                  )}
                  </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        
          )}
        </Droppable>
        </DragDropContext>
        </div>
        
        
          <AddAnswers/>
        
        
          
        </Container>
        </RiddleContext.Provider>
        
      
    </div>
  );
}

export default App;
