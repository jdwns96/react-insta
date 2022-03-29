import { IsString } from 'class-validator';

export class JoinDTO {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;
}

export class LoginDTO {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;
}
