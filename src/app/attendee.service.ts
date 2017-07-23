import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AttendeeService {

  constructor(private http: Http) { }

  getAttendees() {
    return this.http
      .get('api/attendees')
      .map(data => data.json());
  }

}
