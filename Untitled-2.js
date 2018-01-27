({
    babel: true
})

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
    recurrenceDays: 14
  };
  
  //Numbers of the week
  let numbersOfWeek = [ '1', '2', '3', '4', '5', '6', '0' ];
  let daysOfWeek = [ 'M', 'T', 'W', 'Th', 'F', 'S', 'Su' ];
  let input = goal.recurrenceDays
  //convert 21 to binary
  let reverseBinary = []
  let binaryConvert = input.toString(2);
  let stringConvert = binaryConvert.split('')
  if(stringConvert.length === 7) {
      reverseBinary.push(stringConvert.reverse())
    } else if (stringConvert.length > 7) {
        let stringConvert = ['1', '1', '1', '1', '1', '1', '1'];
    } else {
        do {
            stringConvert.push('0')
          } while (stringConvert.length < 7);
    }
  console.log(reverseBinary)
  console.log(binaryConvert)
  
  
  
    for (let i = 0; i < stringConvert.length; i++) {
        const element = stringConvert[i];
        if (element === '1'){
            console.log(element)
            let finalArray = []
            finalArray.push(numbersOfWeek[i])
        console.log(finalArray)
}
}
  
  // You can change the body and parameter list of these functions.
  export const convertBase10ToArrayOfIndexes = () => {
      
  };
  
  
  
  export const convertBase10ToArrayOfDays = () => {
  
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
  
  export const getNextPushNotifications = () => {
  
  };
  