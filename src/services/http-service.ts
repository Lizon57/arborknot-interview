import Axios from 'axios'

const BASE_URL = 'https://console-api-v2.dev.arborknot.io/'


const axios = Axios.create({})


export const httpService = {
    get(endpoint: string, data: any) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint: string, data: any) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint: string, data: any) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint: string, data: any) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint: string, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })

        return res.data
    } catch (err) {
        throw err
    }
}