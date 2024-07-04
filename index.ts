#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Daily Quiz");
console.log("Each Question is of 10 marks\n");

let marks: number = 0;

let userInput = await inquirer.prompt([
{
     type: 'list',
     name: 'question1',
     message: "1. Which is the Capital city of pakistan?",
     choices: ["Karachi", "Larkana","Islamabad", "Lahore"]
},
{
     type: 'list',
     name: 'question2',
     message: "2.How many times name Ahmed came in Quran?",
     choices: [1,2,3,10]
},
{
     type: 'list',
     name: 'question3',
     message: "3.How many surahs are there in Holy Quran?",
     choices: [120, 114, 110, 125]
},
{
     type: 'list',
     name: 'question4',
     message: "4. How many days are there in leap year?",
     choices: [365, 355,366, 370]
},
{
     type: 'list',
     name: 'question5',
     message: "5. Most populated city in pakistan?",
     choices: ["Karachi", "Larkana", "Lahore", "Rawalpindi"]
},
]);
const {question1, question2, question3, question4, question5} = userInput;
//this is called destructuring

let correctOptions = ["Islamabad", 1, 114, 366, "Karachi"];

if(question1 === "Islamabad") marks += 10;
if(question2 === 1) marks += 10;
if(question3 === 114) marks += 10;
if(question4 === 366) marks += 10;
if(question5 === "Karachi") marks += 10;
console.log(marks);

function myAnswers(){
     console.log(`\n correct Options:`, correctOptions);
if(marks == 50){
     console.log(`\nCongratulations! you got full ${marks} marks`);
}else if(marks > 0){
     console.log(`\nyou got ${marks} marks, out of 50`);
}else{
     console.log(`\n Unfortunately You got ${marks} out of 50`);
}
}
myAnswers();