import { Component, OnInit } from '@angular/core';
import { AccountSerivce } from './account.service';
import { LoggingServices } from './logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accountService: AccountSerivce) {}
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
