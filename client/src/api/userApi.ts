import {AxiosInstance} from "axios";
import {CreateUserDto, LoginUserDto, ResponseCreateUser} from "@/api/apiTypes";


export const UserApi =(instance:AxiosInstance)=> ({
    register(dto: CreateUserDto) {
        return instance.post<CreateUserDto, { data: ResponseCreateUser }>('/auth/register', dto).then(res => res.data)
    },
    login(dto: LoginUserDto) {
        return instance.post<LoginUserDto, { data: ResponseCreateUser }>('auth/login', dto).then(res => res.data)
    },

    me() {
        return instance.get< ResponseCreateUser>('users/me').then(res => res.data)
    }

})