import { Component, OnDestroy, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactive-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, OnDestroy, CanComponentDeactivate
{
  server: { id: number; name: string; status: string };
  allowEdit: boolean = false;
  paramSubscription: Subscription;
  querySubscription: Subscription;
  querParams: any = {};
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.paramSubscription = this.activateRoute.params.subscribe(
      (param: Params) => {
        const server = this.serversService.getServer(+param['id']);
        if (server) {
          this.server = server;
        }
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );
    this.querySubscription = this.activateRoute.queryParams.subscribe(
      (params: Params) => {
        for (let [key, value] of Object.entries(params)) {
          this.querParams[key] = value;
        }

        this.allowEdit = this.querParams['allowEdit'] === '1';
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activateRoute });
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName! == this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes? ');
    }
    else{
      return true
    }
  }
}
