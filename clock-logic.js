setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  console.log(`hr min sec ${hr} --${min}--${sec} `);
  console.log(`hr min sec ${hr_rotation} --${min_rotation}--${sec_rotation} `);
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

//A clock is a circle with 360 degrees, so it moves 30 degrees per hour.

/* For hour
12 hrs - 360degrde
1 hr = 30 degree

But with minute hand hour hand will move as well
1 hr = 60 min = 30 degree
1 min = 30/60 = 1/2 degree

*/

/* For minute
12 hrs - 360degrde
1 hr = 30 degree

But with minute hand hour hand will move as well
5 min = 30 degree
1 min = 30/5 = 6 degree

*/

/* For seconds
60 sec - 360degrde
1 sec = 360/60 degree = 6 degree


*/

/*
if hr min sec 11 --4--22 
then degree 332 --24--132 
*/
