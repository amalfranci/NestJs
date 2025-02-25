import { IsString, IsInt, IsEmail, IsNotEmpty} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  role: 'Product Manager' | 'UX Designer' | 'Data Analyst';
}
