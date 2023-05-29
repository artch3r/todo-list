import { Container, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import { selectCurrentTodos } from '../slices/todosSlice';

const Todos = () => {
  const currentTodos = useSelector(selectCurrentTodos);
  console.log('currentTodos', currentTodos);

  return (
    <Container className="vh-100 d-flex align-items-center">
      <Card className="bg-light align-middle w-75 h-75 mx-auto">
        <h1 className="text-center text-secondary mt-3">Список Дел</h1>
        <Card className="mx-5 mb-5 mt-3 h-100">
          <TodoForm />
        </Card>
      </Card>
    </Container>
  );
};

export default Todos;
