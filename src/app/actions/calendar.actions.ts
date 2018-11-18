import { Action } from '@ngrx/store';

export enum CalendarActionTypes {
  AddMonth = '[Calendar] Add Month',
  AddDay = '[Calendar] Add Day',
  AddCalendar = '[Calendar] Add Calendar',
}

export class AddMonth implements Action {
  readonly type = CalendarActionTypes.AddMonth;
  constructor(public payload: any) {}
}

export class AddDay implements Action {
  readonly type = CalendarActionTypes.AddDay;
  constructor(public payload: any) {}
}

export class AddCalendar implements Action {
    readonly type = CalendarActionTypes.AddCalendar;
    constructor(public payload: any) {}
  }

export type CalendarActionsUnion = AddMonth | AddDay | AddCalendar;
