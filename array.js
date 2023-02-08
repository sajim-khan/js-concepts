const products = [
    { name: 'phone', price: 15000},
    { name: 'Laptop', price: 45000},
];

var item = products[1];
var items = products[0];
console.log(item)
console.log(items)


// const product = {
//     '0' : 15,
//     '1' : 25,
//     '2' : 35
// }

//Array like object
function add (num1 , num2) {
    console.log(num1, num2);
    console.log(arguments);
}
add(10, 20, 43, 54, 67, 32, 54, 89);