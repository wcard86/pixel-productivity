import {
    CalendarActions
} from '../actions';
import { Calendar } from '../models/calendar.model';

export interface State {
    calendar: Calendar;
}

const initialState: State = {
    calendar: null,
};

export function reducer(
    state: State = initialState,
    action: CalendarActions.CalendarActionsUnion
): State {
    switch (action.type) {
        case CalendarActions.CalendarActionTypes.AddMonth:
            return {
                calendar: null,
            };

        case CalendarActions.CalendarActionTypes.AddDay:
            return {
                calendar: null,
            };

        case CalendarActions.CalendarActionTypes.AddCalendar:
            const payload = action.payload;
            return {
                calendar: payload,
            };

        default:
            return state;
    }
}

export const getCalendar = (state: State) => state.calendar;
