const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Convert price to a number explicitly
    const price = Number(item.price);

    if (typeof price !== 'number' || isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    this.items.push({ ...item, price });
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Outputs: Total: $103.45
