import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'error-page',
  styleUrls: ['./error-page.component.css'],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}
