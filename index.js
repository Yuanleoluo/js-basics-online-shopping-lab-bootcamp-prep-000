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

    for (let i=0; i<cart.length; i++){
      if (cart.length===1) {
        console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
      } else if (cart.length===2){
        console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} 
                    and ${Object.keys(cart[i+1])} at $${cart[i+1][Object.keys(cart[i+1])]}`)
      } else if {cart.length===3){
        c.push(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},
                ${Object.keys(cart[i+1])} at $${cart[i][Object.keys(cart[i+1])]},
                and ${Object.keys(cart[i+2])} at $${cart[i][Object.keys(cart[i+2])]}`)
      }
    }

    console.log(c.join(''))
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
