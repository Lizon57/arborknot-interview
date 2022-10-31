import { useState } from "react"
import { Modal } from "@arborknot/design-system-v2"
import { Link } from "react-router-dom"

import { ResetPassword } from "../components/reset-password/reset-password"


export const ForgotPassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)

    const onCloseModal = () => setIsModalOpen(false)


    return (
        <main className="pages--forgot-paswoord">
            {isModalOpen &&
                <Modal title="Reset your password" open={true} onClose={onCloseModal}>
                    <ResetPassword />

                    <Link to="/login" className="back-to-login">Back to Sign In</Link>
                </Modal>
            }
        </main>
    )
}