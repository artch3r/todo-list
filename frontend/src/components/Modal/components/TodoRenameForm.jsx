import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { renameTodo } from '../../../slices/todosSlice';

const TodoRenameForm = ({ extra, onHide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.select();
  }, [extra]);

  const formik = useFormik({
    initialValues: {
      name: extra.name,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required('requiredField')
        .min(3, 'incorrectMinLength')
        .max(65, 'incorrectMaxLength'),
    }),
    onSubmit: ({ name }, { setSubmitting }) => {
      dispatch(renameTodo({ id: extra.id, changes: { name } }));
      setSubmitting(false);
      onHide();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="position-relative">
        <Form.Control
          className="mb-2"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.name}
          disabled={formik.isSubmitting}
          ref={inputRef}
        />
        <Form.Label htmlFor="name" className="visually-hidden">
          {t('modal.renameTodo')}
        </Form.Label>
        <Form.Control.Feedback type="invalid" tooltip>
          {t(`errors.${formik.errors.name}`)}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button type="button" variant="secondary" className="me-2" disabled={formik.isSubmitting} onClick={onHide}>{t('modal.cancel')}</Button>
        <Button type="submit" variant="primary" disabled={formik.isSubmitting || formik.errors.name}>{t('modal.submit')}</Button>
      </div>
    </Form>
  );
};

export default TodoRenameForm;
