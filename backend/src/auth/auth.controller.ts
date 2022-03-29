import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinDTO, LoginDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  // 로그인
  @Post()
  login(@Body() loginData: LoginDTO) {
    console.log(loginData);
    return loginData;
  }

  // 회원가입
  @Post()
  join(@Body() joinData: JoinDTO) {
    console.log(joinData);
    return joinData;
  }
}
