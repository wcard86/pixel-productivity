import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public status = 'completed';
  public month: { days: Day[], firstDate: string} = {
    days: [ {padding: true}, {padding: true}, {padding: true}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 5, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 8, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'vacation'}, {blocks: 10, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'nothing'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, {blocks: 0, status: 'completed'}, new Day(5, 'completed'), new Day()],
    firstDate: 'Monday(1) - 1 block of padding'
  };
  public text = 6;
  public getStatus(day: Day) {
    let classString = ''
    classString = day.status ? day.status : 'padding';
    return classString;
  }
  public total() {
    let total = 0;
    for(let day of this.month.days) {
      total += day.blocks ? day.blocks : 0;
    }
    return total;
  }
  constructor() { }

  ngOnInit() {
  }

}
