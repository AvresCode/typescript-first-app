import React, {FC} from 'react';
import './App.css';


const App: FC = () => {
  return (
    <div className="App">
    
  <div> <h1>To Do List:</h1></div>
  <div> <input className='inputContainer'  type="text" placeholder="Add a task"/></div>
  <div> <button className='addButton'> Add Task</button></div>

    </div>
  );
}

export default App;
