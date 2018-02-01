import {
  convertBase10ToArrayOfIndexes,
  convertBase10ToArrayOfDays,
  getNextPushNotifications
} from './daysOfWeek';

var moment = require('moment');
moment().format();

describe('Convert base 10 representation of days of week into list of indexes of each day', () => {

  it('should be able to find the index for Sunday when the goal only repeats on Sundays', () => {
    const recurrenceDays = 64;
    const indexDays = convertBase10ToArrayOfIndexes(recurrenceDays);

    expect(indexDays).toEqual([ 0 ]);
  });

  it('should be able to find the indexes for Monday, Wednesday, and Friday', () => {
    const recurrenceDays = 21;
    const indexDays = convertBase10ToArrayOfIndexes(recurrenceDays);

    expect(indexDays).toEqual([ 1, 3, 5 ]);
  });

  it('should be able to find the indexes for goals that repeat daily', () => {
    const recurrenceDays = 128;
    const indexDays = convertBase10ToArrayOfIndexes(recurrenceDays);

    expect(indexDays).toEqual([ 1, 2, 3, 4, 5, 6, 0 ]);
  });
});

describe('Convert base 10 representation of days of week into strings with abbreviated day names', () => {

  it('should convert base 10 representation into string values for goals that repeat on one day of the week', () => {
    const days = 1;
    const expectedDays = [ 'M' ];
    const convertedDays = convertBase10ToArrayOfDays(days);

    expect(convertedDays).toEqual(expectedDays);
  });

  it('should convert daily recurrences into list of each day of the week', () => {
    const days = 128;
    const expectedDays = [ 'M', 'T', 'W', 'Th', 'F', 'S', 'Su' ];
    const convertedDays = convertBase10ToArrayOfDays(days);

    expect(convertedDays).toEqual(expectedDays);
  });

  it('should convert goals that repeat multiple times a week into a list of each day of the week', () => {
    const days = 14;
    const expectedDays = [ 'T', 'W', 'Th' ];
    const convertedDays = convertBase10ToArrayOfDays(days);

    expect(convertedDays).toEqual(expectedDays);
  });
});

describe('Send correct push notifcation time to user when they select which days they want reminders', () => {

  it('should send push notifcations for multiple times in a week, 15 minutes prior to the due time', () => {
    const recurrenceDays = ['1', '3', '5'];
    const pushTime = getNextPushNotifications(recurrenceDays);

    expect(pushTime).toEqual(['2018-02-05T22:45.00Z', '2018-02-07T22:45.00Z', '2018-02-09T22:45.00Z']);
  });

  it('should send push notifcations for next Monday if they are currently setting the date on a Monday', () => {
    const recurrenceDays = ['1'];
    const pushTime = getNextPushNotifications(recurrenceDays);

    expect(pushTime).toEqual(['2018-02-05T22:45.00Z']);
  });

  it('should send push notifcations for multiple times a week, where Sunday equals the upcoming Sunday', () => {
    const recurrenceDays = ['5', '6', '0'];
    const pushTime = getNextPushNotifications(recurrenceDays);

    expect(pushTime).toEqual(['2018-02-09T22:45.00Z', '2018-02-10T22:45.00Z', '2018-02-04T22:45.00Z']);
  });
});