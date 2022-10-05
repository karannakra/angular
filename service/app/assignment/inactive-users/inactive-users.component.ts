import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManageUsers } from '../manage-users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(private manageUsers: ManageUsers) {}
  onSetToActive(id: number) {
    this.manageUsers.onSetToActive(id);
  }
}
