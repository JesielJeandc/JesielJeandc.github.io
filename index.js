var product1= document.getElementById("product1")
var qtyl= document.getElementById("qtyl")
var pricel= document.getElementById("pricel")

var product2= document.getElementById("product2")
var qty2= document.getElementById("qty2")
var price2 = document.getElementById("price2")

var carts = document.getElementById("carts")
var total = document.getElementById("total") 
var cash = document.getElementById("cash")
var change document.getElementById("change")

function addOrder() {
   carts.textContent=""
if (parseFloat(qtyl.value) > 0) {
var order= qtyl.value.toString() + 'pc/s x' + price1.textContent +'------'+ product1.textContent + '------ Php'+ (parseFloat(qty1.value) *parseFloat(price1.textContent)) + '\n'
//carts.textContent += carts.value.toString() + "\n";
carts.textContent += order
}
  if (parseFloat(qty2.value) > 0) {
var order=qty2.value.toString() + 'pc/s x' + price1.textContent +'------'+ product1.textContent + '------ Php'+ (parseFloat(qty1.value) *parseFloat(price1.textContent)) + '\n'
//carts.textContent += carts.value.toString() + "\n";
carts.textContent += order

}
}

qty1.addEventListener("keyup", addOrder); 
qty2.addEventListener("keyup", addOrder);
