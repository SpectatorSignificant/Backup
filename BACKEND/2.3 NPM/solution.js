// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");

const name = superheroes.random();
console.log(`I am ${name}!`);
