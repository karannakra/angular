import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PractiseDatabindinComponent } from './practise-databindin/practise-databindin.component';
import { PractiseDirective } from './practise-directive/practise-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PractiseDatabindinComponent,
    PractiseDirective,
  ],
  providers: [],
  imports: [BrowserModule, FormsModule],
  bootstrap: [PractiseDirective],
})
export class AppModule {}
