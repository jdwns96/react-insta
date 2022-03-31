import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;
}

export class LoginDTO {
  @IsString()
  readonly user_id: string;

  @IsString()
  readonly password: string;
}
