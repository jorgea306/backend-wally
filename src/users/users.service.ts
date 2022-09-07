import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly usersModel: Model<IUsers>,
  ) {}

  async findOneName(username: string): Promise<IUsers> {
    return await this.usersModel.findOne({ username });
  }

  async findOneEmail(email: string): Promise<IUsers> {
    return await this.usersModel.findOne({ email });
  }
}
