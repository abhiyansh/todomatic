export default function Todo(props){
    return (
        <li>
          <div>
            <input type="checkbox" id={props.id} defaultChecked={props.completed}/>
            <label htmlFor={props.id}>{props.name}</label>
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
    );
}