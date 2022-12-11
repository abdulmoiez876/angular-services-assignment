import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = [];
  
  constructor(private usersService: UsersService) {  
    this.users = this.usersService.inactiveUsers;

  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
