// Task 1: Object Properties
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; // object as customer

console.log(`Name: ${customer.name}`); // logging name of customer
console.log(`Age: ${customer.age}`); // logging age of customer
console.log(`Email: ${customer.email}`); // logging email of customer

// Task 2: Object Methods
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
        console.log(`Order Id: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`);
    }
}; // Console log of customer order with details
order.displayOrder();

// Task 3: Array Manipulation
let cartItems = ["chips", "Salsa", "plates"]; // array of items
cartItems.push("soda"); // adding new item
cartItems.pop(); // removing last item
cartItems.unshift("ice cream"); // adding item to beginning
cartItems.shift(); // removing beginning item

console.log(cartItems);

// Task 4: Map Method
let prices = [100, 200, 300]; // array of prices
const discount = 0.9; // 10% discount
let discountedPrices = prices.map(prices => prices * discount)

console.log(discountedPrices);

// Task 5: Filter Method
let inventory =[6, 7, 0, 4, 8, 10, 0]; // array of inventory
let availableProducts = inventory.filter(stock => stock > 0); // filter out no stocks

console.log(availableProducts);

// Task 6: Reduce Method
let sales = [500, 300, 200, 400]; // array of sales
let totalRevenue = sales.reduce((total, sales) => total + sales, 0); // function for total revenue

console.log(totalRevenue);