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
      if (cart.length === 1){
        c.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
      } else if (cart.length > 1 && i === (cart.length-1)){
        c.push(`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
      } else if (cart.length === 2 && i < (cart.length-1)){
        c.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} `)
      } else if (cart.length > 1 && i < (cart.length-1)) {
        c.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
      }
    }
// write your code here
    }
    console.log(c.join(''))
  }

function total() {
  var sum = 0
  for (let i=0; i<cart.length; i++){
    sum += cart[i][Object.keys(cart[i])]
  }
  return sum
  // write your code here
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      delete cart[i].item
    } else {
      
    }
  }
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
