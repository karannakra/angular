import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          if (count > 4) {
            observer.complete();
          }
          if (count > 5) {
            observer.error(new Error('Count is greater 3!'));
          }
          observer.next(count);

          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        map((data) => {
          return 'round: ' + data;
        }),
        map((data) => {
          return data + ' round';
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error: Error) => {
          alert(error.message);
        },
        () => {
          console.log('completed');
        }
      );
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
