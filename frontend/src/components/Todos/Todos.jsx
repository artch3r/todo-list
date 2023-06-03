import { Container, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosFooter from './components/TodosFooter';

const Todos = () => {
  const { t } = useTranslation();

  return (
    <Container className="vh-100 d-flex align-items-center">
      <Card className="bg-light align-middle w-75 h-75 mx-auto">
        <h1 className="text-center text-secondary mt-3">{t('todos.title')}</h1>
        <Card className="mx-5 mb-5 mt-3 h-100 overflow-hidden">
          <TodoForm />
          <TodoList />
          <TodosFooter />
        </Card>
      </Card>
    </Container>
  );
};

export default Todos;
