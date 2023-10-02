// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({'username':'Rishi', 'password': 123})
//     },1000)

// })

// promise1.then(function(user){
//     console.log(user.username);
// })

// const promise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({'username':'Rishi', 'password': 123})
//         }
//         else{
//             reject("ERROR 404 ")
//         }
//     },1000)

// })

// promise2
// .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })

// const promice3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({'username':'Rishi', 'password': 123})
//         }
//         else{
//             reject("JS Went Wrong ")
//         }
//     },1000)
// })

// async function consumepromice3(){
//     try {
//         const response = await promice3
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumepromice3()
