const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   push is not a write method to merge to array because it will not merge it will add the whole array as an element of the marvel_
//                               heros array print and check. 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  concat is the write method to merge ore than one array it will merge and return an array.    
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]  spread operator is also the way to merge two arrays.

// console.log(all_new_heros);



// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)  //Flat method return new array with all elements of sub array.
// console.log(real_another_array);
