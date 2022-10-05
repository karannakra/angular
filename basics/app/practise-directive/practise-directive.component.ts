import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-practise',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
  templateUrl: `./practise-directive.component.html`,
})
export class PractiseDirective {
  displayParagraph = false;
  logs: any[] = [];
  constructor() {}
  displayToggle() {
    this.displayParagraph = !this.displayParagraph;
    const timeStamp = new Date().getTime();
    this.logs.push(`Paragraph visible = ${this.displayParagraph},${timeStamp}`);
  }
}
