import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// pipe
import { ValidationPipe } from '@nestjs/common';
// session
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();

  // 전역 범위 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
      forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
      transform: true, // 요청에서 넘어온 자료들의 형변환
    }),
  );

  // session
  app.use(
    session({
      secret: '6m1dHJmicq9MfwpD6rra',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(5000);
}
bootstrap();
