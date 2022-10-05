import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number; name: string; status: string };
  paramSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.paramSubscription = this.activeRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // this.paramSubscription = this.activeRoute.params.subscribe(
    //   (newParam: Params) => {
    //     const server = this.serversService.getServer(+newParam['id']);
    //     if (server) {
    //       this.server = server;
    //     }
    //   }
    // );
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.activeRoute,
      queryParamsHandling: 'preserve',
    });
  }
}
