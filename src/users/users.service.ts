import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/users.dto';
import { User, UserDocuments } from 'src/models/users.models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocuments>,
  ) {}
  Add(body: UserDTO) {
    return 'user added';
  }
  AllUsers() {
    return 'all users';
  }
  findOne(id: string) {
    return 'find users' + id;
  }
  update(id: string) {
    return 'update users' + id;
  }
  drop(id: string) {
    return 'Drop user ' + id;
  }
  search(key: string) {
    return 'looking for user ' + key;
  }
}
