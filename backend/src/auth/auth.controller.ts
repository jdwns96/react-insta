import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinDTO, LoginDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 로그인
  @Post('/login')
  async login(@Body() loginData: LoginDTO) {
    console.log(loginData);
    return loginData;
  }

  // 회원가입
  @Post('/join')
  async join(@Body() joinData: JoinDTO) {
    const result = await this.authService.join(joinData);
    console.log(result);
    return result;
  }
}
