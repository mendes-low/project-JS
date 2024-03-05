import { getStock, getPopularProducts } from '../data.js';
// const stockData = await getStock();
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

    return product;
}
changePopularProductCards(popularProductsData);

