import { useState } from "react"
import { Modal } from "@arborknot/design-system-v2"

import { ResetPassword } from "../components/reset-password/reset-password"


export const ForgotPassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)

    const onCloseModal = () => setIsModalOpen(false)


    return (
        <main className="pages--forgot-paswoord">
            {isModalOpen &&
                <Modal title="Reset your password" open={true} onClose={onCloseModal}>
                    <ResetPassword />
                </Modal>
            }
        </main>
    )
}