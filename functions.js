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

console.log(isQualifyToVote("Tatiana", 1))