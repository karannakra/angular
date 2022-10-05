import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountSerivce } from '../account.service';
import { LoggingServices } from '../logging/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(
    private loggingService: LoggingServices,
    private accountService: AccountSerivce
  ) {}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
