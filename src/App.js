import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = { id: "task-"+nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id) return {...tasks, completed: !task.completed};
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => task.id!=id);
    setTasks(remainingTasks);
  }
  
  const taskList = tasks.map(task => ( 
    <Todo 
        name={task.name}
        completed={task.completed}
        id={task.id}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    )
  );

  const taskNoun = taskList.length !== 1 ? 'tasks': 'task';
  const headingText = `${tasks.length} ${taskNoun}`;
  
  return (
    <div>
      
      <h1>TodoMatic</h1>
      
      <Form addTask={addTask}/>
      
      <div>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2>{headingText}</h2>
      
      <ul>
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
