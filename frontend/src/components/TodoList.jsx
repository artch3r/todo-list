import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCurrentTodos } from '../slices/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const currentTodos = useSelector(selectCurrentTodos);

  return (
    <div className="mt-2 mb-3 w-75 mx-auto h-75 overflow-auto">
      <ListGroup className="w-100 h-100 overflow-auto">
        {currentTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </div>

  );
};

export default TodoList;
