import { makeId } from "../utils/make-id"

import { Login } from "../pages/login"
import { ForgotPassword } from "../pages/forgot-password"
import { Signup } from "../pages/signup"


export const ROUTES = [
    {
        id: makeId(),
        path: '/login',
        element: Login
    },

    {
        id: makeId(),
        path: '/forgot-password',
        element: ForgotPassword
    },

    {
        id: makeId(),
        path: '/signup',
        element: Signup
    }
]