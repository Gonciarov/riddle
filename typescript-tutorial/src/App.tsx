import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'

type X = {
 a: string,
  b: number
}

interface Person extends X {
  name: string,
  age?: number
}




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  console.log(todo)
  return (
    <div className="App">
    <span className="heading">Taskify</span>  
    <InputField todo={todo} setTodo={setTodo}/>
        

    </div>
  );
}

export default App;
