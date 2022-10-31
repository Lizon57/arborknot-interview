import { httpService } from "./http-service"

export const userService = {
    loginUser
}


async function loginUser() {
    try {
        // const user = await fetch("https://console-api-v2.dev.arborknot.io/user/login", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: JSON.stringify({
        //         email: "alex!@arborknot.io",
        //         password: "1"
        //     })
        // })
        // console.log(user)
        const user = await httpService.post('user/login', {
            email: "alex!@arborknot.io",
            password: "1"
        })
        console.log(user)
        return user
    } catch (err) {
        console.log(err)
    }
}