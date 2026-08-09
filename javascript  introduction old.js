const firstName = "John"
const lastName = "Adjetey"
let age = 34
let height = 7
let isMarried = false
const hobbies = ["Gaming", "Eating", "Reading", "Movies"]

const string1 = "John is 34 years old. He is 7 feet tall and is not married. "

let marriedMessage = ""

if(isMarried) {
    marriedMessage = "is married.~"
} else {
    marriedMessage = "is not married."
}

const message1 = firstName + " is " + age + " years old. He is " + height + " feet tall and " + marriedMessage

const message = `${firstName} is ${age} years old. He is ${height} feet tall and ${marriedMessage}`


console.log(message)