import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setDisplayedTodos, selectDisplayedTodos } from '../../../slices/todosSlice';

const switchDisplayedTodos = (nextType, dispatch) => () => dispatch(setDisplayedTodos(nextType));

const chooseButtonVariant = (buttonType, displayedTodosType) => {
  if (buttonType !== displayedTodosType) {
    return 'light';
  }

  const variantMap = {
    all: 'secondary',
    active: 'primary',
    completed: 'success',
  };

  return variantMap[buttonType];
};

const TodosFooter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const displayedTodosType = useSelector(selectDisplayedTodos);

  return (
    <ButtonGroup className="w-75 px-5 mx-auto" size="sm">
      <Button className="w-25 border" variant={chooseButtonVariant('all', displayedTodosType)} onClick={switchDisplayedTodos('all', dispatch)}>{t('todos.footer.allTodos')}</Button>
      <Button className="w-25 border" variant={chooseButtonVariant('active', displayedTodosType)} onClick={switchDisplayedTodos('active', dispatch)}>{t('todos.footer.activeTodos')}</Button>
      <Button className="w-25 border" variant={chooseButtonVariant('completed', displayedTodosType)} onClick={switchDisplayedTodos('completed', dispatch)}>{t('todos.footer.completedTodos')}</Button>
    </ButtonGroup>
  );
};

export default TodosFooter;
