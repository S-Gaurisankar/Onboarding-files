var printDetails = function (product) {
    product.map(function (item) {
        console.log(item.id, item.name, item.price, item.category);
    });
};
var SUVs = [
    { id: 1, name: 'Harrier', price: 180, category: 'Car' },
    { id: 2, name: 'XUV 700', price: 190, category: 'Car' },
    { id: 3, name: 'Scorpio', price: 200 }
];
printDetails(SUVs);
