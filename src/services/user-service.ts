import { httpService } from "./http-service"

export const userService = {
    loginUser
}


async function loginUser(email: string, password: string) {
    try {
        const user = await httpService.post('user/login', {
            email: "alex!@arborknot.io",
            password: "1"
        })
        return user
    } catch (err) {
        console.log(err)
    }
}