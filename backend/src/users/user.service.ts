import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDTO, LoginDTO } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  // @로그인
  public async login(loginDTO: LoginDTO) {
    const user = await this.user.findOne(loginDTO);
    if (user) {
      return user;
    }
    throw new UnauthorizedException('인증되지 않은 사용자입니다.');
  }

  // @회원가입
  public async join(createUserDTO: CreateUserDTO) {
    const { user_id, password, name } = createUserDTO;

    // user_id 가 존재하는지 조회
    const user = await this.user.findOne({
      user_id: user_id,
    });

    //@TODO 비밀번호 bycript
    if (!user) {
      this.user
        .create({
          user_id: user_id,
          password: password,
          name: name,
        })
        .save();
      return { statusCode: 201, message: '계정이 생성되었습니다.' };
    }
    throw new NotFoundException('아이디가 중복됩니다.');
  }
}
