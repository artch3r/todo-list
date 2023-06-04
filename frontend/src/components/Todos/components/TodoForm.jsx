import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import { useTranslation } from 'react-i18next';
import { addTodo } from '../../../slices/todosSlice';

const TodoForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const todoInputRef = useRef();

  useEffect(() => {
    todoInputRef.current.focus();
  });

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('requiredField').min(3, 'incorrectMinLength').max(65, 'incorrectMaxLength'),
    }),
    onSubmit: ({ name }, { resetForm, setSubmitting }) => {
      const todo = { name, status: 'active', id: uniqueId() };
      dispatch(addTodo(todo));
      resetForm();
      setSubmitting(false);
    },
    validateOnMount: true,
  });

  return (
    <Form className="mt-4 w-75 mx-auto d-flex flex-column" onSubmit={formik.handleSubmit}>
      <Form.Group className="d-flex form-floating">
        <Form.Control
          className="fs-5 text-center input-group"
          name="name"
          id="name"
          placeholder={t('todos.body.inputPlaceholder')}
          value={formik.values.name}
          onChange={formik.handleChange}
          isInvalid={formik.errors.name && formik.touched.name}
          disabled={formik.isSubmitting}
          ref={todoInputRef}
        />
        <Form.Label htmlFor="todoInput" className="text-center w-100 text-center">{t('todos.body.inputPlaceholder')}</Form.Label>
        <Form.Control.Feedback className="align-self-center" type="invalid" tooltip>{t(`errors.${formik.errors.name}`)}</Form.Control.Feedback>
      </Form.Group>
      <Button
        type="submit"
        className="w-25 mt-2 align-self-center"
        disabled={formik.isSubmitting}
      >
        {t('todos.body.addButton')}
      </Button>
    </Form>
  );
};

export default TodoForm;
