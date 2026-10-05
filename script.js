/* =========================================================
   LUNA STORE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

// بدلي هاد الرقم برقم WhatsApp ديالك
const WHATSAPP_NUMBER = "212600000000";

const ADMIN_EMAIL = "admin@lunastore.com";
const ADMIN_PASSWORD = "LunaAdmin123";


/* =========================================================
   DEFAULT PRODUCTS
========================================================= */

const defaultProducts = [

    {
        id: "dress-001",
        name: "Satin Midi Dress",
        category: "Dresses",
        price: 499,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Cream"],
        sizes: ["S", "M", "L"],
        description:
            "Elegant satin midi dress with a clean and feminine silhouette.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["Black", "Cream"],
            ["S", "M", "L"],
            5
        )
    },


    {
        id: "dress-002",
        name: "Minimal Black Dress",
        category: "Dresses",
        price: 429,
        salePrice: 349,
        image:
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
        colors: ["Black"],
        sizes: ["S", "M", "L"],
        description:
            "A timeless black dress made for effortless everyday elegance.",
        newArrival: false,
        bestSeller: true,
        sale: true,
        stock: createStock(
            ["Black"],
            ["S", "M", "L"],
            4
        )
    },


    {
        id: "dress-003",
        name: "Flowy Summer Dress",
        category: "Dresses",
        price: 379,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
        colors: ["White", "Beige"],
        sizes: ["S", "M", "L"],
        description:
            "Light and comfortable dress with a relaxed silhouette.",
        newArrival: true,
        bestSeller: false,
        sale: false,
        stock: createStock(
            ["White", "Beige"],
            ["S", "M", "L"],
            6
        )
    },


    {
        id: "top-001",
        name: "Soft Knit Top",
        category: "Tops",
        price: 249,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1564257577054-5e3c6e7e9f0b?auto=format&fit=crop&w=900&q=85",
        colors: ["Cream", "Black"],
        sizes: ["S", "M", "L"],
        description:
            "Soft knit top with a minimal modern finish.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["Cream", "Black"],
            ["S", "M", "L"],
            7
        )
    },


    {
        id: "top-002",
        name: "Classic White Shirt",
        category: "Tops",
        price: 299,
        salePrice: 249,
        image:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
        colors: ["White"],
        sizes: ["S", "M", "L", "XL"],
        description:
            "Classic white shirt designed for a clean everyday look.",
        newArrival: false,
        bestSeller: true,
        sale: true,
        stock: createStock(
            ["White"],
            ["S", "M", "L", "XL"],
            5
        )
    },


    {
        id: "top-003",
        name: "Fitted Ribbed Top",
        category: "Tops",
        price: 199,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Brown", "Cream"],
        sizes: ["S", "M", "L"],
        description:
            "Fitted ribbed top with a simple contemporary shape.",
        newArrival: true,
        bestSeller: false,
        sale: false,
        stock: createStock(
            ["Black", "Brown", "Cream"],
            ["S", "M", "L"],
            8
        )
    },


    {
        id: "jeans-001",
        name: "Straight Leg Jeans",
        category: "Jeans",
        price: 399,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
        colors: ["Blue"],
        sizes: ["36", "38", "40", "42"],
        description:
            "Classic straight-leg jeans with a timeless wash.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["Blue"],
            ["36", "38", "40", "42"],
            6
        )
    },


    {
        id: "jeans-002",
        name: "Wide Leg Denim",
        category: "Jeans",
        price: 449,
        salePrice: 379,
        image:
            "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=85",
        colors: ["Blue", "Black"],
        sizes: ["36", "38", "40", "42"],
        description:
            "Relaxed wide-leg denim for an effortless silhouette.",
        newArrival: false,
        bestSeller: false,
        sale: true,
        stock: createStock(
            ["Blue", "Black"],
            ["36", "38", "40", "42"],
            4
        )
    },


    {
        id: "jacket-001",
        name: "Oversized Denim Jacket",
        category: "Jackets",
        price: 549,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        colors: ["Blue", "Black"],
        sizes: ["S", "M", "L"],
        description:
            "Oversized denim jacket with a relaxed street-style look.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["Blue", "Black"],
            ["S", "M", "L"],
            4
        )
    },


    {
        id: "jacket-002",
        name: "Tailored Blazer",
        category: "Jackets",
        price: 599,
        salePrice: 499,
        image:
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Beige"],
        sizes: ["S", "M", "L"],
        description:
            "Structured blazer with a refined modern silhouette.",
        newArrival: false,
        bestSeller: true,
        sale: true,
        stock: createStock(
            ["Black", "Beige"],
            ["S", "M", "L"],
            3
        )
    },


    {
        id: "shoes-001",
        name: "Minimal Sneakers",
        category: "Shoes",
        price: 449,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        colors: ["White", "Black"],
        sizes: ["36", "37", "38", "39", "40"],
        description:
            "Clean everyday sneakers with a modern minimal design.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["White", "Black"],
            ["36", "37", "38", "39", "40"],
            4
        )
    },


    {
        id: "shoes-002",
        name: "Classic Loafers",
        category: "Shoes",
        price: 499,
        salePrice: 399,
        image:
            "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Brown"],
        sizes: ["36", "37", "38", "39", "40"],
        description:
            "Classic loafers designed to elevate everyday outfits.",
        newArrival: false,
        bestSeller: false,
        sale: true,
        stock: createStock(
            ["Black", "Brown"],
            ["36", "37", "38", "39", "40"],
            3
        )
    },


    {
        id: "bag-001",
        name: "Structured Shoulder Bag",
        category: "Bags",
        price: 399,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Cream"],
        sizes: ["One Size"],
        description:
            "Structured shoulder bag with a polished everyday finish.",
        newArrival: true,
        bestSeller: true,
        sale: false,
        stock: createStock(
            ["Black", "Cream"],
            ["One Size"],
            5
        )
    },


    {
        id: "bag-002",
        name: "Mini Crossbody Bag",
        category: "Bags",
        price: 329,
        salePrice: 279,
        image:
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
        colors: ["Black", "Brown"],
        sizes: ["One Size"],
        description:
            "Compact crossbody bag perfect for everyday essentials.",
        newArrival: false,
        bestSeller: false,
        sale: true,
        stock: createStock(
            ["Black", "Brown"],
            ["One Size"],
            4
        )
    },


    {
        id: "accessory-001",
        name: "Minimal Gold Necklace",
        category: "Accessories",
        price: 179,
        salePrice: null,
        image:
            "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
        colors: ["Gold"],
        sizes: ["One Size"],
        description:
            "Minimal necklace designed for subtle everyday styling.",
        newArrival: true,
        bestSeller: false,
        sale: false,
        stock: createStock(
            ["Gold"],
            ["One Size"],
            8
        )
    },


    {
        id: "accessory-002",
        name: "Classic Sunglasses",
        category: "Accessories",
        price: 229,
        salePrice: 179,
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
        colors: ["Black"],
        sizes: ["One Size"],
        description:
            "Classic sunglasses with a clean contemporary frame.",
        newArrival: false,
        bestSeller: true,
        sale: true,
        stock: createStock(
            ["Black"],
            ["One Size"],
            5
        )
    }

];


