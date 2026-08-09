const firstName = "John"
let age = 34
let height = 7
let isMarried = false

let marriedMessage = isMarried ? "is married. " : "is not married."

const message = `${firstName} is ${age} years old. He is ${height} feet tall and ${isMarried ? "is married. " : "is not married."}`
console.log(message)