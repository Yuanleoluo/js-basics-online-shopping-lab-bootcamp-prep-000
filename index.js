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
  var c = []
  c.push("In your cart, you have ")
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    for (let i = 0; i < cart.length; i++){
        c.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
    }
// write your code here
    }
    console.log(c.join(' '))
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
