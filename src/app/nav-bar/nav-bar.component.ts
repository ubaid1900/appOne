import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: User;
  isLoggedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.isLoggedIn = this.currentUser ? true : false;
  }

}
