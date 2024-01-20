import {Modal} from 'react-bootstrap'

const ModalHeader = ({title}) => {
    return (
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
    )
}

export default ModalHeader