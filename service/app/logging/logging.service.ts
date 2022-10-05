import { Injectable } from '@angular/core';

export class LoggingServices {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
