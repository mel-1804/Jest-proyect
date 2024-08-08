// const {sum} = require('./app.js');

// // console.log(sum(2,2))

// test('adds 14 + 9 to equal 23', ()=>{
//     let total = sum(14,9);
//     expect(total).toBe(23);
// });

// test("One euro should be 1.07 dollars", function(){
//     const{fromEuroToDollar} = require('./app.js');
//     const dollars = fromEuroToDollar(3.5);
//     const expected = 3.5 * 1.07;
//     expect(fromEuroToDollar(3.5)).toBe(3.745);
// })

// test("One dollar should be 146.3 yenes", function(){
//     const{fromDollarToYen} = require('./app.js');
//     const yenes = fromDollarToYen(3.5);
//     const expected = (3.5 / 1.07 * 156.5).toFixed(2);
//     expect(fromDollarToYen(3.5)).toBe("511.92");
// })

test("One yen should be 0.006 libras", function(){
    const{fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = (3.5 / 0.87 * 156.5).toFixed(3);
    expect(fromYenToPound(3.5)).toBe("0.019");
})