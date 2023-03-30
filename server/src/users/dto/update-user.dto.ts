import { IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
  @Length(3, 40, { message: 'Неверный ФИО (min:4,max:40)' })
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта', always: false })
  @IsOptional()
  email: string;

  @Length(4, 30, { message: 'Неверный пароль (min:4,max:30)' })
  @IsOptional()
  password?: string;
}
