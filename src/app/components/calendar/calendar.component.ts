import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day.model';
import { Calendar } from '../../models/calendar.model';
import { Store, select } from '@ngrx/store';
import * as fromCalendar from '../../reducers/calendar.reducer';
import { Observable } from 'rxjs';
import { CalendarService } from '../../services/calendar.service';
import { getCalendar } from '../../reducers';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  /* public status = 'completed';
  public text = 6;
   */

  public calendar$: Observable<Calendar>;

  constructor(private store: Store<fromCalendar.State>, private calendarService: CalendarService) {
    // this.calendar$ = this.store.pipe(select(fromCalendar.getCalendar)) as Observable<Calendar>;
  }

  ngOnInit() {
    this.calendar$ = this.store.pipe(select(getCalendar)) as Observable<Calendar>;
    this.calendarService.retrieveCalendar();
  }

  public getStatus(day: Day) {
    let classString = '';
    classString = day.status ? day.status : 'padding';
    return classString;
  }
  public total(days: Day[]) {
    let total = 0;
    for (const day of days) {
      total += day.blocks ? day.blocks : 0;
    }
    return total;
  }

}
