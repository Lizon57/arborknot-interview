import { useState } from "react"
import { Button } from "@arborknot/design-system-v2"

import { userService } from "../../../services/user-service"

import { EmailInput } from "../../common/email-input"
import { PasswordInput } from "../../common/password-input"


export const LoginForm = ({ onSuccessfulLogin }: Props) => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onLogin = async () => {
        if (!email || !password) return
        try {
            const userToken = await userService.loginUser(email, password)
            console.log(`${userToken} is the loggedin user token`)
            onSuccessfulLogin(email)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="components--login-form__container">
            <form>
                <EmailInput setStateCb={setEmail} />

                <PasswordInput setStateCb={setPassword} />

                <Button type="primary" text="Sign in" controlType="textOnly" size="large" onPress={onLogin} />
            </form>
        </div>
    )
}


type Props = {
    onSuccessfulLogin: (user: string) => void
}