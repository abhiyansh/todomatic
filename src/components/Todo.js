import { useState } from "react";

export default function Todo(props){
  
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e){
    setNewName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const checkBox = (
    <input
      type="checkbox"
      id={props.id}
      defaultChecked={props.completed}
      onChange={() => props.toggleTaskCompleted(props.id)}
    />
  );
  
  const editingTemplate = (
    <form className="task-edit-container">
      <div className="task-edit-label">
        {checkBox}
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="task-edit-options">
        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="task-view-container">
      <div className="task-view-label">
        {checkBox}
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div className="task-view-options">
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
    </div>
  );
  
  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}