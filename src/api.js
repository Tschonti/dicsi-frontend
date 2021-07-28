import axios from 'axios'

export const db = axios.create({
    baseURL: 'https://dicsi-api.herokuapp.com/'
})