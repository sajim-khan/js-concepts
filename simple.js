// //increment
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log(sum)


// //decrement
// let add = 0;
// for (let i = 5; i >=1; i--) {
//     add = add + i;
// }
// console.log(add)


function sum(i){
    if(i == 5){
        return 5;
    }
    return i + sum(i + 1);
}
const result = sum(1)
console.log(result)

/*
    5 + factorial(4)
    5 + 4 + factorial(3)
    5 + 4 + 3 + factorial(2)
    5 + 4 + 3 + 2 + factorial(1)
    5 + 4 + 3 + 2 + 1
 */