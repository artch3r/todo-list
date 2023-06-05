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

const createButton = (type, displayedTodosType, dispatch, t) => (
  <Button className="w-25 border" key={type} variant={chooseButtonVariant(type, displayedTodosType)} onClick={switchDisplayedTodos(type, dispatch)}>
    {t(`todos.footer.${type}`)}
  </Button>
);

const TodosFooter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const displayedTodosType = useSelector(selectDisplayedTodos);
  const buttonTypes = ['all', 'active', 'completed'];

  return (
    <ButtonGroup className="w-50  px-5 mx-auto" size="sm">
      {buttonTypes.map((type) => createButton(type, displayedTodosType, dispatch, t))}
    </ButtonGroup>
  );
};

export default TodosFooter;
