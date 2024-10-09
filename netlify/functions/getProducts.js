exports.handler = async (event) => {
    // Sample product data
    const products = [
        { id: 1, name: 'Product A', price: 29.99 },
        { id: 2, name: 'Product B', price: 19.99 },
        { id: 3, name: 'Product C', price: 39.99 },
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(products),
    };
};
