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