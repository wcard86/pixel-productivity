import { Calendar } from '../models/calendar.model';
import { Day, StatusType } from '../models/day.model';

export class FakeDb {
    calendar: Calendar = {
        // Will normally we would use Date objects and UTC time for all the days so we can use date libraries
        // I just don't want to convert the data set right now
        months: [
            {
                days: [
                    new Day(),  // 1
                    new Day(),  // 2
                    new Day(),  // 3
                    new Day(),  // 4
                    new Day(),  // 5
                    new Day(),  // 6
                    new Day(),  // 7
                    new Day(),  // 8
                    new Day(),  // 9
                    new Day(),  // 10
                    new Day(),  // 11
                    new Day(),  // 12
                    new Day(),  // 13
                    new Day(),  // 14
                    new Day(),  // 15
                    new Day(),  // 16
                    new Day(),  // 17
                    new Day(),  // 18
                    new Day(),  // 19
                    new Day(),  // 20
                    new Day(),  // 21
                    new Day(),  // 22
                    new Day(),  // 23
                    new Day(),  // 24
                    new Day(),  // 25
                    new Day(),  // 26
                    new Day(),  // 27
                    new Day(),  // 28
                    new Day(),  // 29
                    new Day(),  // 30
                    new Day(),  // 31
                ],
                name: 'January',
                firstDate: 'Sunday(0) - 0 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(1, StatusType.Completed),  // 1
                    new Day(3, StatusType.Completed),  // 2
                    new Day(4, StatusType.Completed),  // 3
                    new Day(3, StatusType.Completed),  // 4
                    new Day(5, StatusType.Completed),  // 5
                    new Day(1, StatusType.Completed),  // 6
                    new Day(1, StatusType.Completed),  // 7
                    new Day(1, StatusType.Completed),  // 8
                    new Day(1, StatusType.Completed),  // 9
                    new Day(2, StatusType.Completed),  // 10
                    new Day(2, StatusType.Completed),  // 11
                    new Day(0, StatusType.Vacation),  // 12
                    new Day(0, StatusType.Vacation),  // 13
                    new Day(0, StatusType.Vacation),  // 14
                    new Day(0, StatusType.Vacation),  // 15
                    new Day(2, StatusType.Vacation),  // 16
                    new Day(0, StatusType.Vacation),  // 17
                    new Day(0, StatusType.Vacation),  // 18
                    new Day(1, StatusType.Completed),  // 19
                    new Day(1, StatusType.Completed),  // 20
                    new Day(1, StatusType.Completed),  // 21
                    new Day(1, StatusType.Completed),  // 22
                    new Day(5, StatusType.Completed),  // 23
                    new Day(1, StatusType.Completed),  // 24
                    new Day(10, StatusType.Completed),  // 25
                    new Day(10, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(1, StatusType.Completed),  // 28
                ],
                name: 'February',
                firstDate: 'Tuesday(2) - 2 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(3, StatusType.Completed),  // 1
                    new Day(2, StatusType.Completed),  // 2
                    new Day(1, StatusType.Completed),  // 3
                    new Day(5, StatusType.Completed),  // 4
                    new Day(4, StatusType.Completed),  // 5
                    new Day(1, StatusType.Completed),  // 6
                    new Day(1, StatusType.Completed),  // 7
                    new Day(2, StatusType.Completed),  // 8
                    new Day(1, StatusType.Completed),  // 9
                    new Day(1, StatusType.Completed),  // 10
                    new Day(1, StatusType.Completed),  // 11
                    new Day(1, StatusType.Completed),  // 12
                    new Day(3, StatusType.Completed),  // 13
                    new Day(2, StatusType.Completed),  // 14
                    new Day(1, StatusType.Completed),  // 15
                    new Day(1, StatusType.Completed),  // 16
                    new Day(1, StatusType.Completed),  // 17
                    new Day(6, StatusType.Completed),  // 18
                    new Day(4, StatusType.Completed),  // 19
                    new Day(2, StatusType.Completed),  // 20
                    new Day(6, StatusType.Completed),  // 21
                    new Day(2, StatusType.Completed),  // 22
                    new Day(1, StatusType.Completed),  // 23
                    new Day(1, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(2, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(1, StatusType.Completed),  // 28
                    new Day(2, StatusType.Completed),  // 29
                    new Day(1, StatusType.Completed),  // 30
                    new Day(1, StatusType.Completed),  // 31
                ],
                name: 'March',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(2, StatusType.Completed),  // 1
                    new Day(3, StatusType.Completed),  // 2
                    new Day(3, StatusType.Completed),  // 3
                    new Day(6, StatusType.Completed),  // 4
                    new Day(5, StatusType.Completed),  // 5
                    new Day(6, StatusType.Completed),  // 6
                    new Day(14, StatusType.Completed),  // 7
                    new Day(9, StatusType.Completed),  // 8
                    new Day(10, StatusType.Completed),  // 9
                    new Day(7, StatusType.Completed),  // 10
                    new Day(13, StatusType.Completed),  // 11
                    new Day(3, StatusType.Completed),  // 12
                    new Day(5, StatusType.Completed),  // 13
                    new Day(24, StatusType.Completed),  // 14
                    new Day(16, StatusType.Completed),  // 15
                    new Day(1, StatusType.Completed),  // 16
                    new Day(2, StatusType.Completed),  // 17
                    new Day(4, StatusType.Completed),  // 18
                    new Day(3, StatusType.Completed),  // 19
                    new Day(4, StatusType.Completed),  // 20
                    new Day(2, StatusType.Completed),  // 21
                    new Day(9, StatusType.Completed),  // 22
                    new Day(12, StatusType.Completed),  // 23
                    new Day(3, StatusType.Completed),  // 24
                    new Day(6, StatusType.Completed),  // 25
                    new Day(6, StatusType.Completed),  // 26
                    new Day(5, StatusType.Completed),  // 27
                    new Day(1, StatusType.Completed),  // 28
                    new Day(6, StatusType.Completed),  // 29
                    new Day(2, StatusType.Completed),  // 30
                ],
                name: 'April',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(4, StatusType.Completed),  // 1
                    new Day(4, StatusType.Completed),  // 2
                    new Day(3, StatusType.Completed),  // 3
                    new Day(13, StatusType.Completed),  // 4
                    new Day(4, StatusType.Completed),  // 5
                    new Day(9, StatusType.Completed),  // 6
                    new Day(1, StatusType.Completed),  // 7
                    new Day(1, StatusType.Completed),  // 8
                    new Day(1, StatusType.Completed),  // 9
                    new Day(0, StatusType.Vacation),  // 10
                    new Day(0, StatusType.Vacation),  // 11
                    new Day(0, StatusType.Vacation),  // 12
                    new Day(0, StatusType.Vacation),  // 13
                    new Day(0, StatusType.Vacation),  // 14
                    new Day(2, StatusType.Completed),  // 15
                    new Day(1, StatusType.Completed),  // 16
                    new Day(6, StatusType.Completed),  // 17
                    new Day(2, StatusType.Completed),  // 18
                    new Day(1, StatusType.Completed),  // 19
                    new Day(11, StatusType.Completed),  // 20
                    new Day(7, StatusType.Completed),  // 21
                    new Day(8, StatusType.Completed),  // 22
                    new Day(1, StatusType.Completed),  // 23
                    new Day(4, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(2, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(1, StatusType.Completed),  // 28
                    new Day(6, StatusType.Completed),  // 29
                    new Day(4, StatusType.Completed),  // 30
                    new Day(12, StatusType.Completed),  // 31
                ],
                name: 'May',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, StatusType.Nothing),  // 1
                    new Day(0, StatusType.Nothing),  // 2
                    new Day(5, StatusType.Completed),  // 3
                    new Day(14, StatusType.Completed),  // 4
                    new Day(0, StatusType.Nothing),  // 5
                    new Day(1, StatusType.Completed),  // 6
                    new Day(2, StatusType.Completed),  // 7
                    new Day(0, StatusType.Nothing),  // 8
                    new Day(0, StatusType.Vacation),  // 9
                    new Day(0, StatusType.Vacation),  // 10
                    new Day(2, StatusType.Completed),  // 11
                    new Day(9, StatusType.Completed),  // 12
                    new Day(7, StatusType.Completed),  // 13
                    new Day(8, StatusType.Completed),  // 14
                    new Day(4, StatusType.Completed),  // 15
                    new Day(9, StatusType.Completed),  // 16
                    new Day(5, StatusType.Completed),  // 17
                    new Day(2, StatusType.Completed),  // 18
                    new Day(10, StatusType.Completed),  // 19
                    new Day(5, StatusType.Completed),  // 20
                    new Day(4, StatusType.Completed),  // 21
                    new Day(7, StatusType.Completed),  // 22
                    new Day(7, StatusType.Completed),  // 23
                    new Day(2, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(11, StatusType.Completed),  // 26
                    new Day(13, StatusType.Completed),  // 27
                    new Day(13, StatusType.Completed),  // 28
                    new Day(15, StatusType.Completed),  // 29
                    new Day(7, StatusType.Completed),  // 30
                ],
                name: 'June',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(9, StatusType.Completed),  // 1
                    new Day(14, StatusType.Completed),  // 2
                    new Day(10, StatusType.Completed),  // 3
                    new Day(0, StatusType.Vacation),  // 4
                    new Day(6, StatusType.Completed),  // 5
                    new Day(2, StatusType.Completed),  // 6
                    new Day(8, StatusType.Completed),  // 7
                    new Day(0, StatusType.Vacation),  // 8
                    new Day(0, StatusType.Vacation),  // 9
                    new Day(0, StatusType.Vacation),  // 10
                    new Day(0, StatusType.Vacation),  // 11
                    new Day(0, StatusType.Vacation),  // 12
                    new Day(19, StatusType.Completed),  // 13
                    new Day(2, StatusType.Completed),  // 14
                    new Day(1, StatusType.Completed),  // 15
                    new Day(6, StatusType.Completed),  // 16
                    new Day(11, StatusType.Completed),  // 17
                    new Day(18, StatusType.Completed),  // 18
                    new Day(11, StatusType.Completed),  // 19
                    new Day(17, StatusType.Completed),  // 20
                    new Day(8, StatusType.Completed),  // 21
                    new Day(0, StatusType.Vacation),  // 22
                    new Day(1, StatusType.Completed),  // 23
                    new Day(4, StatusType.Completed),  // 24
                    new Day(14, StatusType.Completed),  // 25
                    new Day(6, StatusType.Completed),  // 26
                    new Day(16, StatusType.Completed),  // 27
                    new Day(12, StatusType.Completed),  // 28
                    new Day(5, StatusType.Completed),  // 29
                    new Day(1, StatusType.Completed),  // 30
                    new Day(4, StatusType.Completed),  // 31
                ],
                name: 'July',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(8, StatusType.Completed),  // 1
                    new Day(4, StatusType.Completed),  // 2
                    new Day(13, StatusType.Completed),  // 3
                    new Day(12, StatusType.Completed),  // 4
                    new Day(4, StatusType.Completed),  // 5
                    new Day(5, StatusType.Completed),  // 6
                    new Day(10, StatusType.Completed),  // 7
                    new Day(9, StatusType.Completed),  // 8
                    new Day(5, StatusType.Completed),  // 9
                    new Day(8, StatusType.Completed),  // 10
                    new Day(4, StatusType.Completed),  // 11
                    new Day(12, StatusType.Completed),  // 12
                    new Day(13, StatusType.Completed),  // 13
                    new Day(4, StatusType.Completed),  // 14
                    new Day(7, StatusType.Completed),  // 15
                    new Day(9, StatusType.Completed),  // 16
                    new Day(10, StatusType.Completed),  // 17
                    new Day(3, StatusType.Completed),  // 18
                    new Day(15, StatusType.Completed),  // 19
                    new Day(8, StatusType.Completed),  // 20
                    new Day(7, StatusType.Completed),  // 21
                    new Day(6, StatusType.Completed),  // 22
                    new Day(7, StatusType.Completed),  // 23
                    new Day(2, StatusType.Completed),  // 24
                    new Day(4, StatusType.Completed),  // 25
                    new Day(8, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(2, StatusType.Completed),  // 28
                    new Day(6, StatusType.Completed),  // 29
                    new Day(7, StatusType.Completed),  // 30
                    new Day(10, StatusType.Completed),  // 31
                ],
                name: 'August',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(2, StatusType.Completed),  // 1
                    new Day(11, StatusType.Completed),  // 2
                    new Day(2, StatusType.Completed),  // 3
                    new Day(3, StatusType.Completed),  // 4
                    new Day(4, StatusType.Completed),  // 5
                    new Day(8, StatusType.Completed),  // 6
                    new Day(11, StatusType.Completed),  // 7
                    new Day(4, StatusType.Completed),  // 8
                    new Day(16, StatusType.Completed),  // 9
                    new Day(4, StatusType.Completed),  // 10
                    new Day(7, StatusType.Completed),  // 11
                    new Day(6, StatusType.Completed),  // 12
                    new Day(5, StatusType.Completed),  // 13
                    new Day(8, StatusType.Completed),  // 14
                    new Day(10, StatusType.Completed),  // 15
                    new Day(8, StatusType.Completed),  // 16
                    new Day(8, StatusType.Completed),  // 17
                    new Day(6, StatusType.Completed),  // 18
                    new Day(6, StatusType.Completed),  // 19
                    new Day(4, StatusType.Completed),  // 20
                    new Day(8, StatusType.Completed),  // 21
                    new Day(5, StatusType.Completed),  // 22
                    new Day(4, StatusType.Completed),  // 23
                    new Day(1, StatusType.Completed),  // 24
                    new Day(7, StatusType.Completed),  // 25
                    new Day(2, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(5, StatusType.Completed),  // 28
                    new Day(2, StatusType.Completed),  // 29
                    new Day(5, StatusType.Completed),  // 30
                ],
                name: 'September',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(2, StatusType.Completed),  // 1
                    new Day(4, StatusType.Completed),  // 2
                    new Day(2, StatusType.Completed),  // 3
                    new Day(4, StatusType.Completed),  // 4
                    new Day(12, StatusType.Completed),  // 5
                    new Day(7, StatusType.Completed),  // 6
                    new Day(5, StatusType.Completed),  // 7
                    new Day(5, StatusType.Completed),  // 8
                    new Day(4, StatusType.Completed),  // 9
                    new Day(3, StatusType.Completed),  // 10
                    new Day(10, StatusType.Completed),  // 11
                    new Day(6, StatusType.Completed),  // 12
                    new Day(7, StatusType.Completed),  // 13
                    new Day(0, StatusType.Vacation),  // 14
                    new Day(0, StatusType.Vacation),  // 15
                    new Day(4, StatusType.Completed),  // 16
                    new Day(3, StatusType.Completed),  // 17
                    new Day(10, StatusType.Completed),  // 18
                    new Day(6, StatusType.Completed),  // 19
                    new Day(2, StatusType.Completed),  // 20
                    new Day(0, StatusType.Vacation),  // 21
                    new Day(0, StatusType.Vacation),  // 22
                    new Day(3, StatusType.Completed),  // 23
                    new Day(3, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(5, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(3, StatusType.Completed),  // 28
                    new Day(1, StatusType.Completed),  // 29
                    new Day(1, StatusType.Completed),  // 30
                    new Day(4, StatusType.Completed),  // 31
                ],
                name: 'October',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(4, StatusType.Completed),  // 1
                    new Day(2, StatusType.Completed),  // 2
                    new Day(2, StatusType.Completed),  // 3
                    new Day(1, StatusType.Completed),  // 4
                    new Day(1, StatusType.Completed),  // 5
                    new Day(1, StatusType.Completed),  // 6
                    new Day(3, StatusType.Completed),  // 7
                    new Day(6, StatusType.Completed),  // 8
                    new Day(2, StatusType.Completed),  // 9
                    new Day(3, StatusType.Completed),  // 10
                    new Day(3, StatusType.Completed),  // 11
                    new Day(2, StatusType.Completed),  // 12
                    new Day(2, StatusType.Completed),  // 13
                    new Day(3, StatusType.Completed),  // 14
                    new Day(4, StatusType.Completed),  // 15
                    new Day(2, StatusType.Completed),  // 16
                    new Day(3, StatusType.Completed),  // 17
                    new Day(4, StatusType.Completed),  // 18
                    new Day(3, StatusType.Completed),  // 19
                    new Day(2, StatusType.Completed),  // 20
                    new Day(3, StatusType.Completed),  // 21
                    new Day(1, StatusType.Completed),  // 22
                    new Day(2, StatusType.Completed),  // 23
                    new Day(2, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(1, StatusType.Completed),  // 26
                    new Day(7, StatusType.Completed),  // 27
                    new Day(5, StatusType.Completed),  // 28
                    new Day(5, StatusType.Completed),  // 29
                    new Day(2, StatusType.Completed),  // 30
                ],
                name: 'November',
                firstDate: 'Monday(1) - 1 block of padding'
            },
            {
                days: [
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(0, null, true), // padding
                    new Day(3, StatusType.Completed),  // 1
                    new Day(6, StatusType.Completed),  // 2
                    new Day(1, StatusType.Completed),  // 3
                    new Day(7, StatusType.Completed),  // 4
                    new Day(6, StatusType.Completed),  // 5
                    new Day(6, StatusType.Completed),  // 6
                    new Day(2, StatusType.Completed),  // 7
                    new Day(6, StatusType.Completed),  // 8
                    new Day(3, StatusType.Completed),  // 9
                    new Day(4, StatusType.Completed),  // 10
                    new Day(2, StatusType.Completed),  // 11
                    new Day(3, StatusType.Completed),  // 12
                    new Day(6, StatusType.Completed),  // 13
                    new Day(1, StatusType.Completed),  // 14
                    new Day(1, StatusType.Completed),  // 15
                    new Day(3, StatusType.Completed),  // 16
                    new Day(3, StatusType.Completed),  // 17
                    new Day(4, StatusType.Completed),  // 18
                    new Day(1, StatusType.Completed),  // 19
                    new Day(1, StatusType.Completed),  // 20
                    new Day(1, StatusType.Completed),  // 21
                    new Day(7, StatusType.Completed),  // 22
                    new Day(2, StatusType.Completed),  // 23
                    new Day(2, StatusType.Completed),  // 24
                    new Day(2, StatusType.Completed),  // 25
                    new Day(7, StatusType.Completed),  // 26
                    new Day(2, StatusType.Completed),  // 27
                    new Day(1, StatusType.Completed),  // 28
                    new Day(3, StatusType.Completed),  // 29
                    new Day(1, StatusType.Completed),  // 30
                    new Day(1, StatusType.Completed),  // 31
                ],
                name: 'December',
                firstDate: 'Monday(1) - 1 block of padding'
            }
        ]
    };
}
