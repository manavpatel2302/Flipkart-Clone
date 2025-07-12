// Product data for main page
const products = [{
        id: 1,
        name: "Samsung Galaxy F34",
        price: "₹16,499",
        originalPrice: "₹24,999",
        discount: "34% off",
        image: "/FLIPKART/in-galaxy-f34-6gb-ram-sm-e346blvdins-538292093.jpg"
    },
    {
        id: 2,
        name: "Apple iPhone 13",
        price: "₹52,999",
        originalPrice: "₹69,999",
        discount: "24% off",
        image: "/FLIPKART/iphone 13.jpg"
    },
    {
        id: 3,
        name: "OnePlus Nord CE 3",
        price: "₹24,999",
        originalPrice: "₹29,999",
        discount: "16% off",
        image: "/FLIPKART/Nord CE3 Lite.png"
    },
    {
        id: 4,
        name: "ASUS TUF Gaming",
        price: "₹49,999",
        originalPrice: "₹72,999",
        discount: "31% off",
        image: "/FLIPKART/tuf gaming.jpg"
    },
    {
        id: 5,
        name: "boAt AirDopes 170 TWS",
        price: "₹999",
        originalPrice: "₹1,299",
        discount: "25% off",
        image: "/FLIPKART/BOAT 170.jpg"
    },
    {
        id: 6,
        name: "URBN 20,000 mAh PowerBank",
        price: "₹1,099",
        originalPrice: "₹2,999",
        discount: "63% off",
        image: "/FLIPKART/compact-power-bank-black-20000-upr211-bk-urbn-original-imah7f6vdyysz2w5.JPG"
    },
    {
        id: 7,
        name: "Noise Icon BUZZ SmartWatch  ",
        price: "₹1,299",
        originalPrice: "₹4,999",
        discount: "74% off",
        image: "/FLIPKART/NOISE WATCH.jpg"
    },
    {
        id: 8,
        name: "Apple Air MacBook M2",
        price: "₹79,999",
        originalPrice: "₹99,900",
        discount: "21% off",
        image: "/FLIPKART/AIR MAC M2.jpg"
    }
];

// Function to create product cards for main page
function createProductCard(product) {
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <div class="product-price">
          <span class="price">${product.price}</span>
          <span class="original-price">${product.originalPrice}</span>
          <span class="discount">${product.discount}</span>
        </div>
      </div>
    `;
}

let index = 0;

function slideShow() {
    const slider = document.querySelector(".slider");
    index = (index + 1) % 3;
    slider.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(slideShow, 3000); // Change slide every 3 seconds


// Function to render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Add click handler for electronics category
    const electronicsCategory = document.getElementById('electronics-category');
    if (electronicsCategory) {
        electronicsCategory.addEventListener('click', () => {
            window.location.href = 'laptops.html';
        });
    }
});

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slider img");
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => changeSlide(1), 3000);