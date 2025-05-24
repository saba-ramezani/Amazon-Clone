import axios from 'axios'
import {BASE_URL} from './constants'

const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

export const CallAPI = async (resource: string) => {
    const {data} = await axios.get(`${BASE_URL}/${resource}`, config)
    console.log(data)
    return data
}