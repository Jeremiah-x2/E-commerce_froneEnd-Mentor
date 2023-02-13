const menuIcon = document.getElementById('menuBar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('count')
const cartContent = document.getElementById('cart-content');
const cartIcon = document.getElementById('cartIcon');
const num = document.getElementById('num');
const cart = document.getElementById('cart');
let amount = Number(count.innerText)


menuIcon.addEventListener('click', function() {
    console.log('running...')
    nav.classList.add('show-menu')
})
close.addEventListener('click', () => {
    nav.classList.remove('show-menu')
})

plus.addEventListener('click', () => {
    amount += 1;
    count.innerText = amount;
    console.log('Increase running...')
    update()
})

minus.addEventListener('click', () => {
    if (amount < 1) {
        return amount
    }
    amount -= 1
    count.innerText = amount
    update()
})

cartIcon.addEventListener('click', showCart)


// CART CONTENTS

const emptyCart = () => {
    num.style.display = 'none'
    num.innerText = '';
    cartContent.innerHTML = `
    <p>Your cart is empty</p>
    `
}

emptyCart()
const filledCart = () => {
    num.style.display = 'block';
    num.innerText = amount;
    if(amount > 0) {
        return cartContent.innerHTML = `
        <div>
            <div class="check">
                <img src='./images/image-product-1.jpg' width=60>
                <div class="cart-image-details">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 * ${amount} <span> Total: $${125 * amount}</span></p>
                </div>
            </div>
            <button id="checkout">Checkout<?button>
        </div>
        `
    }
}

// SHOW CART
function showCart() {
    cart.classList.toggle('showCart')
}
// SHOW CART

function update() {
    if(count.innerText == 0) {
        return emptyCart()
    } else{
        return filledCart()
    }
}

// IMAGE CAROUSEL FUNCTIONS

const imageArray = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];

const image = document.getElementById('main-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const thumbImg = document.querySelectorAll('.thumb-img');
let i = 0;

console.log(thumbImg)

// function for going through the image carousel(NEXT FUNCTION)
function carouselNext() {
    i++;
    if (i > imageArray.length - 1){
        i = 0
    }
    thumbImg.forEach(x => x.classList.remove('active'))
    if (thumbImg[i]) {
        thumbImg[i].classList.add('active')
    }
    // thumbImg[i-1].classList.remove('active')
    image.src = imageArray[i];   
}

// function for going through the image carousel(PREV FUNCTION)
function carouselPrev() {
    i--;
    if (i < 0) {
        i = imageArray.length -1;
    }
    thumbImg.forEach(x => x.classList.remove('active'))
    if (thumbImg[i]) {
        thumbImg[i].classList.add('active')
    }
    image.src = imageArray[i]
}

// add active class function for thumbnails
function addActive() {
    thumbImg.forEach(x => {
        
    })
}

prev.onclick = carouselPrev
next.onclick = carouselNext

// IMAGE CAROUSEL FUNCTIONS





