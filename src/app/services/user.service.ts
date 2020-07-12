import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser = { id: 1, username: 'userOne' };
  constructor() { }

  getCurrentUser(): User {
    return this.currentUser;
  }
}

