import { useRef, useState } from "react"
import { BiShow, BiHide } from "react-icons/bi"
import { Button, Label } from "@arborknot/design-system-v2"

import { Disclaimer } from "./disclaimer"
import { SignUpCall } from "./sign-up-call"
import { userService } from "../../../services/user-service"


const isMailValid = (email: string) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/
    const regex = new RegExp(pattern)
    return regex.test(email)
}


export const LoginForm = () => {
    const [isShowPasswordInput, setIsShowPasswordInput] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState<Boolean>()
    const [isPasswordValid, setIsPasswordValid] = useState<Boolean>()

    const elEmailInputRef = useRef<HTMLInputElement>(null)
    const elPasswordInputRef = useRef<HTMLInputElement>(null)

    const onLogin = async () => {
        const email = elEmailInputRef.current?.value || ''
        const password = elPasswordInputRef.current?.value || ''

        const isCredentialsValid = checkIsCredentialsValid(email, password)
        if (!isCredentialsValid) return

        const loggedInUser = await userService.loginUser()
        if (loggedInUser?.type === 'cors') console.log('Cors error, please try again')
    }

    const checkIsCredentialsValid = (email: string, password: string) => {
        if (!isMailValid(email)) {
            setIsEmailValid(false)
            return false
        } else setIsEmailValid(true)

        if (!password?.length) {
            setIsPasswordValid(false)
            return false
        } else setIsPasswordValid(true)

        return true
    }

    const togglePasswordInput = () => setIsShowPasswordInput(!isShowPasswordInput)



    return (
        <div className="components--login-form__container">
            <form>
                <div className="email-input">
                    <Label size="medium">Email</Label>
                    <input type="email" ref={elEmailInputRef} />
                    {!isEmailValid && <div className="invalid-email-notice">Please enter a vaild email</div>}
                </div>

                <div className="password-input">
                    <div className="label">
                        <Label size="medium">Password</Label>
                        <span className="forgot-password">Forgot?</span>
                    </div>
                    <div className="input-container">
                        <input type={isShowPasswordInput ? 'text' : 'password'} ref={elPasswordInputRef} />
                        {!isShowPasswordInput ? <BiShow onClick={togglePasswordInput} /> : <BiHide onClick={togglePasswordInput} />}
                        {!isPasswordValid && <div className="invalid-email-notice">Please enter a vaild email</div>}
                    </div>
                </div>

                <Button type="primary" text="Sign in" controlType="textOnly" size="large" onPress={onLogin} />
            </form>

            <Disclaimer />

            <SignUpCall />
        </div>
    )
}