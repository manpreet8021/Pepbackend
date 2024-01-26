import {Modal} from "react-bootstrap"

const ModalFooter = ({isSubmitting, dirty, isValid, isLoading, closeModal}) => {
    return (
        <Modal.Footer>
            <button type="button" className="button h-50 px-24 bg-dark-1 text-white" onClick={closeModal}>Close</button>
            <button type="submit" className="button h-50 px-24 -dark-1 bg-blue-1 text-white" disabled={isSubmitting || !dirty || !isValid || isLoading}>
                Save Changes <div className="icon-arrow-top-right ml-15" />
            </button>
        </Modal.Footer>
    )
} 
export default ModalFooter