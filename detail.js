function loadDetailScreen(product) {
    // Store data
    localStorage.setItem("product", product);

    // Retrieve data
    let storedProduct = localStorage.getItem("product");

    return "Displaying details for " + storedProduct;
}
