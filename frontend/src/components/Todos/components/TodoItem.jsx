import { ListGroup, Form, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { completeTodo } from '../../../slices/todosSlice';
import { openModal } from '../../../slices/modalSlice';

const todoVariantMap = {
  active: 'primary',
  completed: 'success',
};

const handleFormCheck = (id, status, dispatch) => () => {
  const newStatus = status === 'completed' ? 'active' : 'completed';
  dispatch(completeTodo({ id, changes: { status: newStatus } }));
};

const handleOpenModal = (type, extra, dispatch) => () => dispatch(openModal({ type, extra }));

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item
      className="d-flex gap-2"
      variant={todoVariantMap[todo.status]}
    >
      <Form.Check className="pt-1" checked={todo.status === 'completed'} type="checkbox" onChange={handleFormCheck(todo.id, todo.status, dispatch)} />
      <p className={cn('m-0 pt-1', { 'text-decoration-line-through': todo.status === 'completed' })}>{todo.name}</p>
      <Dropdown className="ms-auto">
        <Dropdown.Toggle variant={todoVariantMap[todo.status]} id="dropdown-basic" size="sm" />
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleOpenModal('renameTodo', todo, dispatch)}>Переименовать</Dropdown.Item>
          <Dropdown.Item onClick={handleOpenModal('deleteTodo', todo, dispatch)}>Удалить</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ListGroup.Item>
  );
};

export default TodoItem;
