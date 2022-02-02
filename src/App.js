import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = { id: "id", name: name, completed: false};
    setTasks([...tasks, newTask]);
  }
  
  const taskList = tasks.map(task => ( 
    <Todo 
        name={task.name}
        completed={task.completed}
        id={task.id}
        key={task.id}
      />
    )
  );
  
  return (
    <div>
      
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask}/>
      
      <div>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2>3 Tasks</h2>
      
      <ul>
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
