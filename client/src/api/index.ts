import {UserApi} from "@/api/userApi";
import {NextPageContext} from "next";
import Cookies, {parseCookies} from 'nookies'
import axios from "axios";


export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
}

export const Api = (ctx?: Pick<NextPageContext, 'req'>): ApiReturnType => {

    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.authToken
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    return {
        user: UserApi(instance)
    }
}