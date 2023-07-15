const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Using Unshift Method to add Meat in the begining of the element.

let add_meat = () => {
    if (shoppingCart.includes("Meat")){
        console.log("Meat is already in the list");
    }
    else
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}


// Using push Method to add sugar in the end of the element.

let add_sugar = () =>{
    if (shoppingCart.includes("Sugar")){
        console.log("Sugar is already in the list");
    }
    else
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
}

// using delete method

let remove_honey = () =>{
    let index = shoppingCart.indexOf("Honey");
    shoppingCart.splice(index,1);
    console.log(shoppingCart);
}
let modify_tea = () =>{
    let index = shoppingCart.indexOf("Tea");
    shoppingCart.splice(index,1,"Green Tea");
    console.log(shoppingCart);
}

add_meat();
add_sugar();
remove_honey();
modify_tea();