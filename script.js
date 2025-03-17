// let n = 5;

// for(let i=0; i<n ; i++){
//     console.log("hello " , i);
// }

// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("hello to : ", args[i]);

// }


// const math = require("./math");  //require keyword is used so that we can access other files
//math.js se 123 value ko require kr liya

// console.log(math);
// console.log(math.sum(2,3));

// console.log(math.PI);


//IMPORT
import{sum , PI} from "./math.js";  //"type" = "module" ye line add krna pdega import krne ke liye ek package.json banake
import { generate} from "random-words";
// console.log(sum(1,2));
console.log(generate());