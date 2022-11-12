import React from 'react';
import logo from './logo.svg';
import './App.css';

type X = {
 a: string,
  b: number
}

interface Person extends X {
  name: string,
  age?: number
}




const App: React.FC = () => {
  return (
    <div className="App">
    <span className="heading">Taskify</span>
       
        <p>
          Hello world
        </p>
        

    </div>
  );
}

export default App;
