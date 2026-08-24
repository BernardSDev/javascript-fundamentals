const firstName = "John"
let age = 34
let height = 7
let isMarried = false

let marriedMessage = isMarried ? "is married. " : "is not married."

const message = `${firstName} is ${age} years old. He is ${height} feet tall and ${isMarried ? "is married. " : "is not married."}`
console.log(message)

function drawStraightLine(x) {
    const result= 2*x + 1
    return result
}

// const p3 = drawStraightLine(0)
// console.log(p3)

// console.log(drawStraightLine(3))

function multiply(x,y) {
    const result = x*y
    return result
}

// console.log(multiply(90,100))

function isQualifyToVote(name, age) {
    let message = "";
    if(age >= 18) {
        message = `${name} who is ${age} years old is eligible to vote`
    } else {
        message = `${name} who is ${age} years old is not eligible to vote`
    }

    return message
}

// console.log(isQualifyToVote("Tatiana", 1))

function welcomeUser(user) {
    console.log("Welcome back, " + user)
}

// welcomeUser("Kojo")
// welcomeUser("ama")
// welcomeUser("Akua")

function shoppingNotice(name, item) {
    console.log("Hi " + name + ",you have "  +  item + " items in your cart")
}

// shoppingNotice("Kojo", 3)

function fullName(firstName, lastName) {
    console.log("Your full name is  " + firstName + lastName);
}

fullName(" Kojo ", " Barnieh ")