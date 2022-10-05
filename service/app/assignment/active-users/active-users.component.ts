import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManageUsers } from '../manage-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(private manageUsers: ManageUsers) {}
  onSetToInactive(id: number) {
    this.manageUsers.onSetToInactive(id);
  }
}
