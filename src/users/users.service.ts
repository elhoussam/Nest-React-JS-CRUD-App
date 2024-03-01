import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  Add() {
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
