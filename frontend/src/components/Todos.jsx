import {
  Container, Card, Form, Button,
} from 'react-bootstrap';

const Todos = () => (
  <Container className="vh-100 d-flex align-items-center">
    <Card className="bg-light align-middle w-75 h-75 mx-auto">
      <h1 className="text-center text-secondary mt-3">Список Дел</h1>
      <Card className="mx-5 mb-5 mt-3 h-100">
        <Form className="mt-4 w-75 mx-auto">
          <Form.Group className="d-flex flex-column form-floating">
            <Form.Control id="todoInput" className="fs-5 text-center" placeholder="Что нужно сделать?" />
            <Form.Label htmlFor="todoInput" className="text-center w-100 text-center">Что нужно сделать?</Form.Label>
            <Button type="submit" className="w-25 mt-2 align-self-center">Добавить</Button>
          </Form.Group>
        </Form>
      </Card>
    </Card>
  </Container>
);

export default Todos;
