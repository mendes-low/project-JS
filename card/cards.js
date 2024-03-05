import { getPopularProducts } from '../other/data.js';
// import { addToCart, isAddedToCart } from '../main/main.js';
const popularProductsData = await getPopularProducts();

// function changeStockCards(data) {
//     const url = window.location.href;
//     const id = url.split('id=')[1];

//     const product = data.find(rest => rest.id == id);

//     const stockImg = document.querySelector('.card_img img');
//     stockImg.src = product.img;

//     const stockName = document.querySelector('.card-name h2');
//     if (!product.name.length > 35) {
//         stockName.textContent = product.name;
//     } else {
//         stockName.textContent = product.name.slice(0, 35) + '...';
//     }

//     const stockCurrentPrice = document.querySelector('#current-price');
//     stockCurrentPrice.textContent = product.price + ' ₸';

//     const stockOldPrice = document.querySelector('.old-price');
//     stockOldPrice.textContent = product.oldPrice + ' ₸';

//     return product;
// }
// changeStockCards(stockData);

function changePopularProductCards(data) {
    const url = window.location.href;
    const id = url.split('id=')[1];
    
    const product = data.find(rest => rest.id == id);

    const stockImg = document.querySelector('.card_img img');
    stockImg.src = product.img;

    const stockName = document.querySelector('.card-name h2');
    if (!product.name.length > 35) {
        stockName.textContent = product.name;
    } else {
        stockName.textContent = product.name.slice(0, 35) + '...';
    }

    const stockCurrentPrice = document.querySelector('#current-price');
    stockCurrentPrice.textContent = product.price + ' ₸';

    // const button = document.querySelector('.cart-button');
    // if (isAddedToCart(productData)) {
    //     button.textContent = 'Добавлено в корзину';
    //     button.enabled = false;
    // } else {
    //     button.textContent = "В корзину";
    //     button.addEventListener("click", () => { addToCart(productData) });
    // }

    return product;
}
changePopularProductCards(popularProductsData);

// const addToCart = addToCart();
// const isAddedToCart = isAddedToCart();

