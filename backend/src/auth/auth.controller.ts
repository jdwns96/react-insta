import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  test(): string {
    return 'test';
  }

  // @Post()
  // login() {}
  // @Post()
  // join() {}
}
