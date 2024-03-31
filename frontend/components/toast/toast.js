import { closeToast } from '@/store/slice/toastSlice';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


export default function CustomToast() {
    const toastState = useSelector(state => state.toast)

    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(closeToast())
    }

    return (
        <ToastContainer>
            <Toast show={toastState.show} onClose={onClose} className="position-fixed top-0 end-0 m-3" delay={5000} autohide bg={toastState.type}>
                <Toast.Header>
                    <strong className="me-auto">{toastState.header}</strong>
                </Toast.Header>
                <Toast.Body>{toastState.body}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}