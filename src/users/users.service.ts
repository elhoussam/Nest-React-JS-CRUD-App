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
    // return 'user added';
    return this.UserModel.create(body);
  }
  AllUsers() {
    // return 'all users';
    return this.UserModel.find();
  }
  findOne(id: string) {
    // return 'find users' + id;
    return this.UserModel.findById({ _id: id });
  }
  update(id: string, body: UserDTO) {
    return this.UserModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
    // return 'update users' + id;
  }
  drop(id: string) {
    // return 'Drop user ' + id;
    return this.UserModel.findByIdAndDelete({ _id: id });
  }
  search(key: string) {
    const object = key
      ? {
          $or: [
            { fullname: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    // return 'looking for user ' + key;
    return this.UserModel.find(object);
  }
}
