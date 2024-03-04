export { getStock, getPopularCategories, getPopularProducts, getPopularBrands }

async function getStock() {
    const stockUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards';
    const response = await fetch(stockUrl);
    const data = await response.json();
    const stocks = data[0].stocks;
    return stocks;
}

async function getPopularCategories() {
    const popularCategoriesUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards';
    const response = await fetch(popularCategoriesUrl);
    const data = await response.json();
    const categories = data[0].popularCategories;
    return categories;
}

async function getPopularProducts() {
    const popularProductsUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards';
    const response = await fetch(popularProductsUrl);
    const data = await response.json();
    const products = data[0].popularProducts;
    return products;
}

async function getPopularBrands() {
    const popularBrandsUrl = 'https://65dc0e4a3ea883a152926eea.mockapi.io/api/stocksCards'
    const response = await fetch(popularBrandsUrl);
    const data = await response.json();
    const brands = data[0].popularBrands;
    return brands;
}