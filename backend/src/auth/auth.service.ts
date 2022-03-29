import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JoinDTO, LoginDTO } from './dto/auth.dto';
import { Auth } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly auth: Repository<Auth>,
  ) {}

  public login(loginDTO: LoginDTO) {
    return this.auth.find();
  }
  public async join(joinDTO: JoinDTO) {
    // user_id 가 존재하는지 조회
    const result = await this.auth.findOne({
      user_id: joinDTO.id,
    });
    // user_id 가 존재하는 경우
    if (result) throw new NotFoundException('아이디가 중복됩니다.');

    this.auth
      .create({
        user_id: joinDTO.id,
        password: joinDTO.password,
        name: joinDTO.name,
      })
      .save();
    return { statusCode: 201, message: '계정이 생성되었습니다.' };
  }
}
