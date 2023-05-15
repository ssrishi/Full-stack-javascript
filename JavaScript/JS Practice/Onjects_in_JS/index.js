// Every Object in a JavaScript is an instance of object.
const object = {
    fname: 'rishi',
    lname: 'sharma'
}

// for (k in object){
//     console.log(object[k]);
// }
// String, number, BigInt, boolean, null, undefined, Symbol these are not onjects


// 1st way to declare object
// const obj1 ={
//     car: 'Tata',
//     Mileage: '30Km/H',
//     greeting:{
//         msg:function() {
//             console.log('Go and Have a ride in your Wonderful Car')
//         }
//     }
// }
// obj1.notice = {
//     msg1:function() {
//         console.log("You will get 3 services free. Dont forget of service and Maintain your Car")
//     }
// }

// console.log(obj1);


// 2nd way 

// const obj2 = new Object()   //Constructor
// obj2.company = 'Tata Motors'
// obj2.car = 'Nexon EV'
// obj2.price = 'Start from 14.49 lakhs'





// 3rd Way
// const helicopter = {
//     fly: true,
//     cordinate: Math.random() + 2
// }

// Object.create() creates a new object using an exsisting object as the prototype of the newly object

// const obj3 = Object.create(helicopter) 
// We are creating object and want to access properties of helicopter object and we can get access but helicopter object data will stored as a prototype of the new object 
// console.log(obj3)
// console.log(Object.getPrototypeOf(obj3)) // now i can see object data.
