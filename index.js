#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let user_from_currency = user_answer.from;
let user_to_currency = user_answer.to;
let from_amount = currency[user_from_currency]; //Exchange Rate
let to_amount = currency[user_to_currency]; //Exchange Rate
let amount = user_answer.amount;
let base_amount = amount / from_amount; //USD Base currency
let converted_amount = base_amount * to_amount;
console.log(converted_amount);
