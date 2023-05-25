import {
  Container, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Todos = () => {
  const formik = useFormik({
    initialValues: {
      todoName: '',
    },
    validationSchema: yup.object().shape({
      todoName: yup.string().required('requiredField').min(3, 'incorrectMinLength').max(20, 'incorrectMaxLength'),
    }),
    onSubmit: ({ todoName }) => {
      console.log(todoName);
    },
  });

  return (
    <Container className="vh-100 d-flex align-items-center">
      <Card className="bg-light align-middle w-75 h-75 mx-auto">
        <h1 className="text-center text-secondary mt-3">Список Дел</h1>
        <Card className="mx-5 mb-5 mt-3 h-100">
          <Form className="mt-4 w-75 mx-auto d-flex flex-column" onSubmit={formik.handleSubmit}>
            <Form.Group className="d-flex form-floating">
              <Form.Control
                className="fs-5 text-center input-group"
                name="todoName"
                id="todoName"
                placeholder="Что нужно сделать?"
                value={formik.values.todoName}
                onChange={formik.handleChange}
                isInvalid={formik.errors.todoName}
                disabled={formik.isSubmitting}
              />
              <Form.Label htmlFor="todoInput" className="text-center w-100 text-center">Что нужно сделать?</Form.Label>
              <Form.Control.Feedback className="align-self-center" type="invalid" tooltip>{formik.errors.todoName}</Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              className="w-25 mt-2 align-self-center"
              disabled={formik.isSubmitting || formik.errors.todoName}
            >
              Добавить
            </Button>
          </Form>
        </Card>
      </Card>
    </Container>
  );
};

export default Todos;
