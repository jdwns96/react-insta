import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // TypeORM 설정 파일 연결
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
