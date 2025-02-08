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