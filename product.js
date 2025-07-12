// Product data for laptops page
const products = [{
        id: 1,
        name: "Apple MacBook Pro M2",
        specs: [
            "Apple M2 Pro chip",
            "16GB Unified Memory",
            "512GB SSD",
            "14.2-inch Liquid Retina XDR display"
        ],
        price: "₹1,99,900",
        originalPrice: "₹2,19,900",
        discount: "9% off",
        rating: "4.9",
        reviews: "1,245",
        image: "/FLIPKART CLONE/p1.jpg"
    },
    {
        id: 2,
        name: "Dell XPS 13 Plus",
        specs: [
            "13th Gen Intel Core i7",
            "16GB LPDDR5 RAM",
            "1TB NVMe SSD",
            "13.4-inch 4K OLED Touch Display"
        ],
        price: "₹1,49,990",
        originalPrice: "₹1,79,990",
        discount: "16% off",
        rating: "4.7",
        reviews: "892",
        image: "/FLIPKART CLONE/p2.jpg"
    },
    {
        id: 3,
        name: "Lenovo ThinkPad X1 Carbon",
        specs: [
            "12th Gen Intel Core i5",
            "16GB RAM",
            "512GB SSD",
            "14-inch WUXGA IPS Anti-glare"
        ],
        price: "₹1,24,990",
        originalPrice: "₹1,54,990",
        discount: "19% off",
        rating: "4.6",
        reviews: "567",
        image: "/FLIPKART CLONE/p3.jpg"
    },
    {
        id: 4,
        name: "HP Envy x360",
        specs: [
            "AMD Ryzen 7 5800U",
            "16GB DDR4 RAM",
            "512GB NVMe SSD",
            "13.3-inch FHD OLED Touch"
        ],
        price: "₹94,990",
        originalPrice: "₹1,19,990",
        discount: "21% off",
        rating: "4.5",
        reviews: "789",
        image: "/FLIPKART CLONE/p4.jpg"
    },
    {
        id: 5,
        name: "ASUS ROG Zephyrus G14",
        specs: [
            "AMD Ryzen 9 6900HS",
            "16GB DDR5 RAM",
            "1TB NVMe SSD",
            "14-inch QHD 165Hz Display"
        ],
        price: "₹1,39,990",
        originalPrice: "₹1,69,990",
        discount: "18% off",
        rating: "4.8",
        reviews: "432",
        image: "/FLIPKART CLONE/p5.jpg"
    },
    {
        id: 6,
        name: "Acer Swift 5",
        specs: [
            "12th Gen Intel Core i7",
            "16GB LPDDR5 RAM",
            "512GB SSD",
            "14-inch QHD Touch Display"
        ],
        price: "₹89,990",
        originalPrice: "₹1,09,990",
        discount: "18% off",
        rating: "4.4",
        reviews: "345",
        image: "/FLIPKART CLONE/p6.jpg"
    }
];

// Function to create product cards for laptops page
function createProductCard(product) {
    return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <ul class="product-specs">
        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
      <div class="rating">
        <span>${product.rating} ★</span>
        <span>${product.reviews} reviews</span>
      </div>
      <div class="product-price">
        <span class="price">${product.price}</span>
        <span class="original-price">${product.originalPrice}</span>
        <span class="discount">${product.discount}</span>
      </div>
    </div>
  `;
}

// Function to render products
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Sort products by price
function sortByPrice(ascending = true) {
  products.sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^/d]/g, ''));
    const priceB = parseInt(b.price.replace(/[^/d]/g, ''));
    return ascending ? priceA - priceB : priceB - priceA;
  });
  renderProducts();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  
  // Add sort button functionality
  const sortButton = document.querySelector('.sort-button');
  let ascending = true;
  
  sortButton.addEventListener('click', () => {
    ascending = !ascending;
    sortByPrice(ascending);
  });
});

function createProductCard(product) {
  return `
  <div class="product-card">
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <ul class="product-specs">
      ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
    </ul>
    <div class="rating">
      <span>${product.rating} ★</span>
      <span>${product.reviews} reviews</span>
    </div>
    <div class="product-price">
      <span class="price">${product.price}</span>
      <span class="original-price">${product.originalPrice}</span>
      <div class="discount-container">
        <span class="discount">${product.discount}</span>
        <button class="discount-button">Claim Offer</button>
      </div>
    </div>
  </div>
`;
}