function App() {
  return (
    <div>
      
      <h1>TodoMatic</h1>
      
      <form>
        <input type="text" id="new-task" name="new-task" />
        <button type="submit">Add</button>
      </form>
      
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

        <li>
          <div>
            <input type="checkbox" id="task-0" defaultChecked={true}/>
            <label htmlFor="task-0">Breathe</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>

        <li>
          <div>
            <input type="checkbox" id="task-1" />
            <label htmlFor="task-1">Eat</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>

        <li>
          <div>
            <input type="checkbox" id="task-2" />
            <label htmlFor="task-2">Sleep</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        
      </ul>
    
    </div>
  );
}

export default App;
