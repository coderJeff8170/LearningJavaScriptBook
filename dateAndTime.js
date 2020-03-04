const moment = require('moment-timezone');

//looks like the date and time format is displayed differently here, now, in node than what the book talks about 


// const d = new Date();//I get something like 2020-03-02T13:23:52.324Z and the book says it'll be like Sat Jul 18 2015 11:06:17 GMT-0700....ok, in browser console, it looks like what's in the book...

//const d = new Date(2020, 0); //2020-01-01T05:00:00.000Z (months are zero base so january is 0 )
//const d = new Date(2020, 1); //2020-02-01T05:00:00.000Z (Feb...)
//const d = new Date(2020, 1, 14); //awe, valentines day!
//const d = new Date(2020, 1, 14, 13, 30);//ok, so node'll spit out the GMT value of 1830(5hours added) - 
//const d = new Date(2020, 1, 14, 13, 30, 20, 500);
//notice how it's year, month, day, hour, minute, second, milliseconds

//all these are calculated from the unix epoch, or number of milliseconds passed since the unix epoch (Jan 1, 1970)

//const d = new Date(0);
//const d = new Date(1583155456421);//lol, the last time I worked on this

//if you want dates prior to unix epoch, you use negative dates
//const d = new Date(-365*24*60*60*1000);//Jan 1, 1969

//parsing date strings (default to local time:)
//const d = new Date('August 1, 1970');//local time
//const d = new Date('August 1, 1970 GMT -0000');//GMT

//consider using moment.js, a js library that covers date functionality:
//you can CDN it for the broswer, or npm it and then reference it in your file..
//npm install --save moment-timezone
//const moment = require('moment-timezone');
//avoid using local timezones on the server,since it could be accessed from around the world - use moment.js to handle conversion and display of dates in other tzs
const d = new Date(Date.UTC(2020, 2, 4));//March 4, 2020

console.log(d);