export interface LoginUserDto {
    email:string
    password:string
}

export interface CreateUserDto extends LoginUserDto{
    password:string
}

export interface ResponseCreateUser extends CreateUserDto{
    createAt:string
    updateAt:string
    token:string
}
