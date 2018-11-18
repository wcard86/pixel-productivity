import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Calendar } from '../models/calendar.model';
import { Store } from '@ngrx/store';
import { AddCalendar } from '../actions/calendar.actions';
import { FakeDb } from './fake-db';

@Injectable({
    providedIn: 'root',
})
export class CalendarService {
    // private API_PATH = 'mythical url TBD';

    constructor(private http: HttpClient, private store: Store<any>) { }

    retrieveCalendar(): void {
        this.store.dispatch(new AddCalendar(new FakeDb().calendar));
    }
}
