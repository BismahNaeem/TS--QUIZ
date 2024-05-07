#! /usr/bin/env node
//SHABANG
import inquirer from 'inquirer';
import chalk from "chalk";
console.log(chalk.bgRed("\n\tWELCOME TO TYPESCRIPT QUIZ ANSWERS THE GIVEN QUESTION AND VIEW YOUR SCORE"));
async function quiz() {
    const questions = await inquirer.prompt([
        {
            type: 'list',
            name: 'question1',
            message: '\nWhat is the main purpose of TypeScript?',
            choices: [
                'To add static typing to JavaScript',
                'To replace JavaScript with a new language',
                'To add dynamic typing to JavaScript',
                'To create a new framework for web development',
            ],
        },
        {
            type: "list",
            name: "question2",
            message: "What is the file extension for TypeScript files?",
            choices: [
                "ts",
                "js",
                "txt",
                "html",
            ]
        },
        {
            type: 'list',
            name: 'question3',
            message: 'What is the purpose of the `any` type in TypeScript?',
            choices: [
                'To represent a type that can be any value',
                'To represent a type that is unknown',
                'To represent a type that is null or undefined',
                'To represent a type that is a number or string',
            ],
        },
        {
            type: 'list',
            name: 'question4',
            message: 'What is the difference between the `null` and `undefined` types in TypeScript?',
            choices: [
                'null represents an empty value, while undefined represents an uninitialized variable',
                'null represents an uninitialized variable, while undefined represents an empty value',
                'null and undefined are the same type',
                'null and undefined are not types in TypeScript',
            ],
        },
        {
            type: 'list',
            name: 'question5',
            message: 'What is the purpose of the `interface` keyword in TypeScript?',
            choices: [
                'To define a new class',
                'To define a new type',
                'To define a new function',
                'To define a new variable',
            ],
        },
    ]);
    let score = 0;
    if (questions.question1 === 'To add static typing to JavaScript') {
        score++;
        console.log(chalk.blue("\nQ1: CORRECT"));
    }
    else {
        console.log(chalk.blue("\nQ1: INCORRECT"));
    }
    if (questions.question2 === 'ts') {
        score++;
        console.log(chalk.blue("\nQ2: CORRECT"));
    }
    else {
        console.log(chalk.blue("\nQ2: INCORRECT"));
    }
    if (questions.question3 === 'To represent a type that is unknown') {
        score++;
        console.log(chalk.blue("\nQ3: CORRECT"));
    }
    else {
        console.log(chalk.blue("\nQ3: INCORRECT"));
    }
    if (questions.question4 === 'null represents an empty value, while undefined represents an uninitialized variable') {
        score++;
        console.log(chalk.blue("\nQ4: CORRECT"));
    }
    else {
        console.log(chalk.blue("\nQ4: INCORRECT"));
    }
    if (questions.question5 === 'To define a new type') {
        score++;
        console.log(chalk.blue("\nQ5: CORRECT"));
    }
    else {
        console.log(chalk.blue("\nQ5: INCORRECT"));
    }
    console.log(chalk.greenBright.bold(`\t \nYOUR SCORE IS : ${score} out of 5`));
}
quiz();
