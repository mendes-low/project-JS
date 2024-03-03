import { getStock } from '../data.js';
const stockData = await getStock();

function changeStockCards(data) {
    const url = window.location.href;
    const id = url.split('id=')[1];

    const product = data.find(rest => rest.id == id);

    const stockImg = document.querySelector('.card_img img');
    stockImg.src = product.img;

    const stockName = document.querySelector('.card-name h2');
    stockName.textContent = product.name;

    const stockCurrentPrice = document.querySelector('#current-price');
    stockCurrentPrice.textContent = product.price + ' ₸';

    const stockOldPrice = document.querySelector('.old-price');
    stockOldPrice.textContent = product.oldPrice + ' ₸';

    return product;
}
changeStockCards(stockData);

// async function changeStockCards() {
//     try {
//         const stockData = await getStock();

//         const url = window.location.href;
//         const id = url.split('id=')[1];
//         console.log(id);

//         const product = stockData.find(rest => rest.id == id);

//         const stockImg = document.querySelector('.card_img img');
//         stockImg.src = product.img;

//         const stockName = document.querySelector('.card_name h2');
//         stockName.textContent = product.name;

//         const stockCurrentPrice = document.querySelector('.current_price');
//         stockCurrentPrice.textContent = product.price + ' ₸';

//         const stockOldPrice = document.querySelector('.old_price');
//         stockOldPrice.textContent = product.oldPrice + ' ₸';

//         return product;
//     } catch { 
//         console.error('An error occurred:')
//     };
// }

// changeStockCards();

