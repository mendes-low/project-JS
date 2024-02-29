// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const slidesContainer = document.querySelector(".slides");
// let slides = document.querySelectorAll(".slide");
// const slideWidth = slides[0].clientWidth;
// let currentIndex = 1; // Начальный индекс теперь 1

// // Копируем первый и последний слайды и добавляем их в конец и начало списка соответственно
// const firstSlideClone = slides[0].cloneNode(true);
// const lastSlideClone = slides[slides.length - 1].cloneNode(true);
// slidesContainer.appendChild(firstSlideClone);
// slidesContainer.insertBefore(lastSlideClone, slides[0]);

// slides = document.querySelectorAll(".slide");

// // Функция для перемещения слайдов влево
// function slideLeft() {
//     currentIndex--;
//     slidesContainer.style.transition = "transform 0.5s ease";
//     slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

//     if (currentIndex === 0) {
//         setTimeout(() => {
//             slidesContainer.style.transition = "none";
//             currentIndex = slides.length - 2; // Переносим к предпоследнему слайду
//             slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//         }, 500);
//     }
// }

// // Функция для перемещения слайдов вправо
// function slideRight() {
//     currentIndex++;
//     slidesContainer.style.transition = "transform 0.5s ease";
//     slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

//     if (currentIndex === slides.length - 1) {
//         setTimeout(() => {
//             slidesContainer.style.transition = "none";
//             currentIndex = 1; // Переносим к второму слайду
//             slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//         }, 500);
//     }
// }

// // Обработчики событий для кнопок "Previous" и "Next"
// prevBtn.addEventListener("click", slideLeft);
// nextBtn.addEventListener("click", slideRight);


function createStockCard(stock) {
    const stockCard = document.createElement("div");
    stockCard.classList.add("stock-card");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box");

    const img = document.createElement("img");
    img.src = stock.img;

    const textBox = document.createElement("div");
    textBox.classList.add("text-box");

    const textTop = document.createElement("div");
    textTop.classList.add("text-box_top");

    const textDescription = document.createElement("div");
    textDescription.classList.add("text-box_description");
    const descriptionText = document.createElement("p");
    descriptionText.textContent = stock.name;
    textDescription.appendChild(descriptionText);

    const textPrice = document.createElement("div");
    textPrice.classList.add("text-box_price");
    const priceText = document.createElement("p");
    priceText.textContent = stock.price + ' ₸';
    const oldPriceText = document.createElement("p");
    oldPriceText.id = "old-price";
    oldPriceText.textContent = stock.oldPrice + ' ₸';

    textPrice.appendChild(priceText);
    textPrice.appendChild(oldPriceText);

    const button = document.createElement("button");
    button.textContent = "В корзину";

    imgBox.appendChild(img);

    textTop.appendChild(textDescription);
    textTop.appendChild(textPrice);

    textBox.appendChild(textTop);
    textBox.appendChild(button);

    stockCard.appendChild(imgBox);
    stockCard.appendChild(textBox);

    return stockCard;
}
function createPopularCategoryCard(data) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('popular-categories_card');

    const textDiv = document.createElement('div');
    textDiv.classList.add('popular-categories_card_text');
    const paragraph = document.createElement('p');
    paragraph.textContent = data.name;
    textDiv.appendChild(paragraph);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('popular-categories_card_img');
    const img = document.createElement('img');
    img.src = data.img;
    imgDiv.appendChild(img);

    cardDiv.appendChild(textDiv);
    cardDiv.appendChild(imgDiv);

    return cardDiv;
}
function createProductCard(productData) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('popular-products_card');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('popular-products_img');

    const img = document.createElement('img');
    img.src = productData.img;
    imgContainer.appendChild(img);

    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('popular-products_bottom');

    const textBox = document.createElement('div');
    textBox.classList.add('popular-products_text-box');

    const title = document.createElement('div');
    title.classList.add('popular-products_text-box_title');
    const titleText = document.createElement('p');
    titleText.textContent = productData.name;
    title.appendChild(titleText);

    const price = document.createElement('div');
    price.classList.add('popular-products_text-box_price');
    const priceText = document.createElement('p');
    priceText.textContent = productData.price + ' ₸';
    price.appendChild(priceText);

    const button = document.createElement('button');
    button.textContent = 'В корзину';

    textBox.appendChild(title);
    textBox.appendChild(price);

    bottomContainer.appendChild(textBox);
    bottomContainer.appendChild(button);

    cardContainer.appendChild(imgContainer);
    cardContainer.appendChild(bottomContainer);

    return cardContainer;
}
function createPopularBrandCard(brandData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('popular-brands_card');

    const img = document.createElement('img');
    img.setAttribute('src', brandData.image);

    cardDiv.appendChild(img);

    return cardDiv;
}

// Stocks
async function getStock() {
    const stockUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards';
    const response = await fetch(stockUrl);
    const data = await response.json();
    const stocks = data[0].stocks;
    return stocks;
}
async function addToContainerStock() {
    try {
        const stockContainer = document.querySelector('.stocks-cards');
        const data = await getStock();
        data.forEach(item => stockContainer.appendChild(createStockCard(item)));
    }
    catch {
        document.write('Error')
    }
}
addToContainerStock();

// Popularcategories
async function getPopularCategories() {
    const popularCategoriesUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards';
    const response = await fetch(popularCategoriesUrl);
    const data = await response.json();
    const categories = data[0].popularCategories;
    return categories;
}
async function addToContainerPopularCategeries() {
    try {
        const popularCategoriesContainer = document.querySelector('.popular-categories_cards');
        const data = await getPopularCategories();
        data.forEach(item => popularCategoriesContainer.appendChild(createPopularCategoryCard(item)));
    }
    catch {
        document.write('Error')
    }
}
addToContainerPopularCategeries();

// PopularProducts
async function getPopularProducts() {
    const popularProductsUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards'
    const response = await fetch(popularProductsUrl);
    const data = await response.json();
    const products = data[0].popularProducts;
    return products;
}
async function addToContainerPopularProduct() {
    try {
        const popularProductsContainer = document.querySelector('.popular-products_cards')
        const data = await getPopularProducts();
        data.forEach(item => popularProductsContainer.appendChild(createProductCard(item)));
    }
    catch {
        document.write('Error')
    }
}
addToContainerPopularProduct();

// popularBrands
async function getPopularBrands() {
    const popularBrandsUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards'
    const response = await fetch(popularBrandsUrl);
    const data = await response.json();
    const brands = data[0].popularBrands;
    return brands;
}
async function addToContainerPopularBrands() {
    try {
        const popularBrandsContainer = document.querySelector('.popular-brands_cards');
        const data = await getPopularBrands();
        data.forEach(item => popularBrandsContainer.appendChild(createPopularBrandCard(item)));
    }
    catch {
        document.write('Error');
    }
}
addToContainerPopularBrands();




