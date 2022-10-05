import { Component, OnInit } from '@angular/core';
import { ManageUsers } from './manage-users.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppAssignment implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  count: number;
  constructor(private manageUsers: ManageUsers) {}
  ngOnInit(): void {
    this.manageUsers.countChanged.subscribe((newCount) => {
      this.count = newCount;
    });
    this.activeUsers = this.manageUsers.activeUsers;
    this.inactiveUsers = this.manageUsers.inactiveUsers;
  }
}
