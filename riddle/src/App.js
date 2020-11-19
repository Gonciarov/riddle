
import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const quizzQuestions = [
  { 
    id: "1",
    header: "Бывал ли Шерлок Холмс в России?",
    answer1: "да",
    answer2: "нет",
  },

  {
    id: "2",
    header: "Бывал ли Пушкин в Великобритании",
    answer1: "да",
    answer2: "нет"
  },

  {
    id: "3",
    header: "Бывал ли Ленин в Великобритании?",
    answer1: "да",
    answer2: "нет"
  },

  {
    id: "4",
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
      <header className="App-header">
        <h1>ВОПРОСЫ</h1>
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
                  {header}
                </h2>
                <p>
                  {answer1}
                </p>
                <p>
                  {answer2}
                  </p>
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
        
      </header>
    </div>
  );
}

export default App;
