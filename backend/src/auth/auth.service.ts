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

  public login(loginData: LoginDTO) {
    return this.auth.find();
  }
  public join(joinData: JoinDTO) {
    return this.auth.create(joinData).save();
  }
}
