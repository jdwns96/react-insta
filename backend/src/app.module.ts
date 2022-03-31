import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';

// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // TypeORM 설정 파일 연결
    UserModule,
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
