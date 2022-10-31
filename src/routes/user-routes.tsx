import { makeId } from "../utils/make-id"

import { Login } from "../pages/login"


export const ROUTES = [
    {
        id: makeId(),
        path: '',
        element: Login
    }
]