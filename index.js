var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor((Math.random()*100)+1)})
 console.log(`${item} has been added to your cart.`)
 return cart// write your code here
}


function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
        console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  }

// write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
