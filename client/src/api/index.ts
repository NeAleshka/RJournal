import axios from "axios";
import {CreateUserDto, LoginUserDto, ResponseCreateUser} from "@/api/apiTypes";


const instance = axios.create({
    baseURL: 'http://localhost:5000'
})


export const UserApi = {
    register(dto: CreateUserDto) {
        return instance.post<CreateUserDto, { data: ResponseCreateUser }>('/auth/register', dto).then(res => res.data)
    },
    login(dto: LoginUserDto) {
        return instance.post<LoginUserDto, { data: ResponseCreateUser }>('auth/login', dto).then(res => res.data)
    }

}