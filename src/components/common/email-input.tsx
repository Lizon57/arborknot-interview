import { Label } from "@arborknot/design-system-v2"
import { useRef, useState } from "react"


const checkIsValidMail = (email: string) => {
    const pattern = /^\S+@\S+\.\S+$/
    const regex = new RegExp(pattern)
    return regex.test(email)
}


export const EmailInput = ({ setStateCb }: Props) => {
    const elEmailInputRef = useRef<HTMLInputElement>(null)
    const [isPristineInput, setIsPristineInput] = useState(false)
    const [isValidMail, setIsValidMail] = useState<Boolean>()


    const handleInputChange = () => {
        if (!isPristineInput) setIsPristineInput(true)

        const email = elEmailInputRef.current?.value || ''
        const isValidMail = checkIsValidMail(email)
        if (isValidMail) {
            setIsValidMail(isValidMail)
            if (setStateCb) setStateCb(email)
        }
    }



    return (
        <div className="components-common--email-input__container">
            <Label size="medium">Email</Label>
            <input
                type="email"
                className={((isPristineInput && !isValidMail) ? 'pristine' : '')}
                ref={elEmailInputRef}
                onChange={handleInputChange}
            />
            {isPristineInput && !isValidMail && <div className="invalid-email-notice">Please enter a vaild email</div>}
        </div>
    )
}


type Props = {
    setStateCb: (email: string) => void
}