interface Product {
    id : number;
    name : string;
    price : number;
    category? : string;
}

const printDetails = (product) => {
    product.map((item) => {
        console.log(item.id, item.name, item.price, item.category);
    });}

const SUVs : Product[] = [
    {id:1, name:'Harrier', price:180, category:'Car' },
    {id:2, name:'XUV 700', price:190, category:'Car' },
    {id:3, name:'Scorpio', price:200 }
];

printDetails(SUVs);