import { Injectable } from '@nestjs/common';
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
  public join(joinDTO: JoinDTO) {
    return this.auth
      .create({
        user_id: joinDTO.id,
        password: joinDTO.password,
        name: joinDTO.name,
      })
      .save();
  }
}
