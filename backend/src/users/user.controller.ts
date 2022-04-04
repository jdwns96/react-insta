import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateUserDTO, LoginDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @TEST
  @Get()
  async test() {
    return 'OK';
  }

  // @로그인
  @Post('/login')
  async login(@Body() loginDTO: LoginDTO, @Request() req) {
    const user = await this.userService.login(loginDTO);
    req.session.userId = user.id;
    req.session.save();
    return user;
  }

  // @회원가입
  @Post('/join')
  async join(@Body() createUserDTO: CreateUserDTO) {
    return await this.userService.join(createUserDTO);
  }
}
