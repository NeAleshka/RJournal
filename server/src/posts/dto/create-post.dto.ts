import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsArray()
  body: string;

  @IsOptional()
  tags?: string;
}
