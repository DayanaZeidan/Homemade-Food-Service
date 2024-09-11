const sth = document.getElementsByClassName("action");
const all = document.getElementsByClassName("all-div");
for (let i = 0; i < sth.length; i++) {
    sth[i].addEventListener("click", () => {
        if (all[i].style.display == "block") {
            all[i].style.display = "none";
        }
        else {
            all[i].style.display = "block";
        }
    })
}

var products = [{ name: "Chilli Cheese Nachos", price: 5, quantity: 0, image: ".images/chili cheese.jpg" },
{ name: "Mozarella Sticks", price: 6, quantity: 0, image: ".images/mozarella stickss.jfif" }, 
{ name: "Grilled Baby Potato", price: 3, quantity: 0, image: ".images/grilled baby potato.jfif" },
{ name: "Onion Rings", price: 4, quantity: 0, image: ".images/fried-rings-with-sweet-chili.jpg" }, 
{ name: "French Fries", price: 3.50, quantity: 0, image: ".images/5038.jpg" }, 
{ name: "Wedges", price: 4.50, quantity: 0, image: ".images/fried-potatoes.jpg" }, 
{ name: "Tuna pasta salad", price: 5, quantity: 0, image: ".images/tuna pasta salad.jpeg" }, 
{ name: "Tomato sauce pasta", price: 6, quantity: 0, image: ".images/tomato pasta.jpg" },
{ name: "Beef Lassanya", price: 7, quantity: 0, image: ".images/lassanya.jpg" },
{ name: "Chrimps pasta", price: 6, quantity: 0, image: ".images/pasta-spaghetti-with-shrimps.jpg" },
{ name: "Penne pasta", price: 5.50, quantity: 0, image: ".images/penne pasta.jpg" },
{ name: "Penne pesto pasta", price: 7, quantity: 0, image: ".images/penne-pasta-with-pesto-sauce.jpg" },
{ name: "Ceasar salad", price: 10, quantity: 0, image: ".images/Ceasar salad.jpg" },
{ name: "Greek salad", price: 7, quantity: 0, image: ".images/dietary-salad.jpg" },
{ name: "Turkey egg salad", price: 9, quantity: 0, image: ".images/fresh-salad.jpg" },
{ name: "Tabouleh", price: 5, quantity: 0, image: ".images/tabouleh.jpg" },
{ name: "Rocca Salad", price: 5.50, quantity: 0, image: ".images/rocca-salad-5.jpg" },
{ name: "Beet salad", price: 9, quantity: 0, image: ".images/beetsalad.jpg" }]

const cartitems = [];
const cartitemsprice = [];
const cartitemsimage = [];
var price = 0;
const addcart = document.getElementsByClassName("addme");
for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        cartitems.push(products[i].name);
        cartitemsprice.push(products[i].price);
        cartitemsimage.push(products[i].image);
        console.log(cartitems);
        price = price + products[i].price;
        products[i].quantity = products[i].quantity + 1;
        console.log(price);
        console.log(products[i].quantity);
    })
}

var par = document.getElementById("myproducts");
const f = () => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {
            par.textContent = par.textContent + products[i].image + products[i].name + products[i].price + products[i].quantity;
            console.log("hello")
        }
    }
}

const hidemenu = () => {
    const conn = document.getElementById("con");
    const myitems = document.querySelector(".itemscart");
    conn.style.display = "none";
    myitems.style.display = "block";
    myitems.innerHTML = myitems.innerHTML + "<ul>"
    for (let i = 0; i < cartitems.length; i++) {
        myitems.innerHTML = myitems.innerHTML + "<li>" + '<img src="' + cartitemsimage[i] +'">' + cartitems[i] + " " + cartitemsprice[i] + "$</li>" 
    }
    myitems.innerHTML = myitems.innerHTML + "</ul>" 
}



const searchbar = document.getElementsByClassName('search');







