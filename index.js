var product1= document.getElementById("product1")
var qtyl= document.getElementById("qty1")
var pricel= document.getElementById("price1")

var product2= document.getElementById("product2")
var qty2= document.getElementById("qty2")
var price2 = document.getElementById("price2")

var product3= document.getElementById("product3")
var qty3= document.getElementById("qty3")
var price3= document.getElementById("price3")

var product4= document.getElementById("product4")
var qty4= document.getElementById("qty4")
var price4= document.getElementById("price4")

var product5= document.getElementById("product5")
var qty5= document.getElementById("qty5")
var price5= document.getElementById("price5")

var product6= document.getElementById("product6")
var qty6= document.getElementById("qty6")
var price6= document.getElementById("price6")

var carts = document.getElementById("carts")
var total = document.getElementById("total") 
var cash = document.getElementById("cash")
var change document.getElementById("change")


function addOrder() {
    carts.textContent = "";
    let orderTotal = 0;

    if (parseFloat(qty1.value) > 0) {
        var order1 = qty1.value + " pc/s x " + price1.textContent + " Php " + product1.textContent + " ------- Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent));
        carts.textContent += order1 + "\n";
        orderTotal += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        var order2 = qty2.value + " pc/s x " + price2.textContent + " Php " + product2.textContent + " ------- Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent));
        carts.textContent += order2 + "\n";
        orderTotal += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }
    if (parseFloat(qty3.value) > 0) {
        var order3 = qty3.value + " pc/s x " + price3.textContent + " Php " + product3.textContent + " ------- Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2);
        carts.textContent += order3 + "\n";
        orderTotal += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }
    if (parseFloat(qty4.value) > 0) {
        var order4 = qty4.value + " pc/s x " + price4.textContent + " Php " + product4.textContent + " ------- Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent));
        carts.textContent += order4 + "\n";
        orderTotal += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }
    if (parseFloat(qty5.value) > 0) {
        var order5 = qty5.value + " pc/s x " + price5.textContent + " Php " + product5.textContent + " ------- Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent));
        carts.textContent += order5 + "\n";
        orderTotal += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }
    if (parseFloat(qty6.value) > 0) {
        var order6 = qty6.value + " pc/s x " + price6.textContent + " Php " + product6.textContent + " ------- Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent));
        carts.textContent += order6 + "\n";
        orderTotal += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }
   total.value = orderTotal.toFixed(2);

    if (parseFloat(cash.value) >= orderTotal) {
        change.value = (parseFloat(cash.value) - orderTotal);
    } else {
        change.value = "0.00";
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);  
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
carts.addEventListener("keyup", addOrder);
total.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", addOrder);
change.addEventListener("keyup", addOrder);
