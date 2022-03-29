import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinDTO, LoginDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 로그인
  @Post('/login')
  async login(@Body() loginDTO: LoginDTO) {
    console.log(loginDTO);
    return loginDTO;
  }

  // 회원가입
  @Post('/join')
  async join(@Body() joinDTO: JoinDTO) {
    const result = await this.authService.join(joinDTO);
    console.log('결과', result);
    return result;
  }
}
