
import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Container, Button, Form} from 'react-bootstrap';
import AddAnswers from './addAnswers';

const quizzQuestions = [
  { 
    id: "Холмс",
    header: "Бывал ли Шерлок Холмс в России?",
    answer1: "да",
    answer2: "нет",
  },

  {
    id: "Пушкин",
    header: "Бывал ли Пушкин в Великобритании",
    answer1: "да",
    answer2: "нет"
  },

  {
    id: "Ленин",
    header: "Бывал ли Ленин в Великобритании?",
    answer1: "да",
    answer2: "нет"
  },

  {
    id: "Байрон",
    header: "Бывал ли Байрон в России?",
    answer1: "да",
    answer2: "нет"
  }

]





function App() {
    const [questions, updateQuestions] = useState(quizzQuestions);
  
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
      
      
        <Container className="container">
        <div className="col-md-8 inline-block">
          <div className="questions"><Button>Add Question</Button></div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
            
          <ul className="questions" {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map(({id, header, answer1, answer2}, index) => { 
              return (
                <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (


                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                
                  <h2>
                    {id}
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
        
      
    </div>
  );
}

export default App;
