import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from 'react-bootstrap'

const CustomModal = forwardRef(({children} ,ref) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    }
    const closeModal = () => {
      setShowModal(false)
    }

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal
    }));

    return (
      <Modal show={showModal} onHide={closeModal}>
        {children}
      </Modal>
    )
})

export default CustomModal