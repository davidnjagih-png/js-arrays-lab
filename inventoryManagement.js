// Write your code here
let products = ["laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
  console.log("Product added:", productName);
  console.log("Updated products:", products);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    console.log(
      "Updating product at position",
      position,
      "from",
      products[position],
      "to",
      newName,
    );
    products[position] = newName;
    console.log("Updated products:", products);
  } else {
    console.log("Invalid position:", position);
  }
}

function removeLastProduct() {
  if (products.length > 0) {
    let removed = products.pop();
    console.log("Removed product:", removed);
    console.log("Updated products:", products);
  } else {
    console.log("No products to remove.");
  }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct:
    typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== "undefined" ? addProduct : undefined,
  updateProductName:
    typeof updateProductName !== "undefined" ? updateProductName : undefined,
  removeLastProduct:
    typeof removeLastProduct !== "undefined" ? removeLastProduct : undefined,
  products,
};
