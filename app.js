// // console.log("Hello world")
// const sum = (a,b) =>{
//     return a + b

// }

// // console.log(sum(7,3))
// module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = (valueInEuro) =>{
    return valueInEuro * 1.07
}

const fromDollarToYen = (valueInDollar) =>{
    return (valueInDollar / 1.07 * 156.5).toFixed(2);
}

const fromYenToPound = (valueInYen) =>{
    return (valueInYen * 0.87 / 156.5).toFixed(3);
}




module.exports = {fromYenToPound};