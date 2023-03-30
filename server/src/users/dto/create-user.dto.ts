import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3, 40, { message: 'Неверный ФИО (min:4,max:40)' })
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, { message: 'Почта уже существует' })
  email: string;

  @Length(4, 30, { message: 'Неверный пароль (min:4,max:30)' })
  password?: string;
}
