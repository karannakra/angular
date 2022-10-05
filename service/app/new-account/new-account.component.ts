import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountSerivce } from '../account.service';
import { LoggingServices } from '../logging/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingServices,
    private accountSerive: AccountSerivce
  ) {
    this.accountSerive.statusUpdated.subscribe((status: string) => {
      alert('New Status' + status);
    });
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountSerive.addAccount(accountName, accountStatus);
  }
}
