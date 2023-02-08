// One way
//const numbers = [20, 43, 54, 67, 32, 54, 89];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// Updated way 
const numbers = [20, 43, 54, 67, 32, 54, 89];
for(const number of numbers){
    //console.log(number);
}

const products = [
    {id : 1, name : 'Xiaomi', price : 20000},
    {id : 2, name : 'iphone', price : 15000},
    {id : 3, name : 'lenevo', price : 22000},
    {id : 4, name : 'dell', price : 25000},
    {id : 5, name : 'samsung', price : 10000},
    {id : 6, name : 'walton', price : 32000},
    {id : 7, name : 'nokia', price : 23000},
    {id : 8, name : 'oppo', price : 29000},
    {id : 9, name : 'hp laptop', price : 67000},
    {id : 10, name : 'Xiaomi', price : 21000},
]

// for(const product of products){
//     console.log(product);
// }

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
 let result = matchProducts(products, 'xiaomi');
 console.log(result);
