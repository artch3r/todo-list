import { ListGroup, Form, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { completeTodo } from '../slices/todosSlice';

const todoVariantMap = {
  active: 'primary',
  finished: 'success',
};

const handleFormCheck = (id, status, dispatch) => () => {
  const newStatus = status === 'finished' ? 'active' : 'finished';
  dispatch(completeTodo({ id, changes: { status: newStatus } }));
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item
      className="d-flex gap-2"
      variant={todoVariantMap[todo.status]}
    >
      <Form.Check className="pt-1" type="radio" aria-label="radio 1" onClick={handleFormCheck(todo.id, todo.status, dispatch)} />
      <p className={cn('m-0 pt-1', { 'text-decoration-line-through': todo.status === 'finished' })}>{todo.name}</p>
      <Dropdown className="ms-auto">
        <Dropdown.Toggle variant={todoVariantMap[todo.status]} id="dropdown-basic" size="sm" />
        <Dropdown.Menu>
          <Dropdown.Item>Переименовать</Dropdown.Item>
          <Dropdown.Item>Удалить</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  );
};

export default TodoItem;
