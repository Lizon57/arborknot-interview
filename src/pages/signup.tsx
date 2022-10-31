import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal, Label, Input, Button } from "@arborknot/design-system-v2"


import { EmailInput } from "../components/common/email-input"
import { PasswordInput } from "../components/common/password-input"
import { Disclaimer } from "../components/login/login-form/disclaimer"
import { userService } from "../services/user-service"

export const Signup = () => {
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onCloseModal = () => setIsModalOpen(false)


    const onSignup = async () => {
        if (!email || !password) return

        try {
            await userService.signup(email, password)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <main className="pages--signup">
            {isModalOpen && <Modal title="Sign up" open={true} onClose={onCloseModal}>
                <div className="modal-children-container">
                    <div>
                        <Label size="medium">Workspace name</Label>
                        <Input state="default" size="medium" placeholder="" type="text" />
                    </div>

                    <EmailInput setStateCb={setEmail} />

                    <PasswordInput setStateCb={setPassword} />

                    <Button text="Sign up" size="medium" controlType="textOnly" type="primary" onPress={onSignup} />

                    <Disclaimer part="Sign up" />

                    <div className="sign-in-link-container">Already have an account? <Link to="/login">Sign in</Link></div>
                </div>
            </Modal>}
        </main>
    )
}