import { Button } from "@arborknot/design-system-v2"
import { useEffect, useState } from "react"
import { EmailInput } from "../common/email-input"

export const ResetPassword = () => {
    const [email, setEmail] = useState<string>()

    useEffect(() => {
        console.log(email)
    }, [email])

    return (
        <div className="components--reset-password__container">
            <div className="disclaimer">
                Enter the email address associated with your account, we will send a reset link to your email.
            </div>

            <EmailInput setStateCb={setEmail} />

            <Button type="primary" text="Send a reset link" controlType="textOnly" size="large" />
        </div>
    )
}