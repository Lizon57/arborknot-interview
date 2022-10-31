import { Link } from "react-router-dom"


export const SignUpCall = () => {
    return (
        <div className="components--sign-up-call__container">
            Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
    )
}