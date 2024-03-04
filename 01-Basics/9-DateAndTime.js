let myDate = new Date();
console.log(Date); // [Function: Date]
console.log( typeof myDate); // object
console.log(myDate); // 2021-02-28T16:45:44.733Z
console.log(myDate.toDateString()); // Thu Feb 29 2024
console.log(myDate.toISOString()); // 2024-02-29T16:45:44.733Z
console.log(myDate.toJSON()); // 2024-02-29T16:45:44.733Z
console.log(myDate.toLocaleDateString()); // 2/29/2024
console.log(myDate.toLocaleString()); // 2/29/2024, 10:45:44 PM

let myCreatedDate = new Date(2023, 0, 23) // 2023-01-23T00:00:00.000Z
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // 2023-01-23T05:03:00.000Z
let myCreatedDate3 = new Date("2023-01-14") // 2023-01-14T00:00:00.000Z
let myCreatedDate4 = new Date("01-14-2023") // 2023-01-14T05:30:00.000Z
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1646079944733 - It will return timestamp from 1st Jan 1970BC in milliseconds
console.log(myCreatedDate.getTime()); // 1671801600000
console.log(Math.floor(Date.now()/1000)); // 1646079944 - It will return timestamp from 1970BC in seconds

let newDate = new Date()
console.log(newDate); // 2024-02-29T16:45:44.733Z
console.log(newDate.getMonth() + 1); // 2
console.log(newDate.getDay()); // 4

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
}) 