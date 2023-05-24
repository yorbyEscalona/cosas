const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const closeIcon = document.querySelector(".product-detail-close");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector("#productDetail");

menuEmail.addEventListener("click", aparicionMenu)
menuBurguer.addEventListener("click", aparicionMenuBurguer)
menuCarritoIcon.addEventListener("click", aparicionCarrito)
closeIcon.addEventListener("click", closeProductDetail)

function aparicionMenu() {
    desktopMenu.classList.toggle("inactive")
    shoppingCartContainer.classList.add("inactive")
    productDetailAside.classList.add("inactive")
}

function aparicionMenuBurguer() {
    menuMobile.classList.toggle("inactive")
    shoppingCartContainer.classList.add("inactive")
    productDetailAside.classList.add("inactive")
}

function aparicionCarrito() {
    shoppingCartContainer.classList.toggle("inactive")
    menuMobile.classList.add("inactive")
    productDetailAside.classList.add("inactive")
}

function openProductDetail () {
    productDetailAside.classList.remove("inactive")
    desktopMenu.classList.add("inactive")
    shoppingCartContainer.classList.add("inactive")
}

function closeProductDetail () {
    productDetailAside.classList.add("inactive")
}



const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "pantalla",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "computadora",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "cama",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//ejemplo abajo
const casa = [];
casa.push({
    name: "closet",
    price: 1220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
casa.push({
    name: "cama",
    price: 34410,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
casa.push({
    name: "almohadas",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
casa.push({
    name: "ventana",
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
//termina el ejemplo de arriba


function optimizacion (array){
    for (product of array) {

        const productCard = document.createElement("div")
            productCard.classList.add("product-card")
        
        const productImg = document.createElement("img")
            productImg.setAttribute("src", product.image)
            productImg.addEventListener("click", openProductDetail)


        const productInfo = document.createElement("div")
            productInfo.classList.add("product-info")
        
        
            const productDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
            productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p")
            productName.innerText = product.name;
        
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
        
            const productFigure = document.createElement("figure")
        
        const productImgcart = document.createElement("img")
            productImgcart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        
        productFigure.appendChild(productImgcart);
        
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);
        
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
        }

}

optimizacion(productList);