document.addEventListener('DOMContentLoaded', function () {
    // Select elements and set up initial variables
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-btn');
    let cart = [];

    // Add click event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add click event listener to "Checkout" button
    checkoutButton.addEventListener('click', checkout);

    // Product data
    const products = [
        { id: '1', name: 'Product 1', price: 250.00 },
        { id: '2', name: 'Product 2', price: 150.00 },
        { id: '3', name: 'Product 3', price: 120.00 },
        { id: '4', name: 'Product 4', price: 200.00 },
        // Add more products as needed
    ];

    // Function to add a product to the cart
    function addToCart(event) {
        const product = event.target.closest('.product');
        const productId = product.getAttribute('data-id');
        const selectedProduct = products.find(p => p.id === productId);

        if (selectedProduct) {
            const cartItem = {
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price
            };

            cart.push(cartItem);
            updateCart();
        }
    }

    // Function to handle checkout
    function checkout() {
        // For simplicity, let's just clear the cart when checking out
        cart = [];
        updateCart();
    }

    // Function to update the cart display
    function updateCart() {
        renderCartItems();
        calculateTotal();
    }

    // Function to render cart items
    function renderCartItems() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(listItem);
        });
    }

    // Function to calculate and display the total
    function calculateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2);
    }
});
