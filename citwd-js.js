const monthlyRent = 3000;
const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);
yearlyRent;

const myName = "Mahesh Jain"

console.log(myName)

const firstName = "Mahesh"
const lastName = "Jain"

const greeting = "Hello " + firstName + " " + lastName + "! How are you?"
const greetingWithTemplate = `Hello ${firstName} ${lastName}! How are you?`

console.log(greeting)
console.log(greetingWithTemplate)

// control flow
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("Sky is Blue!");
}
else {
  console.log("Sky is not Blue!");
}

const temperatureToday = 45;

if (temperatureToday >= 40) {
  console.log("It is damn too hot");
}
else {
  console.log("It is fine. maybe");
}

if (2 + 2 === 4) {
  console.log("True");
}
else {
  console.log("False");
}

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
}
else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play Mario Kart.");
}
else {
  console.log("Wooooo turn on the dance music!.");
}

// loops

let friends = 0;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
friends = friends + 1;
console.log(friends);

let friendsAtParty = 0;
while (friendsAtParty < 10) {
  friendsAtParty = friendsAtParty + 1;
}
console.log(friendsAtParty);  

let tea = 0;
tea = tea + 1;
tea += 1;
tea++;
++tea;
console.log(tea); 

let atParty = 0;
for (let i = 0; i < 10; i++) {
  atParty++;
}
console.log(atParty);

const character = "a";
const timesToRepeat = 50;
let answer = "";

for (let i = 0; i < timesToRepeat; i++) {
  answer = answer + character;
}
console.log(answer.length);

// functions

function addTwo(number) {
  return number +2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(10));

function greet(firstname, lastname, honorific, greeting) {
  return `${greeting} ${honorific} ${lastname}! I'm extremely pleased you could join us, ${firstname}! I hope you enjoy your stay, ${honorific} ${lastname}.`;
}

console.log(greet("Mahesh", "Jain", "Lord", "Salutations"))

// builtins

console.log(myName.toUpperCase());

console.log(Math.round(5.1));
console.log(Math.floor(5.6)); // round down
console.log(Math.ceil(5.2)); // round up

console.log(myName.substr(7, 5)); // (indexToStart, howManyCharactersToInclude)

// objects

const person = {
  name: "Mahesh Jain",
  city: "Rohtak",
  state: "Haryana",
  address: {
    place: "Boys Hostel No.7",
    roomNo: 29,
  }
};

const stateName = "state"
console.log(person);
console.log(person.name);
console.log(person.city);
console.log(person.state);
console.log(person["name"]);
console.log(person[stateName]);
console.log(person.address);

const person1 = {
  name: "Ram",
  ageRange: "25-35"
};

const person2 = {
  name: "Shyam",
  ageRange: "65-75"
};

function suggestLanguage(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Go.");
  }
  else if (person.ageRange === "65-75") {
    console.log("We think you'll like C.");
  }
  else {
    console.log("We think you'll like JavaScript.");
  }
}

suggestLanguage(person1);
suggestLanguage(person2);

const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};

dog.speak();

// context

const me = {
  name: {
    firstName: "Mahesh",
    lastName: "Jain"
  },
  address: {
    roomNo: "Room No. 29",
    hostel: "Boys Hostel No.7",
    location: "Maharshi Dayanand University",
    city: "Rohtak",
    state: "Haryana",
    pinCode: "124001",
    country: "India"
  },
  getAddress() {
    return `${this.name.firstName} ${this.name.lastName}
${this.address.roomNo}, ${this.address.hostel}
${this.address.location}
${this.address.city}, ${this.address.state}, ${this.address.pinCode}
${this.address.country}`
  }
};

console.log(me.getAddress());

console.log(this === window);
//console.log(this.scrollY);
//console.log(window.scrollY);

// arrays

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday"
];

console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[6]);
console.log(daysOfTheWeek[4]);
console.log(daysOfTheWeek[2]);

const primeNumbers = [2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

const myClass = [
  { name: "Mahesh Jain", branch: "CSE" },
  { name: "Aakash", branch: "ECE"},
  { name: "Danish Multani", branch: "CSE"},
  { name: "Deepak Saini", branch: "CSE"},
  { name: "Vipin Malik", branch: "CSE"},
  { name: "Manoj Dhillon", branch: "ECE"}
];

myClass.unshift({ name: "Dikshant", branch: "CSE"}); // add at start

myClass.push({ name: "Sonu Dass", branch: "CSE"}); // add at end
console.log(myClass);

myClass[2].branch = "CSE";
myClass[6].branch = "CSE";
console.log(myClass);

const branches = [
  "CSE",
  "ECE",
  "ET",
  "CE",
  "BT",
  "ME"
];

// method 1 
for (let i = 0; i < branches.length; i++) {
  const branch = branches[i];
  console.log(branch.toLowerCase());
}

// method 2
branches.forEach(function(branch, index) {
  console.log(branch, index);
});