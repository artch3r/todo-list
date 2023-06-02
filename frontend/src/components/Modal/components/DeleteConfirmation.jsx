import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../slices/todosSlice';

const handleDeleteTodo = (todoId, onHide, dispatch) => () => {
  dispatch(deleteTodo(todoId));
  onHide();
};

const DeleteConfirmation = ({ extra, onHide }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className="lead">Вы уверены?</p>
      <div className="d-flex justify-content-end">
        <Button
          className="me-2"
          variant="secondary"
          onClick={onHide}
        >
          Отменить
        </Button>
        <Button
          className="me-2"
          variant="danger"
          onClick={handleDeleteTodo(extra.id, onHide, dispatch)}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

export default DeleteConfirmation;
