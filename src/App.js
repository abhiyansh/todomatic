import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function addTask(name){
    const newTask = { id: "task-"+nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id) return {...task, completed: !task.completed};
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newName){
    const editedTaskList = tasks.map(task => (id==task.id)?{...task, name: newName} : task);
    setTasks(editedTaskList);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => task.id!=id);
    setTasks(remainingTasks);
  }
  
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => ( 
      <Todo 
          name={task.name}
          completed={task.completed}
          id={task.id}
          key={task.id}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskNoun = taskList.length !== 1 ? 'tasks': 'task';
  const headingText = `Total: ${taskList.length} ${taskNoun}`;
  
  return (
    <div className="main-wrapper">
      
      <div className="header">
        <h1>TodoMatic</h1>
      </div>
      
      <Form addTask={addTask}/>
      
      <div className="filter-list">
        {filterList}
      </div>

      <div className="task-counter">
        <h2 id="list-heading">{headingText}</h2>
      </div>
      
      <ul role="list" aria-labelledby="list-heading">
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
