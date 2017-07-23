import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { AttendeeService } from './../attendee.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {
  attendees;
  param;

  constructor(
    private route: ActivatedRoute,
    private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.getAttendees();
    this.route.paramMap.subscribe(params => {
      this.param = params.get('id')
      console.log(params.get('id'))
    });
  }

  getAttendees() {
    this.attendeeService.getAttendees()
      .subscribe(attendees => this.attendees = attendees);
  }

}
