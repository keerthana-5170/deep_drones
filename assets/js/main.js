// let carts = document.querySelectorAll('.add-cart');
// let cartItems = localStorage.getItem('productsInCart');
// let products = [
//     {
//         name:'drones7',
//         price:25.75,
//         incart:0
//     },
//     {
//         name:'drones6',
//         price:30.25,
//         incart:0
//     },
//     {
//         name:'drones5',
//         price:20.45,
//         incart:0
//     },
//     {
//         name:'drones4',
//         price:15.25,
//         incart:0
//     },
//     {
//         name:'drones3',
//         price:12.50,
//         incart:0
//     },
//     {
//         name:'drones2',
//         price:22.50,
//         incart:0
//     }

// ]




// for(let i=0;i<carts.length;i++){
//     carts[i].addEventListener('click',() => {
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }

// function cartNumbers(product){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers)
//     {
//         localStorage.setItem('cartNumbers',productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     }
    
//     else{
//         localStorage.setItem('cartNumbers',1);
//         document.querySelector('.cart span').textContent = 1;
//     }
//     setItems(product);
// }
// function setItems(product){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){
//         if(cartItems[product.name] == undefined){
//             cartItems = {
//                 ...cartItems,
//                 [product.name]:product
//             }
//         }
//         cartItems[product.name].incart += 1;
//     }
//     else{
//         product.incart = 1;
//         cartItems={
//             [product.name]:product
//         }
//     }
    
   
//     localStorage.setItem("productsInCart",JSON.stringify( cartItems))
// }

// function totalCost(product){
//     //console.log("product price",product.price)
//         let cartCost = localStorage.getItem('totalCost');
       

//     if(cartCost != null){
//         cartCost = parseFloat(cartCost);

//         localStorage.setItem('totalCost',cartCost + product.price);
//     }
//     else{
//         localStorage.setItem("totalCost",product.price)

//     }
// }
// function displayCart(){
//     let cartItems = localStorage.getItem('productsInCart');
//     let cartCost = localStorage.getItem('totalCost');
//     cartItems = JSON.parse(cartItems);
//     let productContainer = document.querySelector(".products");

//     //console.log(cartItems);

//     if(cartItems && productContainer){
//        productContainer.innerHTML = '';
//        Object.values(cartItems).map(item =>{
//         productContainer.innerHTML += `
//         <div class="products-container">
//         <div class="product-title">
    
//         <button onclick='deleteItemFromCart(${item.name})'>remove</button> 
//            <ion-icon name="close-circle-outline"></ion-icon>
//             <img src="assets/images/${item.name}.jpg">
//             <span class="span">${item.name}</span>
//         </div>    
//         <div class="product-price">Rs${item.price}</div>
//         <div class="quantity">
//             <ion-icon name="caret-back-outline"></ion-icon>
//            <span>${item.incart}</span>
//             <ion-icon name="caret-forward-outline"></ion-icon>
//         </div>
//         <div class="total">
//          Rs${item.incart * item.price}
//         </div>
//         `;
//        });
//        productContainer.innerHTML += `
//          <div class="basketTotalContainer">
//            <h4 class="basketTotalTitle"> 
//              Basket Total
//            </h4> 
//            <h4 class="basketTotal"> 
//                Rs${cartCost}
//             </h4> 
//          </div>
//        `
//     }
   
// }
// function deleteItemFromCart(product){
//     //let product = JSON.stringify(productName);
//     //let cartItem = JSON.parse(localStorage.getItem('productsInCart'));
//     //let newCartItems = cartItem.filter((item) => item.name != productName);
//     console.log(product.name);
//     //localStorage.setItem("productsInCart",JSON.stringify(newCartItems));
    
// }
// function addItems(product){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

    
//         cartItems[product.name].incart += 1;
//         localStorage.setItem("productsInCart",JSON.stringify( cartItems))
//     }
//     function removeItems(product){
//         let cartItems = localStorage.getItem('productsInCart');
//         cartItems = JSON.parse(cartItems);
    
        
//             cartItems[product.name].incart -= 1;
//             localStorage.setItem("productsInCart",JSON.stringify( cartItems))
//         }
          
    


//  onLoadCartNumbers();
//  displayCart();