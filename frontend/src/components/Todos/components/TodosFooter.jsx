import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayedTodos, selectDisplayedTodos } from '../../../slices/todosSlice';

const switchDisplayedTodos = (nextType, dispatch) => () => dispatch(setDisplayedTodos(nextType));

const chooseButtonVariant = (buttonType, displayedTodosType) => {
  if (buttonType !== displayedTodosType) {
    return 'light';
  }

  const variantMap = {
    all: 'secondary',
    active: 'primary',
    finished: 'success',
  };

  return variantMap[buttonType];
};

const TodosFooter = () => {
  const dispatch = useDispatch();
  const displayedTodosType = useSelector(selectDisplayedTodos);

  return (
    <ButtonGroup className="w-75 px-5 mx-auto" size="sm">
      <Button className="w-25 border" variant={chooseButtonVariant('all', displayedTodosType)} onClick={switchDisplayedTodos('all', dispatch)}>Все</Button>
      <Button className="w-25 border" variant={chooseButtonVariant('active', displayedTodosType)} onClick={switchDisplayedTodos('active', dispatch)}>Активные</Button>
      <Button className="w-25 border" variant={chooseButtonVariant('finished', displayedTodosType)} onClick={switchDisplayedTodos('finished', dispatch)}>Завершенные</Button>
    </ButtonGroup>
  );
};

export default TodosFooter;