/* =========================================================
   STOCK HELPER
========================================================= */

function createStock(colors, sizes, amount) {

    const stock = {};

    colors.forEach(color => {

        stock[color] = {};

        sizes.forEach(size => {

            stock[color][size] = amount;

        });

    });

    return stock;
}


/* =========================================================
   DATA / STORAGE
========================================================= */

function loadArray(key, fallback = []) {
    try {
        const raw = localStorage.getItem(key);
        const parsed = raw ? JSON.parse(raw) : null;
        return Array.isArray(parsed) ? parsed : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function normalizeProductImages(product) {
    if (!product) return null;

    const normalized = { ...product };
    const rawImages = Array.isArray(normalized.images)
        ? normalized.images
        : [];

    const firstImage =
        typeof normalized.image === "string"
            ? normalized.image.trim()
            : "";

    const images = [
        firstImage,
        ...rawImages
    ]
        .map(image => String(image || "").trim())
        .filter(Boolean)
        .filter((image, index, list) => list.indexOf(image) === index)
        .slice(0, 5);

    normalized.images = images;
    normalized.image = images[0] || "";

    normalized.id = String(normalized.id ?? `product-${Date.now()}`);
    normalized.name = String(normalized.name ?? "Product").trim();
    normalized.category = String(normalized.category ?? "Accessories").trim();
    normalized.description = String(normalized.description ?? "").trim();

    normalized.price = Number(normalized.price) || 0;
    normalized.salePrice =
        normalized.salePrice === null || normalized.salePrice === undefined || normalized.salePrice === ""
            ? null
            : Number(normalized.salePrice) || 0;

    normalized.colors = Array.isArray(normalized.colors) && normalized.colors.length
        ? normalized.colors.map(value => String(value).trim()).filter(Boolean)
        : ["Black"];

    normalized.sizes = Array.isArray(normalized.sizes) && normalized.sizes.length
        ? normalized.sizes.map(value => String(value).trim()).filter(Boolean)
        : ["S", "M", "L"];

    normalized.newArrival = Boolean(normalized.newArrival);
    normalized.bestSeller = Boolean(normalized.bestSeller);
    normalized.sale = Boolean(normalized.sale);

    const sourceStock = normalized.stock;
    const stock = {};

    if (sourceStock && typeof sourceStock === "object" && !Array.isArray(sourceStock)) {
        Object.entries(sourceStock).forEach(([color, sizes]) => {
            if (!sizes || typeof sizes !== "object") return;

            stock[color] = {};

            Object.entries(sizes).forEach(([size, quantity]) => {
                const value = Math.max(0, Number(quantity) || 0);
                stock[color][size] = value;
            });
        });
    }

    // Legacy numeric stock support.
    if (typeof sourceStock === "number" || typeof sourceStock === "string") {
        const amount = Math.max(0, Number(sourceStock) || 0);
        normalized.colors.forEach(color => {
            stock[color] = {};
            normalized.sizes.forEach(size => {
                stock[color][size] = amount;
            });
        });
    }

    normalized.colors.forEach(color => {
        if (!stock[color]) stock[color] = {};

        normalized.sizes.forEach(size => {
            if (stock[color][size] === undefined) {
                stock[color][size] = 0;
            }
        });
    });

    normalized.stock = stock;

    return normalized;
}

function loadProducts() {
    const saved = loadArray("lunaProducts", []);
    const source = saved.length ? saved : defaultProducts;
    const normalized = source.map(normalizeProductImages).filter(Boolean);

    saveJSON("lunaProducts", normalized);
    return normalized;
}

let products = loadProducts();
let cart = loadArray("lunaCart", []);
let wishlist = loadArray("lunaWishlist", []);
let orders = loadArray("lunaOrders", []);
let customers = loadArray("lunaCustomers", []);

cart = cart
    .map(item => ({
        productId: String(item?.productId ?? ""),
        color: item?.color ? String(item.color) : "",
        size: item?.size ? String(item.size) : "",
        quantity: Math.max(1, Number(item?.quantity) || 1)
    }))
    .filter(item => item.productId);

let currentCategory = "All";
let currentProducts = [];
let currentSort = "default";

let selectedProduct = null;
let selectedColor = null;
let selectedSize = null;
let selectedQuantity = 1;

saveJSON("lunaCart", cart);
saveJSON("lunaWishlist", wishlist);
saveJSON("lunaOrders", orders);
saveJSON("lunaCustomers", customers);

/* =========================================================
   SAVE HELPERS
========================================================= */

function saveProducts() {
    products = products.map(normalizeProductImages).filter(Boolean);
    saveJSON("lunaProducts", products);
}

function saveCart() {
    saveJSON("lunaCart", cart);
}

function saveWishlist() {
    saveJSON("lunaWishlist", wishlist);
}

function saveOrders() {
    saveJSON("lunaOrders", orders);
}

function saveCustomers() {
    saveJSON("lunaCustomers", customers);
}


/* =========================================================
   PRICE
========================================================= */

function getProductPrice(product) {

    if (
        product.salePrice !== null &&
        product.salePrice !== undefined
    ) {
        return Number(product.salePrice);
    }

    return Number(product.price);
}


/* =========================================================
   STOCK
========================================================= */

function getVariantStock(product, color, size) {

    if (
        !product.stock ||
        !product.stock[color] ||
        product.stock[color][size] === undefined
    ) {
        return 0;
    }

    return Number(product.stock[color][size]);
}


function getTotalStock(product) {

    let total = 0;
        if (!product.stock) {
        return 0;
    }

    Object.values(product.stock).forEach(colorStock => {

        Object.values(colorStock).forEach(quantity => {

            total += Number(quantity);

        });

    });

    return total;
}


function getStockStatus(product) {

    const total = getTotalStock(product);

    if (total <= 0) {
        return "out";
    }

    if (total <= 5) {
        return "low";
    }

    return "in";
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeStore();
});

function initializeStore() {
    renderHomeProducts();
    renderProducts();
    updateCartCount();
    setupModalEvents();
    setupAdminImageInput();
    normalizeProductImageInputs();
    updateMobileMenuAccessibility();
}


/* =========================================================
   HOME PRODUCTS
========================================================= */

function renderHomeProducts() {

    const newContainer =
        document.getElementById("new-products");

    const bestContainer =
        document.getElementById("best-products");


    if (newContainer) {

        const newProducts =
            products.filter(product => product.newArrival);

        newContainer.innerHTML =
            newProducts
                .slice(0, 4)
                .map(createProductCard)
                .join("");

    }


    if (bestContainer) {

        const bestProducts =
            products.filter(product => product.bestSeller);

        bestContainer.innerHTML =
            bestProducts
                .slice(0, 4)
                .map(createProductCard)
                .join("");

    }

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {
    const price = getProductPrice(product);
    const stockStatus = getStockStatus(product);
    const totalStock = getTotalStock(product);
    const isWishlisted = wishlist.includes(product.id);

    let badge = "";

    if (stockStatus === "out") {
        badge = `<span class="product-badge sold-out">Sold Out</span>`;
    } else if (product.sale || product.salePrice !== null) {
        badge = `<span class="product-badge sale">Sale</span>`;
    } else if (product.newArrival) {
        badge = `<span class="product-badge">New</span>`;
    }

    let stockText = "";

    if (stockStatus === "out") {
        stockText = `<div class="stock-text out-stock">Out of stock</div>`;
    } else if (stockStatus === "low") {
        stockText = `<div class="stock-text low-stock">Only ${totalStock} left</div>`;
    } else {
        stockText = `<div class="stock-text">In stock</div>`;
    }

    return `
        <article class="product-card" data-product-id="${escapeHTML(product.id)}">
            <div
                class="product-image"
                onclick="openProduct('${escapeQuotes(product.id)}')">

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy">

                ${badge}

                <button
                    type="button"
                    class="product-wishlist"
                    aria-label="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}"
                    onclick="event.stopPropagation(); toggleWishlist('${escapeQuotes(product.id)}')">
                    ${isWishlisted ? "♥" : "♡"}
                </button>

                ${
                    stockStatus !== "out"
                        ? `<button
                            type="button"
                            class="quick-view"
                            onclick="event.stopPropagation(); openProduct('${escapeQuotes(product.id)}')">
                            Quick View
                        </button>`
                        : ""
                }
            </div>

            <div class="product-info">
                <div class="product-category">
                    ${escapeHTML(product.category)}
                </div>

                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>

                <div class="product-price">
                    ${
                        getProductPrice(product) < Number(product.price)
                            ? `<span class="old-price">${formatPrice(product.price)}</span>
                               <span class="sale-price">${formatPrice(getProductPrice(product))}</span>`
                            : `${formatPrice(getProductPrice(product))}`
                    }
                </div>

                ${stockText}
            </div>
        </article>
    `;
}


/* =========================================================
   RENDER SHOP
========================================================= */

function renderProducts() {
    const container = document.getElementById("product-grid");
    if (!container) return;

    const searchInput = document.getElementById("shop-search");
    const search = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    let filtered = products.filter(product => {
        const inCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        if (!inCategory) return false;
        if (!search) return true;

        return (
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    });

    if (currentSort === "low") {
        filtered.sort((a, b) => getProductPrice(a) - getProductPrice(b));
    } else if (currentSort === "high") {
        filtered.sort((a, b) => getProductPrice(b) - getProductPrice(a));
    } else if (currentSort === "newest") {
        filtered.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
    } else if (currentSort === "best") {
        filtered.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    currentProducts = filtered;

    if (!filtered.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(createProductCard).join("");
}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function openProduct(productId) {
    const product = getProduct(productId);
    if (!product) return;

    selectedProduct = product;
    selectedColor = product.colors[0] || null;
    selectedSize = product.sizes[0] || null;
    selectedQuantity = 1;

    const image = document.getElementById("details-image");
    const category = document.getElementById("details-category");
    const name = document.getElementById("details-name");
    const price = document.getElementById("details-price");
    const description = document.getElementById("details-description");
    const quantity = document.getElementById("quantity");

    if (category) category.textContent = product.category;
    if (name) name.textContent = product.name;
    if (description) description.textContent = product.description;
    if (quantity) quantity.textContent = "1";

    if (price) {
        if (getProductPrice(product) < Number(product.price)) {
            price.innerHTML = `
                <span class="old-price">${formatPrice(product.price)}</span>
                <span class="sale-price">${formatPrice(getProductPrice(product))}</span>
            `;
        } else {
            price.textContent = formatPrice(getProductPrice(product));
        }
    }

    setupProductGallery(product);
    renderColorOptions();
    renderSizeOptions();
    updateDetailsStock();
    updateAddButton();
    openModal("product-modal");
}

function setupProductGallery(product) {
    const mainImage = document.getElementById("details-image");
    if (!mainImage) return;

    const container = mainImage.parentElement;
    if (!container) return;

    const images = Array.isArray(product.images) && product.images.length
        ? product.images.slice(0, 5)
        : [product.image].filter(Boolean);

    mainImage.src = images[0] || "";
    mainImage.alt = product.name;

    let thumbnails = document.getElementById("details-gallery-thumbnails");

    if (!thumbnails) {
        thumbnails = document.createElement("div");
        thumbnails.id = "details-gallery-thumbnails";
        container.appendChild(thumbnails);
    }

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.height = "auto";
    container.style.background = "#f4f4f2";

    mainImage.style.display = "block";
    mainImage.style.width = "100%";
    mainImage.style.height = "clamp(320px, 55vw, 620px)";
    mainImage.style.objectFit = "cover";
    mainImage.style.flex = "0 0 auto";

    thumbnails.innerHTML = "";
    thumbnails.style.display = "flex";
    thumbnails.style.flexDirection = "row";
    thumbnails.style.flexWrap = "nowrap";
    thumbnails.style.gap = "8px";
    thumbnails.style.overflowX = "auto";
    thumbnails.style.padding = "0 0 4px";
    thumbnails.style.width = "100%";
    thumbnails.style.boxSizing = "border-box";

    images.forEach((imageUrl, index) => {
        const thumbnail = document.createElement("button");
        thumbnail.type = "button";
        thumbnail.setAttribute("aria-label", `View image ${index + 1}`);
        thumbnail.style.border = index === 0 ? "2px solid #111" : "1px solid #ddd";
        thumbnail.style.padding = "0";
        thumbnail.style.margin = "0";
        thumbnail.style.background = "white";
        thumbnail.style.width = "72px";
        thumbnail.style.height = "88px";
        thumbnail.style.flex = "0 0 72px";
        thumbnail.style.cursor = "pointer";
        thumbnail.style.overflow = "hidden";
        thumbnail.style.borderRadius = "4px";

        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = imageUrl;
        thumbnailImage.alt = `${product.name} ${index + 1}`;
        thumbnailImage.style.width = "100%";
        thumbnailImage.style.height = "100%";
        thumbnailImage.style.objectFit = "cover";
        thumbnailImage.style.display = "block";

        thumbnail.appendChild(thumbnailImage);

        thumbnail.addEventListener("click", () => {
            mainImage.src = imageUrl;

            Array.from(thumbnails.children).forEach(button => {
                button.style.border = "1px solid #ddd";
            });

            thumbnail.style.border = "2px solid #111";
        });

        thumbnails.appendChild(thumbnail);
    });
}

function renderColorOptions() {
    const container = document.getElementById("color-options");
    if (!container || !selectedProduct) return;

    container.innerHTML = selectedProduct.colors.map(color => `
        <button
            type="button"
            class="option ${color === selectedColor ? "selected" : ""}"
            onclick="selectColor('${escapeQuotes(color)}')">
            ${escapeHTML(color)}
        </button>
    `).join("");
}

function renderSizeOptions() {
    const container = document.getElementById("size-options");
    if (!container || !selectedProduct) return;

    container.innerHTML = selectedProduct.sizes.map(size => {
        const stock = getVariantStock(selectedProduct, selectedColor, size);
        const disabled = stock <= 0;

        return `
            <button
                type="button"
                class="option ${size === selectedSize ? "selected" : ""} ${disabled ? "disabled" : ""}"
                ${disabled ? "disabled" : ""}
                onclick="selectSize('${escapeQuotes(size)}')">
                ${escapeHTML(size)}
            </button>
        `;
    }).join("");
}

function selectColor(color) {
    if (!selectedProduct || !selectedProduct.colors.includes(color)) return;

    selectedColor = color;

    const currentSizeStock = getVariantStock(
        selectedProduct,
        selectedColor,
        selectedSize
    );

    if (currentSizeStock <= 0) {
        const availableSize = selectedProduct.sizes.find(size =>
            getVariantStock(selectedProduct, selectedColor, size) > 0
        );

        selectedSize = availableSize || selectedProduct.sizes[0] || null;
    }

    selectedQuantity = 1;

    syncQuantityDisplay();
    renderColorOptions();
    renderSizeOptions();
    updateDetailsStock();
    updateAddButton();
}

function selectSize(size) {
    if (!selectedProduct || !selectedProduct.sizes.includes(size)) return;

    const stock = getVariantStock(selectedProduct, selectedColor, size);
    if (stock <= 0) return;

    selectedSize = size;
    selectedQuantity = 1;

    syncQuantityDisplay();
    renderSizeOptions();
    updateDetailsStock();
    updateAddButton();
}

function updateDetailsStock() {
    const element = document.getElementById("details-stock");
    if (!element || !selectedProduct) return;

    const stock = getVariantStock(selectedProduct, selectedColor, selectedSize);

    if (stock <= 0) {
        element.textContent = "Out of stock";
        element.className = "details-stock out-stock";
        return;
    }

    if (stock <= 5) {
        element.textContent = `Only ${stock} left in this variant`;
        element.className = "details-stock low-stock";
        return;
    }

    element.textContent = "In stock";
    element.className = "details-stock";
}

function syncQuantityDisplay() {
    const quantity = document.getElementById("quantity");
    if (quantity) quantity.textContent = String(selectedQuantity);
}

function changeQuantity(amount) {
    if (!selectedProduct) return;

    const stock = getVariantStock(
        selectedProduct,
        selectedColor,
        selectedSize
    );

    if (stock <= 0) {
        selectedQuantity = 1;
        syncQuantityDisplay();
        updateAddButton();
        return;
    }

    const next = selectedQuantity + Number(amount || 0);

    selectedQuantity = Math.max(
        1,
        Math.min(next, stock)
    );

    syncQuantityDisplay();
}

function updateAddButton() {
    const button = document.getElementById("add-to-bag-button");
    if (!button || !selectedProduct) return;

    const stock = getVariantStock(
        selectedProduct,
        selectedColor,
        selectedSize
    );

    button.disabled = stock <= 0;
    button.textContent = stock <= 0 ? "Out of Stock" : "Add to Bag";
}

function addSelectedToCart() {
    if (!selectedProduct) return;

    const stock = getVariantStock(
        selectedProduct,
        selectedColor,
        selectedSize
    );

    if (stock <= 0) {
        showMessage("This variant is out of stock.");
        return;
    }

    const existing = cart.find(item =>
        item.productId === selectedProduct.id &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    const existingQuantity = existing ? Number(existing.quantity) || 0 : 0;

    if (existingQuantity + selectedQuantity > stock) {
        showMessage(`Only ${stock} item(s) available for this variant.`);
        return;
    }

    if (existing) {
        existing.quantity = existingQuantity + selectedQuantity;
    } else {
        cart.push({
            productId: selectedProduct.id,
            color: selectedColor || "",
            size: selectedSize || "",
            quantity: selectedQuantity
        });
    }

    saveCart();
    updateCartCount();

    const productName = selectedProduct.name;
    closeProduct();
    showMessage(`${productName} has been added to your bag.`);
}

function closeProduct() {
    closeModal("product-modal");
}


/* =========================================================
   CART
========================================================= */

function updateCartCount() {
    const count = cart.reduce(
        (total, item) => total + (Number(item.quantity) || 0),
        0
    );

    const element = document.getElementById("cart-count");
    if (element) element.textContent = String(count);
}

function openCart() {
    renderCart();
    openModal("cart-modal");
}

function closeCart() {
    closeModal("cart-modal");
}

function renderCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    // Remove cart entries whose product no longer exists.
    cart = cart.filter(item => getProduct(item.productId));

    if (!cart.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Your bag is empty</h3>
                <p>Add something you love to your bag.</p>
            </div>
        `;
        updateCartTotals(0);
        updateCartCount();
        return;
    }

    let subtotal = 0;

    container.innerHTML = cart.map(item => {
        const product = getProduct(item.productId);
        if (!product) return "";

        const quantity = Math.max(1, Number(item.quantity) || 1);
        item.quantity = quantity;

        const price = getProductPrice(product);
        const itemTotal = price * quantity;
        subtotal += itemTotal;

        const color = item.color || "";
        const size = item.size || "";
        const productId = JSON.stringify(product.id);
        const colorArg = JSON.stringify(color);
        const sizeArg = JSON.stringify(size);

        return `
            <div class="cart-item">
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}">
                                    <div class="cart-item-info">
                    <h4>${escapeHTML(product.name)}</h4>

                    <p>
                        ${color ? `Color: ${escapeHTML(color)}` : ""}
                        ${color && size ? " / " : ""}
                        ${size ? `Size: ${escapeHTML(size)}` : ""}
                    </p>

                    <div class="cart-quantity">
                        <button
                            type="button"
                            onclick='changeCartQuantity(${productId}, ${colorArg}, ${sizeArg}, -1)'>
                            −
                        </button>

                        <span>${quantity}</span>

                        <button
                            type="button"
                            onclick='changeCartQuantity(${productId}, ${colorArg}, ${sizeArg}, 1)'>
                            +
                        </button>
                    </div>
                </div>

                <div class="cart-item-right">
                    <strong>${formatPrice(itemTotal)}</strong>

                    <button
                        type="button"
                        class="remove-item"
                        onclick='removeFromCart(${productId}, ${colorArg}, ${sizeArg})'>
                        Remove
                    </button>
                </div>
            </div>
        `;
    }).join("");

    saveCart();
    updateCartTotals(subtotal);
    updateCartCount();
}

function updateCartTotals(subtotal) {
    const subtotalElement = document.getElementById("cart-subtotal");
    const totalElement = document.getElementById("cart-total");

    if (subtotalElement) {
        subtotalElement.textContent = `${formatPrice(subtotal)}`;
    }

    if (totalElement) {
        totalElement.textContent = `${formatPrice(subtotal)}`;
    }
}

function changeCartQuantity(productId, color = "", size = "", amount = 0) {
    const item = cart.find(cartItem =>
        cartItem.productId === productId &&
        (cartItem.color || "") === (color || "") &&
        (cartItem.size || "") === (size || "")
    );

    const product = getProduct(productId);
    if (!item || !product) return;

    const stock = getVariantStock(product, color, size);
    const next = (Number(item.quantity) || 0) + Number(amount || 0);

    if (next <= 0) {
        removeFromCart(productId, color, size);
        return;
    }

    if (stock <= 0) {
        showMessage("This variant is currently out of stock.");
        return;
    }

    if (next > stock) {
        showMessage(`Only ${stock} item(s) available.`);
        return;
    }

    item.quantity = next;
    saveCart();
    updateCartCount();
    renderCart();
}

function removeFromCart(productId, color = "", size = "") {
    cart = cart.filter(item => !(
        item.productId === productId &&
        (item.color || "") === (color || "") &&
        (item.size || "") === (size || "")
    ));

    saveCart();
    updateCartCount();
    renderCart();
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);

    if (index >= 0) {
        wishlist.splice(index, 1);
    } else if (getProduct(productId)) {
        wishlist.push(productId);
    }

    saveWishlist();
    renderProducts();
    renderHomeProducts();

    const modal = document.getElementById("wishlist-modal");
    if (modal?.classList.contains("active")) {
        renderWishlist();
    }
}

function openWishlist() {
    renderWishlist();
    openModal("wishlist-modal");
}

function closeWishlist() {
    closeModal("wishlist-modal");
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items");
    if (!container) return;

    const items = wishlist
        .map(id => getProduct(id))
        .filter(Boolean);

    if (!items.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Your wishlist is empty</h3>
                <p>Save products you love here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="wishlist-grid">
            ${items.map(product => `
                <div class="wishlist-card">
                    <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">

                    <div class="wishlist-card-content">
                        <h4>${escapeHTML(product.name)}</h4>
                        <p>${formatPrice(getProductPrice(product))}</p>

                        <div class="wishlist-actions">
                            <button
                                type="button"
                                onclick="openProduct('${escapeQuotes(product.id)}')">
                                View
                            </button>

                            <button
                                type="button"
                                onclick="toggleWishlist('${escapeQuotes(product.id)}')">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}


/* =========================================================
   SEARCH MODAL
========================================================= */

function openSearch() {
    const input = document.getElementById("modal-search");
    openModal("search-modal");

    if (input) {
        input.value = document.getElementById("shop-search")?.value || "";
        setTimeout(() => input.focus(), 50);
    }
}

function closeSearch() {
    closeModal("search-modal");
}


function searchProducts() {
    renderProducts();
}

function searchFromModal() {
    const modalInput = document.getElementById("modal-search");
    const shopInput = document.getElementById("shop-search");
    if (!modalInput) return;

    if (shopInput) {
        shopInput.value = modalInput.value;
    }

    currentCategory = "All";
    renderProducts();

    if (modalInput.value.trim()) {
        closeSearch();
        const shop = document.getElementById("shop");
        shop?.scrollIntoView({ behavior: "smooth" });
    }
}

function sortProducts() {
    const select = document.getElementById("sort-products");
    if (!select) return;

    currentSort = select.value;
    renderProducts();
}

function filterProducts(category, button) {
    currentCategory = category;

    document.querySelectorAll(".filter").forEach(filter => {
        filter.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    } else {
        document.querySelectorAll(".filter").forEach(filter => {
            if (filter.textContent.trim().toLowerCase() === category.toLowerCase()) {
                filter.classList.add("active");
            }
        });
    }

    closeMobileMenu();
    renderProducts();

    const shop = document.getElementById("shop");
    if (shop && window.location.hash !== "#shop") {
        setTimeout(() => shop.scrollIntoView({ behavior: "smooth" }), 50);
    }
}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {
    if (!cart.length) {
        showMessage("Your shopping bag is empty.");
        return;
    }

    renderCheckout();
    closeCart();
    openModal("checkout-modal");
}

function closeCheckout() {
    closeModal("checkout-modal");
}

function renderCheckout() {
    const container = document.getElementById("checkout-items");
    const totalElement = document.getElementById("checkout-total");
    if (!container) return;

    let total = 0;

    container.innerHTML = cart.map(item => {
        const product = getProduct(item.productId);
        if (!product) return "";

        const quantity = Math.max(1, Number(item.quantity) || 1);
        const itemTotal = getProductPrice(product) * quantity;
        total += itemTotal;

        return `
            <div class="checkout-item">
                <span>${escapeHTML(product.name)} × ${quantity}</span>
                <strong>${formatPrice(itemTotal)}</strong>
            </div>
        `;
    }).join("");

    if (totalElement) {
        totalElement.textContent = formatPrice(total);
    }

    const loggedIn = localStorage.getItem("lunaLoggedIn") === "true";
    const user = getStoredUser();

    if (loggedIn && user) {
        const name = document.getElementById("checkout-name");
        const email = document.getElementById("checkout-email");
        if (name && !name.value) name.value = user.name || "";
        if (email && !email.value) email.value = user.email || "";
    }
}

function placeOrder(event) {
    event.preventDefault();

    if (!cart.length) {
        showMessage("Your bag is empty.");
        return;
    }

    const name = document.getElementById("checkout-name")?.value.trim() || "";
    const phone = document.getElementById("checkout-phone")?.value.trim() || "";
    const email = document.getElementById("checkout-email")?.value.trim().toLowerCase() || "";
    const address = document.getElementById("checkout-address")?.value.trim() || "";
    const city = document.getElementById("checkout-city")?.value.trim() || "";
    const postal = document.getElementById("checkout-postal")?.value.trim() || "";
    const payment = document.getElementById("payment-method")?.value || "";

    for (const item of cart) {
        const product = getProduct(item.productId);

        if (!product) {
            showMessage("One of the products in your bag is no longer available.");
            return;
        }

        const stock = getVariantStock(product, item.color, item.size);

        if (stock <= 0 || Number(item.quantity) > stock) {
            showMessage(`${product.name} is not available in the requested quantity.`);
            return;
        }
    }

    const orderItems = [];
    let total = 0;

    for (const item of cart) {
        const product = getProduct(item.productId);
        const quantity = Math.max(1, Number(item.quantity) || 1);
        const price = getProductPrice(product);

        product.stock[item.color][item.size] -= quantity;
        total += price * quantity;

        orderItems.push({
            productId: product.id,
            productName: product.name,
            color: item.color || "",
            size: item.size || "",
            quantity,
            price
        });
    }

    const order = {
        id: `LUNA-${Date.now()}`,
        date: new Date().toISOString(),
        customer: {
            name,
            phone,
            email,
            address,
            city,
            postal
        },
        payment,
        items: orderItems,
        total,
        status: "Pending"
    };

    orders.unshift(order);

    const customer = customers.find(
        entry => String(entry.email || "").toLowerCase() === email
    );

    if (customer) {
        customer.name = name || customer.name;
        customer.phone = phone || customer.phone || "";
        customer.orders = Number(customer.orders || 0) + 1;
    } else if (email) {
        customers.push({
            id: Date.now(),
            name,
            email,
            password: "",
            phone,
            orders: 1
        });
    }

    saveProducts();
    saveOrders();
    saveCustomers();

    cart = [];
    saveCart();
    updateCartCount();

    document.getElementById("checkout-form")?.reset();
    closeCheckout();
    renderProducts();
    renderHomeProducts();

    showMessage(`Thank you ${name || ""}! Your order ${order.id} has been placed.`);
}


/* =========================================================
   WHATSAPP ORDER
========================================================= */

function orderOnWhatsApp() {
    if (!cart.length) {
        showMessage("Your shopping bag is empty.");
        return;
    }

    const lines = [
        "Hello LUNA STORE 👋",
        "",
        "I would like to order:"
    ];

    let total = 0;

    cart.forEach(item => {
        const product = getProduct(item.productId);
        if (!product) return;

        const quantity = Math.max(1, Number(item.quantity) || 1);
        const price = getProductPrice(product);
        total += price * quantity;

        lines.push(
            `- ${product.name} | ${item.color || ""} | Size ${item.size || ""} | Qty ${quantity}`
        );
    });

    lines.push("", `Total: ${total} DH`);

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribeNewsletter(event) {

    event.preventDefault();


    const email =
        document
            .getElementById("newsletter-email")
            .value.trim();


    if (!email) {
        return;
    }


    alert(
        "Thank you for subscribing to LUNA."
    );


    event.target.reset();

}


/* =========================================================
   ACCOUNT
========================================================= */

function getStoredUser() {
    try {
        return JSON.parse(localStorage.getItem("lunaUser")) || null;
    } catch (error) {
        return null;
    }
}

function openAccount() {
    if (localStorage.getItem("lunaLoggedIn") === "true" && getStoredUser()) {
        showProfile();
    } else {
        showLogin();
    }

    openModal("account-modal");
}

function closeAccount() {
    closeModal("account-modal");
}

function showLogin() {
    const login = document.getElementById("login-section");
    const register = document.getElementById("register-section");
    const profile = document.getElementById("profile-section");

    if (login) login.style.display = "block";
    if (register) register.style.display = "none";
    if (profile) profile.style.display = "none";
}

function showRegister() {
    const login = document.getElementById("login-section");
    const register = document.getElementById("register-section");
    const profile = document.getElementById("profile-section");

    if (login) login.style.display = "none";
    if (register) register.style.display = "block";
    if (profile) profile.style.display = "none";
}

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("register-name")?.value.trim() || "";
    const email = document.getElementById("register-email")?.value.trim().toLowerCase() || "";
    const password = document.getElementById("register-password")?.value || "";

    if (!name || !email || !password) return;

    const existing = customers.find(
        customer => String(customer.email || "").toLowerCase() === email
    );

    if (existing) {
        showMessage("An account with this email already exists.");
        return;
    }

    const user = {
        id: Date.now(),
        name,
        email,
        password,
        phone: "",
        orders: 0
    };

    customers.push(user);
    saveCustomers();

    localStorage.setItem("lunaUser", JSON.stringify(user));
    localStorage.setItem("lunaLoggedIn", "true");

    showProfile();
    showMessage("Your LUNA account has been created.");
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("login-email")?.value.trim().toLowerCase() || "";
    const password = document.getElementById("login-password")?.value || "";

    const user = customers.find(customer =>
        String(customer.email || "").toLowerCase() === email &&
        customer.password === password
    );

    if (!user) {
        showMessage("Incorrect email or password.");
        return;
    }

    localStorage.setItem("lunaUser", JSON.stringify(user));
    localStorage.setItem("lunaLoggedIn", "true");

    showProfile();
    showMessage("Welcome back to LUNA.");
}

function showProfile() {
    const user = getStoredUser();

    if (!user) {
        showLogin();
        return;
    }

    const login = document.getElementById("login-section");
    const register = document.getElementById("register-section");
    const profile = document.getElementById("profile-section");

    if (login) login.style.display = "none";
    if (register) register.style.display = "none";
    if (profile) profile.style.display = "block";

    const title = document.getElementById("profile-name");
    const fullName = document.getElementById("profile-full-name");
    const email = document.getElementById("profile-email");
        if (title) title.textContent = `Welcome, ${user.name}`;
    if (fullName) fullName.textContent = user.name || "";
    if (email) email.textContent = user.email || "";
}

function logoutUser() {
    localStorage.removeItem("lunaLoggedIn");
    localStorage.removeItem("lunaUser");
    showLogin();
    showMessage("You have been logged out.");
}


/* =========================================================
   ADMIN
========================================================= */

function openAdmin() {
    const email = prompt("Admin email:");
    if (email === null) return;

    const password = prompt("Admin password:");
    if (password === null) return;

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        openModal("admin-modal");
        showAdminPage("dashboard");
        renderAdminDashboard();
        renderAdminProducts();
        renderAdminInventory();
        renderAdminOrders();
        renderAdminCustomers();
        return;
    }

    showMessage("Invalid admin credentials.");
}

function closeAdmin() {
    closeModal("admin-modal");
}


/* =========================================================
   ADMIN PAGES
========================================================= */

function showAdminPage(page, button) {
    document.querySelectorAll(".admin-page").forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(`admin-${page}`);
    if (target) target.style.display = "block";

    document.querySelectorAll(".admin-menu").forEach(menu => {
        menu.classList.remove("active");
    });

    if (button) button.classList.add("active");

    if (page === "dashboard") renderAdminDashboard();
    if (page === "products") renderAdminProducts();
    if (page === "inventory") renderAdminInventory();
    if (page === "orders") renderAdminOrders();
    if (page === "customers") renderAdminCustomers();
}


/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function renderAdminDashboard() {

    const productCount =
        document.getElementById(
            "admin-product-count"
        );


    const orderCount =
        document.getElementById(
            "admin-order-count"
        );


    const customerCount =
        document.getElementById(
            "admin-customer-count"
        );


    const revenue =
        document.getElementById(
            "admin-revenue"
        );


    if (productCount) {

        productCount.textContent =
            products.length;

    }


    if (orderCount) {

        orderCount.textContent =
            orders.length;

    }


    if (customerCount) {

        customerCount.textContent =
            customers.length;

    }


    const totalRevenue =
        orders.reduce(
            (sum, order) =>
                sum + Number(order.total || 0),
            0
        );


    if (revenue) {

        revenue.textContent =
            `${totalRevenue} DH`;

    }

}


/* =========================================================
   ADMIN PRODUCTS
========================================================= */

function renderAdminProducts() {
    const container = document.getElementById("admin-product-list");
    if (!container) return;

    if (!products.length) {
        container.innerHTML = `
            <div class="empty-admin">
                <h3>No products</h3>
                <p>Add your first product.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="admin-product-row">
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}">

            <div class="admin-product-info">
                <h3>${escapeHTML(product.name)}</h3>
                <p>
                    ${escapeHTML(product.category)}
                    · ${formatPrice(getProductPrice(product))}
                    · Stock: ${getTotalStock(product)}
                    · Images: ${product.images.length}
                </p>
            </div>

            <button
                type="button"
                class="delete-product"
                onclick="deleteAdminProduct('${escapeQuotes(product.id)}')">
                Delete
            </button>
        </div>
    `).join("");
}

function openAddProduct() {
    normalizeProductImageInputs();
    openModal("add-product-modal");
}

function closeAddProduct() {
    closeModal("add-product-modal");
}

function parseImageList(value) {
    return String(value || "")
        .split(/[\n,]+/)
        .map(item => item.trim())
        .filter(Boolean)
        .slice(0, 5);
}

function isValidImageUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" || url.protocol === "http:";
    } catch (error) {
        return false;
    }
}

function normalizeProductImageInputs() {
    const input = document.getElementById("admin-product-image");
    if (!input) return;

    // The HTML uses type="url" for one URL. Change it in JS so the same field
    // can safely accept 1–4 comma/new-line separated URLs without changing HTML.
    input.type = "text";
    input.placeholder = "Image URL(s) — up to 5, separated by commas";
    input.autocomplete = "off";
}

function setupAdminImageInput() {
    normalizeProductImageInputs();
}

function addAdminProduct(event) {
    event.preventDefault();

    normalizeProductImageInputs();

    const name = document.getElementById("admin-product-name")?.value.trim() || "";
    const category = document.getElementById("admin-product-category")?.value || "";
    const price = Number(document.getElementById("admin-product-price")?.value || 0);
    const imageInput = document.getElementById("admin-product-image");
    const description = document.getElementById("admin-product-description")?.value.trim() || "";
    const stockAmount = Math.max(0, Number(document.getElementById("admin-product-stock")?.value || 0));
    const color = document.getElementById("admin-product-color")?.value.trim() || "Black";

    const images = parseImageList(imageInput?.value || "");

    if (!name || !category || price <= 0 || !images.length || !description || !color) {
        showMessage("Please complete all product fields.");
        return;
    }

    if (images.some(image => !isValidImageUrl(image))) {
        showMessage("Please use valid http:// or https:// image URLs.");
        return;
    }

    const newProduct = normalizeProductImages({
        id: `product-${Date.now()}`,
        name,
        category,
        price,
        salePrice: null,
        image: images[0],
        images,
        colors: [color],
        sizes: ["S", "M", "L"],
        description,
        newArrival: true,
        bestSeller: false,
        sale: false,
        stock: createStock([color], ["S", "M", "L"], stockAmount)
    });

    products.unshift(newProduct);
    saveProducts();

    event.target.reset();
    closeAddProduct();

    renderProducts();
    renderHomeProducts();
    renderAdminProducts();
    renderAdminInventory();
    renderAdminDashboard();

    showMessage("Product added successfully.");
}


/* =========================================================
   DELETE PRODUCT
========================================================= */

function deleteAdminProduct(productId) {
    const product = getProduct(productId);
    if (!product) return;

    if (!confirm(`Delete "${product.name}"?`)) return;

    products = products.filter(item => item.id !== productId);
    wishlist = wishlist.filter(id => id !== productId);
    cart = cart.filter(item => item.productId !== productId);

    saveProducts();
    saveWishlist();
    saveCart();

    updateCartCount();
    renderProducts();
    renderHomeProducts();
    renderAdminProducts();
    renderAdminInventory();
    renderAdminDashboard();

    showMessage("Product deleted.");
}


/* =========================================================
   ADMIN INVENTORY
========================================================= */

function renderAdminInventory() {
    const container = document.getElementById("admin-inventory-list");
    if (!container) return;

    container.innerHTML = products.map(product => {
        const total = getTotalStock(product);

        const variants = Object.entries(product.stock || {}).map(([color, sizes]) => `
            <div class="inventory-variant">
                <div class="inventory-color">${escapeHTML(color)}</div>

                <div class="inventory-sizes">
                    ${Object.entries(sizes).map(([size, quantity]) => `
                        <div class="inventory-size">
                            <label>Size ${escapeHTML(size)}</label>
                            <input
                                type="number"
                                min="0"
                                value="${Number(quantity) || 0}"
                                data-product="${escapeHTML(product.id)}"
                                data-color="${escapeHTML(color)}"
                                data-size="${escapeHTML(size)}">
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("");

        return `
            <div class="inventory-product">
                <div class="inventory-product-header">
                    <h3>${escapeHTML(product.name)}</h3>
                    <span>Total stock: ${total}</span>
                </div>

                ${variants}

                <button
                    type="button"
                    class="inventory-save"
                    onclick="saveInventory('${escapeQuotes(product.id)}')">
                    Save Stock
                </button>
            </div>
        `;
    }).join("");
}

function saveInventory(productId) {
    const product = getProduct(productId);
    if (!product) return;

    document
        .querySelectorAll("input[data-product]")
        .forEach(input => {
            if (input.dataset.product !== String(productId)) return;
            const color = input.dataset.color || "";
            const size = input.dataset.size || "";
            const quantity = Math.max(0, Number(input.value) || 0);

            if (!product.stock[color]) {
                product.stock[color] = {};
            }

            product.stock[color][size] = quantity;
        });

    saveProducts();
    renderProducts();
    renderHomeProducts();
    renderAdminInventory();
    renderAdminProducts();
    renderAdminDashboard();

    showMessage("Inventory updated successfully.");
}


/* =========================================================
   ADMIN ORDERS
========================================================= */

function renderAdminOrders() {
    const container = document.getElementById("admin-order-list");
    if (!container) return;

    if (!orders.length) {
        container.innerHTML = `
            <div class="empty-admin">
                <h3>No orders yet</h3>
                <p>Customer orders will appear here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(order => {
        const customer = order.customer || {};
        const date = order.date ? new Date(order.date).toLocaleDateString() : "";

        return `
            <div class="admin-order-card">
                <div class="admin-order-header">
                    <strong>${escapeHTML(order.id || "")}</strong>
                    <span>${escapeHTML(date)}</span>
                </div>

                <p>Customer: ${escapeHTML(customer.name || "")}</p>
                <p>Phone: ${escapeHTML(customer.phone || "")}</p>
                <p>Payment: ${escapeHTML(order.payment || "")}</p>
                <p>Total: <strong>${formatPrice(order.total || 0)}</strong></p>
                <p>Status: ${escapeHTML(order.status || "Pending")}</p>
            </div>
        `;
    }).join("");
}


/* =========================================================
   ADMIN CUSTOMERS
========================================================= */

function renderAdminCustomers() {
    const container = document.getElementById("admin-customer-list");
    if (!container) return;

    if (!customers.length) {
        container.innerHTML = `
            <div class="empty-admin">
                <h3>No customers yet</h3>
                <p>Registered customers will appear here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = customers.map(customer => `
        <div class="admin-customer-card">
            <div class="admin-customer-header">
                <strong>${escapeHTML(customer.name || "")}</strong>
                <span>Orders: ${Number(customer.orders || 0)}</span>
            </div>

            <p>Email: ${escapeHTML(customer.email || "")}</p>
            <p>Phone: ${escapeHTML(customer.phone || "Not provided")}</p>
        </div>
    `).join("");
}


/* =========================================================
   MOBILE MENU
========================================================= */

function updateMobileMenuAccessibility() {
    const menu = document.getElementById("mobile-menu");
    const button = document.querySelector(".mobile-menu-button");

    if (menu) menu.setAttribute("aria-hidden", "true");
    if (button) button.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("mobile-menu-overlay");
    const button = document.querySelector(".mobile-menu-button");

    if (!menu || !overlay) return;

    const isOpen = !menu.classList.contains("active");

    menu.classList.toggle("active", isOpen);
    overlay.classList.toggle("active", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));

    if (button) {
        button.setAttribute("aria-expanded", String(isOpen));
    }

    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else if (!document.querySelector(".modal.active")) {
        document.body.style.overflow = "";
    }
}

function closeMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("mobile-menu-overlay");
    const button = document.querySelector(".mobile-menu-button");

    menu?.classList.remove("active");
    overlay?.classList.remove("active");
    menu?.setAttribute("aria-hidden", "true");
    button?.setAttribute("aria-expanded", "false");

    if (!document.querySelector(".modal.active")) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   CONTACT FORM
========================================================= */

function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() || "";
    showMessage(`Thank you${name ? ` ${name}` : ""} for contacting LUNA. We will get back to you soon.`);
    event.target.reset();
}

/* =========================================================
   MODAL SYSTEM
========================================================= */

function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    closeMobileMenu();

    document.querySelectorAll(".modal.active").forEach(other => {
        if (other.id !== id) other.classList.remove("active");
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("active");

    if (!document.querySelector(".modal.active") && !document.getElementById("mobile-menu")?.classList.contains("active")) {
        document.body.style.overflow = "";
    }
}

function setupModalEvents() {
    document.querySelectorAll(".modal").forEach(modal => {
        if (modal.dataset.lunaBound === "true") return;

        modal.dataset.lunaBound = "true";

        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    if (document.body.dataset.lunaEscapeBound !== "true") {
        document.body.dataset.lunaEscapeBound = "true";

        document.addEventListener("keydown", event => {
            if (event.key !== "Escape") return;

            document.querySelectorAll(".modal.active").forEach(modal => {
                closeModal(modal.id);
            });

            closeMobileMenu();
        });
    }
}

/* =========================================================
   HELPERS
========================================================= */

function getProduct(id) {
    return products.find(product => String(product.id) === String(id)) || null;
}

function formatPrice(value) {
    return `${Number(value) || 0} DH`;
}

function showMessage(message) {
    alert(String(message));
}

function scrollToShop() {
    const shop = document.getElementById("shop");
    if (shop) {
        shop.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeQuotes(value) {
    return String(value ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");
}