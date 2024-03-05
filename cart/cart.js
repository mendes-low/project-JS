function createCartItem(productData) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const cartItemImage = document.createElement('div');
    cartItemImage.classList.add('cart-item_image');
    const image = document.createElement('img');
    image.src = productData.img;
    image.alt = productData.name;
    cartItemImage.appendChild(image);

    const cartItemBox = document.createElement('div');
    cartItemBox.classList.add('cart-item_box');

    const cartItemName = document.createElement('div');
    cartItemName.classList.add('cart-item_name');
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = productData.name;
    cartItemName.appendChild(nameHeading);

    const cartItemPrice = document.createElement('div');
    cartItemPrice.classList.add('cart-item_price');
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = (productData.price * productData.quantity) + ' ₸';
    cartItemPrice.appendChild(priceParagraph);

    // BUTTONS
    const cartItemButtons = document.createElement('div');
    cartItemButtons.classList.add('cart-item_buttons');

    const cartButtonQuantity = document.createElement('div');
    cartButtonQuantity.classList.add('cart-button_quantity');

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => {
        increaseQuantity(productData)
    });

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.innerHTML = productData.quantity > 1 ? '-' : '<ion-icon name="trash-outline"></ion-icon>';
    minusButton.addEventListener('click', () => {
        decreaseQuantity(productData)
    });

    const quantityParagraph = document.createElement('p');
    quantityParagraph.textContent = productData.quantity;

    cartButtonQuantity.appendChild(minusButton);
    cartButtonQuantity.appendChild(quantityParagraph);
    cartButtonQuantity.appendChild(plusButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('cart-button_remove');
    removeButton.textContent = 'Удалить товар';
    removeButton.addEventListener('click', () => {
        removeProduct(productData)
    });

    cartItemBox.appendChild(cartItemName);
    cartItemBox.appendChild(cartItemPrice);
    cartItemBox.appendChild(cartItemButtons);
    cartItemButtons.appendChild(cartButtonQuantity);
    cartItemButtons.appendChild(removeButton);
    cartItem.appendChild(cartItemImage);
    cartItem.appendChild(cartItemBox);

    return cartItem;
}



function increaseQuantity(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.map((p) =>
        p.id == product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}
function decreaseQuantity(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (product.quantity > 1) {
        cart = cart.map((p) =>
            p.id == product.id ? { ...p, quantity: p.quantity - 1 } : p
        );
    } else {
        cart = cart.filter((p) => p.id !== product.id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}


// Remove Product
function removeProduct(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((p) => p.id != product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}


// Get sum
function getTotalPrice() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length == 0) {
        return 0 + ' ₸';
    } else {
        const productsPrice = cart.reduce((acc, curr) => { return acc += curr.price * curr.quantity; }, 0);
        return productsPrice + ' ₸';
    }
}
const sumProducts = document.querySelector('#sum-products');
sumProducts.textContent = getTotalPrice();

// Get size
function getSize() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        return 0 + ' шт';
    } else {
        const productsSize = cart.reduce((acc, curr) => { return acc += curr.quantity; }, 0);
        return productsSize + ' шт';
    }
}
const quantityProducts = document.querySelector('#quantity-products');
quantityProducts.textContent = getSize();

// Add to cart-container
const cartStocks = JSON.parse(localStorage.getItem("cartStock")) || [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cartStocks.forEach(item => document.querySelector('.cart-items').appendChild(createCartItem(item)));
cart.forEach(item => document.querySelector('.cart-items').appendChild(createCartItem(item)));


