import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}