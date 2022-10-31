import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Label } from "@arborknot/design-system-v2"
import { BiHide, BiShow } from "react-icons/bi"


export const PasswordInput = ({ setStateCb }: Props) => {
    const elPasswordInputRef = useRef<HTMLInputElement>(null)
    const [isPristineInput, setIsPristineInput] = useState(false)
    const [isValidInput, setIsValidInput] = useState<Boolean>()
    const [isShowPassword, setIsShowPassword] = useState<Boolean>()

    const handleInputChange = () => {
        setIsPristineInput(true)
        const password = elPasswordInputRef.current?.value || ''
        if (password.length < 7) setIsValidInput(false)
        else {
            setIsValidInput(true)
            setStateCb(password)
        }
    }

    const toggleIsShowPassword = () => setIsShowPassword(!isShowPassword)


    return (
        <div className="components-common--password-input__container">
            <div className="label">
                <Label size="medium">Password</Label>
                <Link to="/forgot-password">Forgot?</Link>
            </div>

            <div className="input-container">
                <input
                    type={isShowPassword ? 'text' : 'password'}
                    ref={elPasswordInputRef}
                    onChange={handleInputChange}
                />
                {isShowPassword ? <BiHide onClick={toggleIsShowPassword} /> : <BiShow onClick={toggleIsShowPassword} />}
            </div>

            {!isValidInput && isPristineInput && <div className="invalid-email-notice">Password must contain 7 characters at least</div>}
        </div>
    )
}


type Props = {
    setStateCb: (password: string) => void
}