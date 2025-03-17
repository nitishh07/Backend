// const sum = (a, b) =>a + b;
// const mul = (a, b) =>a * b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum : sum,
//     mul : mul,
//     g : g,
//     PI : PI,
// };

// module.exports = 123;   //iska mtlb module.exprts ye value doosre files ko de rhi hai
// module.exports = obj; //module.export se export kr diya

//OR WE CAN ALSO WRITE IT AS

// module.exports.sum = (a, b) =>a + b;
// module.exports.mul = (a, b) =>a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;



//USING IMPORT FUNCTION INSTEAD OF REQUIRE
//module.exports ke jagah export use hoga import ke liey

export const sum = (a, b) =>a + b;
export const mul = (a, b) =>a * b;
export const g = 9.8;
export const PI = 3.14;