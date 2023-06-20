import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setDisplayedTodos, selectDisplayedTodos, selectTodos } from '../../../slices/todosSlice';

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

const FooterButton = ({ type }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const displayedTodosType = useSelector(selectDisplayedTodos);
  const todos = useSelector(selectTodos);
  const curretTypeTodosCount = type === 'all' ? todos.length : todos.filter((todo) => todo.status === type).length;

  return (
    <Button className="w-25 border" key={type} variant={chooseButtonVariant(type, displayedTodosType)} onClick={switchDisplayedTodos(type, dispatch)}>
      {t(`todos.footer.${type}`)}
      {` (${curretTypeTodosCount})`}
    </Button>
  );
};

const TodosFooter = () => {
  const buttonTypes = ['all', 'active', 'completed'];

  return (
    <ButtonGroup className="w-50 mb-2 mx-auto" size="sm">
      {buttonTypes.map((type) => <FooterButton key={type} type={type} />)}
    </ButtonGroup>
  );
};

export default TodosFooter;
