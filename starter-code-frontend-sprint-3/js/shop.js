// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let counter = document.getElementById('count_product') 
    counter.innerHTML = total += 1 
    
    for (let i = 0; i < products.length; i++) {
        
        if ( (id) === products[i].id)  {
            cartList.push(products[i])
        }
      
        
    }
    
    
}


// Exercise 2
function cleanCart() {
    cartList.splice(0,cartList.length);
    document.getElementById("cart_list").innerHTML = " ";
    document.getElementById("total_price").innerHTML = 0;
    
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(let i of cartList[i].price) total+=i;
    console.log(total);
    
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
   for ( let i = 0; i < cartList.length; i++) {
    if(cart.includes(cartList[i])) {
        (cartList[i].quantity)++
    }
    else {
        cartList[i].quantity=1
        cart.push(cartList[i])

    }
    }
}
    
    
    


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1 && cart[i].quantity === 3) {
        cart[i].subtotalWithDiscount = 10
    }
    if (cart[i].id === 3 && cart[i].quantity >= 10) {
        cart[i].subtotalWithDiscount = 5-(2/3)
    }
}


}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    document.getElementById("cart_list").innerHTML = " ";
    let finalTotal = 0 ;
    console.log(finalTotal)
        
    applyPromotionsCart() 
    for (let i= 0; i < cart.length; i++) {
    let elCartlistId =  document.getElementById("cart_list")
    let pruebatr = document.createElement("tr");
    let prueba = document.createElement("th");
    let pruebatd01 = document.createElement("td");
    let pruebatd02 = document.createElement("td");
    let pruebatd03 = document.createElement("td");
    
   
    prueba.innerHTML = cart[i].name;
    pruebatd01.innerHTML = '$' + cart[i].price;
    pruebatd02.innerHTML = '$' + cart[i].quantity;
    
    
    if (cart[i].subtotalWithDiscount === undefined) {
        pruebatd03.innerHTML = '$' + cart[i].price;
        finalTotal += cart[i].price * cart[i].quantity;
        console.log(finalTotal)
    }
    else {pruebatd03.innerHTML = '$' + cart[i].subtotalWithDiscount * cart[i].quantity
        finalTotal += cart[i].subtotalWithDiscount * cart[i].quantity;
        console.log(finalTotal)
    }

    
    elCartlistId.appendChild(pruebatr)
    pruebatr.appendChild(prueba);
    pruebatr.appendChild(pruebatd01);
    pruebatr.appendChild(pruebatd02);
    pruebatr.appendChild(pruebatd03);
    
   
    
    
    }
    let roundedTotal = finalTotal.toFixed(2);
    document.getElementById("total_price").innerHTML = roundedTotal;
    
}



// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}