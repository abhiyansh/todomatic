import { useState } from "react";

export default function Form(props){

    const [name, setName] = useState('');

    function handleChange(e){
        setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(!name) return;
        props.addTask(name);
        setName('');
    }

    return (
        <form onSubmit={handleSubmit} className="add-task">
            <input type="text" id="new-task" name="new-task" value={name} onChange={handleChange}/>
            <button type="submit">Add Task</button>
        </form>
    );
}