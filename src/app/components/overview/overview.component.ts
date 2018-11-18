import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CalendarService } from '../../services/calendar.service';
import * as fromCalendar from '../../reducers/calendar.reducer';
import { Calendar } from '../../models/calendar.model';
import { Observable } from 'rxjs';
import { getCalendar } from '../../reducers';
import { Day } from '../../models/day.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public calendar$: Observable<Calendar>;
  constructor(private store: Store<fromCalendar.State>, private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendar$ = this.store.pipe(select(getCalendar)) as Observable<Calendar>;
  }

  public total(days: Day[]) {
    let total = 0;
    for (const day of days) {
      if (day.blocks && day.blocks > 0) { total += 1; }
    }
    return total;
  }

}
