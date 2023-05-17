// More on objects

// Object.assign() Method => Copies the values of all enumerable own properties from one or more source objects to a target object.

// const target = {
//     a:1,
//     b:2
// }
// const source = {
//     a:4,
//     d:5
// }

// const output_obj = Object.assign(target,source) 
// console.log(output_obj);


// 2) The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// const obj1 = {
//     a: 'somestring',
//     b: 42
//   };
// const array_output = Object.entries(obj1)  // The Output will in array form
// console.log(array_output);


// 3) Object.freeze()
// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable 

// const obj2 = Object.create({})
// obj2.marks = 87;

// console.log(obj2.marks);

// Object.freeze(obj2)

// obj2.marks = 97;

// console.log(obj2.marks);
