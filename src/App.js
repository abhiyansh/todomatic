import Todo from "./components/Todo";
import Form from "./components/Form"

function App(props) {
  
  const taskList = props.tasks.map(task => ( 
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
      
      <Form />
      
      <div>
        <label htmlFor="sort-by">Filter: </label>
        <select name="sort-by" id="sort-by">
          <option value="all">Show All</option>
          <option value="left">Tasks Left</option>
          <option value="done">Tasks Completed</option>
        </select>
      </div>

      <h2>3 Tasks</h2>
      
      <ul>
        {taskList}
      </ul>
    
    </div>
  );
}

export default App;
