'use strict';

// const friends = [
//     'Michael',
//     'Peter',
//     'Steven',
//     'Amy',
//     'Sarah',
// ]

// console.log(friends)

// This is a function - Array()
// const birthYears = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

//'Length' property returns '3' 
// console.log(friends.length)

// Returns 'Sarah'. (Calculates length of array which is 5 total elements. THEN -1 to get the final element)
// console.log(friends[friends.length -1]);

//Replaces element no 3 in array with new value.
// friends[3] = 'Fandango';
// console.log(friends)

// An array is NOT a primitive value, and can still be changed even if it is declared as a const variable.
//However, we cannot change the entire array...
// friends = ['Bob', 'Alice',]

// const firstName = 'Leah';
// const leah = [firstName, 'Fisher', 2022 - 1987, 'developer', friends];
// console.log(leah);
// console.log(leah.length);

//Exercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[4]);
// const age4 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3, age4);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[4]), calcAge(years[years.length - 1])];
// console.log(ages)

// const friends = [
//     'Michael', 
//     'Steven',
//     'Peter',
// ];

// .push is a method. Adds new element to end of array
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// .unshift is a method. Adds new element to the beginning of array
// friends.unshift('John');
// console.log(friends);

// .pop is a method. Removes element from end of array
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

//.shift is a method. Removes first element from array
// friends.shift();
// console.log(friends);

//.indexOf() gets the index position of an element in an array
// console.log(friends.indexOf('Steven'));

//.includes() gets True if element is in the array, and False if not
// friends.push('Michelle');
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('Michelle'));

// if (friends.includes('Mikail')) {
//     console.log('You have a friend called Steven');
// } else {
//     console.log('No friend by this name')
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2;
// }

// const bill = [125, 555, 44];

// const tips = [calcTip(bill[0]), calcTip(bill[1]),calcTip(bill[bill.length -1])];
// console.log(bill, tips);

// const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2],];
// console.log(totals);

// const calcTipArrow = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Objects - This object contains 5 key:value pairs. The object has 5 properties in total. 

const leah = {
    firstName: 'Leah',
    secondName: 'Fisher',
    age: 2022 - 1987,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven']
};
// console.log(leah);

// Getting information from the object using dot notation
// console.log(leah.secondName)

// Getting information from the object using brackets
// console.log(leah['secondName']);

// const nameKey = 'Name';
// console.log(leah['first' + nameKey]);
// console.log(leah['second' + nameKey]);

// const interestedIn = prompt('What do you want to know about Leah? Choose between firstName, secondName, age, jobs and friends');

// if (leah[interestedIn]) {
//     console.log(leah[interestedIn]);
// } else {
//     console.log('This value does not exist')
// };

// leah.location = 'Bristol';
// leah['instagram'] = '@leahfisher07';
// console.log(leah);

// console.log(`${leah.firstName} has ${leah.friends.length} friends, and her best friend is called ${leah.friends[0]}`);

// const leah2 = {
//     firstName: 'Leah',
//     secondName: 'Fisher',
//     birthYear: 1987,
//     job: 'developer',
//     friends: ['Emy', 'Pauline', 'Grace'],
//     hasDriversLicense: false,
    // Any function that is attached to an object, becomes a 'method'
    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }

//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old 
//         ${this.job}, and she has ${this.hasDriversLicense? 'a' : 'no'} driver's license.`
//     }

    

// };

// console.log(leah2.calcAge());
// console.log(leah2.age)

// console.log(leah2.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);