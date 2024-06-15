"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const userOK = users.filter((pinsElement) => pinsElement.pin % 2 === 0);
console.log(userOK);

const userOkName = userOK.map((user) => user.name);
console.log(userOkName);

const userOKName2 = users
  .filter((pinsElement) => pinsElement.pin % 2 === 0)
  .map((user) => user.name);
