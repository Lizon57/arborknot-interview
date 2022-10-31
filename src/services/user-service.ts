export const userService = {
    loginUser
}


async function loginUser() {
    try {
        const user = await fetch("https://console-api-v2.dev.arborknot.io/user", {
            method: "get",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        return user
    } catch (err) {
        console.log(err)
    }
}