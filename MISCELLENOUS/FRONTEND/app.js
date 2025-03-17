//PROTOTYPE
// const arr = [1,2,3];

// arr.sayHello = () =>{
//     console.log("Hello! i am arr");
// };

//ACCESSING COPY OF ARRAY PROTOTYPE
//arr.__proto__
//arr.__proto__.push = (n) => {console.log("pushing number :", n);}

//--------------------------------------------------------------------------------------------------------------------------------------------

// //FACTORY FUNCTION
// function PersonMaker(name , age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("adam" , 25); //copy
// let p2 = PersonMaker("eve", 25); //copy

// p1.talk == p2.talk; //it will give false value 

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//CONSTRUCTORS - dosen't return anything and start with capital letter
// function Person(name , age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
// };
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 22);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//CLASSES

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 22);