import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalInfo, closeModal } from '../../slices/modalSlice';
import DeleteConfirmation from './components/DeleteConfirmation';
import TodoRenameForm from './components/TodoRenameForm';

const onHide = (dispatch) => () => dispatch(closeModal());

const CurrentModal = () => {
  const dispatch = useDispatch();
  const { isOpened, type, extra } = useSelector(selectModalInfo);

  const modalBodyMap = {
    renameTodo: TodoRenameForm,
    deleteTodo: DeleteConfirmation,
  };

  const ModalBodyInner = modalBodyMap[type];

  return (
    <Modal
      show={isOpened}
      onHide={onHide(dispatch)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {type && type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type && <ModalBodyInner type={type} extra={extra} onHide={onHide(dispatch)} />}
      </Modal.Body>
    </Modal>
  );
};

export default CurrentModal;
