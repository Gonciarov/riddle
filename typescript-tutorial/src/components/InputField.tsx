import React from 'react';
import './styles.css';

interface Props{
    todo: string, 
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className='input'>
        <input type='input' 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}
        className="input__box" placeholder='Enter a task'></input>
    <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField