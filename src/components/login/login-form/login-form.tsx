import { FormEvent } from "react"

export const LoginForm = () => {
    const onLogin = (ev: FormEvent) => {
        ev.preventDefault()
    }


    return (
        <div className="components--login-form__container">
            <form onSubmit={onLogin}>
                <button>x</button>
            </form>
        </div>
    )
}