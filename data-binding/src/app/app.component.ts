import { Component } from '@angular/core';

interface ServerElement {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    {
      type: 'server',
      name: 'test server',
      content: 'just a test!',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed!';
  }

  onBluePrintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
