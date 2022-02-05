export default function FilterButton(props){
    return (
        <button
            type="button"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            Show {props.name} <span className="visually-hidden">Tasks</span>
        </button>
    );
}