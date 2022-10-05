import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.activeRoute.params.subscribe((newParam) => {
      this.user = {
        id: newParam['id'],
        name: newParam['name'],
      };
    });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
