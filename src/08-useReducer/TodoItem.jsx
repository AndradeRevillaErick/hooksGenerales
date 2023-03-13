

export const TodoItem = ({ todo }) => {
    return(
        <li key={ todo.id } className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">Item 1</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    );
}