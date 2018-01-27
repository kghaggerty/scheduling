/**
 * Scheduling events and goals is a core feature of our platform.
 * Users should be able to set goals to complete for themselves.
 * The purpose of setting goals is to keep the user motivated and help
 * them to stay clean.
 *
 * Users can set goals for themselves that repeat multiple times a week.
 * Below is an example goal from the API. Bryan created a goal for himself
 * to meditate three times a week on Mondays, Wednesdays, and Fridays.
 *
 * When the user creates a goal like the one below, the database can't
 * save a list of days on which the goal is due. To remedy this problem,
 * we use a base10 representation of binary to create a single number that
 * stores info on what days the goal repeats on.
 *
 * Days of the week:
 * [ 'M', 'T', 'W', 'Th', 'F', 'S', 'Su' ]
 *
 * Base10 representation of binary
 * [ 1, 2, 4, 8, 16, 32, 64 ]
 *
 * The goal below repeats every Monday, Wednesday, and Friday. To find the reccurenceDays
 * value, we add up the values for each day of the week, 1 + 4 + 16 = 21.
 *
 * This representation of the data is helpful for our database, but it is not helpful
 * for working with dates in JavaScript. We need to be able to convert this base10 representation
 * into an array of values that represent the day's index in the week.
 *
 * JavaScript representation of days of the week:
 * [ 1, 2, 3, 4, 5, 6, 0 ]
 *
 * These values are from Date.getDay().
 *
 * For the sake of our business problem, Mondays are the first day of the week, although JS treats
 * Sunday as the first day of the week (Sunday.getDay() === 0).
 *
 * Your goal is to create two functions:
 * 1. convertBase10ToArrayOfIndexes
 * 2. convertBase10ToArrayOfDays
 *
 * The first should accept the reccurenceDays value as input and output an array of index values
 * representing which days of the week the goal repeats on.
 *
 * E.g.: input 21 --> output [ 1, 3, 5 ]
 *
 * The second function should accept the reccurenceDays value as input and output an array of
 * strings for each day the goal repeats on.
 *
 * E.g.: input 21 --> output [ 'M', 'W', 'F' ]
 */

const goal = {
  activeDate: '2018-01-23T22:10:57.00Z',
  author: {
    firstName: 'Bryan',
    lastName: 'Smith',
    id: 173
  },
  name: 'Meditate',
  description: 'Meditate three times a week, on Monday, Wednesday, and Friday',
  goalId: 710,
  originalDueDate: '2018-01-24T23:00:00.00Z',
  recurrenceDays: 0
};


// You can change the body and parameter list of these functions.
export const convertBase10ToArrayOfIndexes = (recurrenceDays) => {
  
    let indexDays = []
  //Numbers of the week
    let numbersOfWeek = [1, 2, 3, 4, 5, 6, 0];
    //convert 21 to binary
    let reverseBinary = []
    let binaryConvert = recurrenceDays.toString(2);
    let stringConvert = binaryConvert.split('')
    if (stringConvert.length <= 7) {
        reverseBinary.push(stringConvert.reverse());
    } else if (stringConvert.length === 8) {
        stringConvert = ['1', '1', '1', '1', '1', '1', '1'];
    }
        do {
            stringConvert.push('0')
        } while (stringConvert.length < 7);
    
    for (let i = 0; i < stringConvert.length; i++) {
        const element = stringConvert[i];
        if (element === '1') {
          indexDays.push(numbersOfWeek[i])
            
        } 
    }
    return indexDays;
};

export const convertBase10ToArrayOfDays = (days) => {
    let convertedDays = []
    let daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
    //convert number to binary
    let reverseBinary = []
    let binaryConvert = days.toString(2);
    let stringConvert = binaryConvert.split('')
    if (stringConvert.length <= 7) {
      reverseBinary.push(stringConvert.reverse());
  } else if (stringConvert.length === 8) {
      stringConvert = ['1', '1', '1', '1', '1', '1', '1'];
  }
      do {
          stringConvert.push('0')
      } while (stringConvert.length < 7);
  
  for (let i = 0; i < stringConvert.length; i++) {
      const element = stringConvert[i];
      if (element === '1') {
        convertedDays.push(daysOfWeek[i])
      } 
  }
    return convertedDays;
};

/**
 * Bonus:
 *
 * We schedule push notifications to remind the user about their goals
 * 15 minutes before they are due. This function should return info
 * about the next cycle of push notifications that should occur for this goal.
 * In the above goal example, this should return the times of the next
 * push notifications that should occur to remind the user about his goal.
 * You need to find the next 3 push notification times since this goal
 * repeats 3 times a week.
 *
 * Write a test case for this as well.
 *
 * You are allowed to use third-party date libraries like moment or date-fns (recommended).
 */

// export const getNextPushNotifications = () => {

// };

