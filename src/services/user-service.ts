import { httpService } from "./http-service"

export const userService = {
    login,
    signup
}


async function login(email: string, password: string) {
    try {
        const user = await httpService.post('user/login', {
            email,
            password
        })
        return user
    } catch (err) {
        console.log(err)
    }
}

async function signup(email: string, password: string) {
    try {
        const user = await httpService.post('user/signup', {
            email,
            password
        })
        return user
    } catch (err) {
        console.log(err)
    }
}