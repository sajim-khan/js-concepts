function isLeapYear(year){
    const reminder = year % 4;
    if (reminder === 0){
        console.log('Your year is Leap Year :', year);
    } else {
        console.log('Your year is not Leap Year ', year);
    }
}
isLeapYear(2020)