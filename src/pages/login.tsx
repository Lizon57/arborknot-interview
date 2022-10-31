import { useState } from "react"
import { Modal } from "@arborknot/design-system-v2"

import { Disclaimer } from "../components/login/login-form/disclaimer"
import { LoginForm } from "../components/login/login-form/login-form"
import { SignUpCall } from "../components/login/login-form/sign-up-call"

export const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [user, setUser] = useState<string>()

    const onCloseModal = () => setIsModalOpen(false)

    return (
        <main className="pages--login">
            {isModalOpen && <Modal title="Sign in" open={true} onClose={onCloseModal}>
                {user
                    ? <h2>Welcome {user}!</h2>
                    : <>
                        <LoginForm onSuccessfulLogin={setUser} />

                        <Disclaimer part="Sign in" />

                        <SignUpCall />
                    </>
                }
            </Modal>}
        </main>
    )
}