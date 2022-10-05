import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingServices } from './logging/logging.service';
import { AccountSerivce } from './account.service';
import { AppAssignment } from './assignment/assignment.component';
import { ActiveUsersComponent } from './assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    ActiveUsersComponent,
    InactiveUsersComponent,
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AppAssignment,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingServices, AccountSerivce],
  bootstrap: [AppComponent],
})
export class AppModule {}
