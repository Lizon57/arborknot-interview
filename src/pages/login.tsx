import { Modal } from "@arborknot/design-system-v2"
import { LoginForm } from "../components/login/login-form/login-form"

export const Login = () => {
    const onCloseModal = () => { }

    return (
        <main className="pages--login">
            <Modal title="Sign in" open={true} onClose={onCloseModal}>
                <LoginForm />
            </Modal>
        </main>
    )
}