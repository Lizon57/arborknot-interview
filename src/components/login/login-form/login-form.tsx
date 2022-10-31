import { useState } from "react"
import { Button } from "@arborknot/design-system-v2"

import { EmailInput } from "../../common/email-input"
import { PasswordInput } from "../../common/password-input"


export const LoginForm = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onLogin = async () => {
        if (!email || !password) return
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