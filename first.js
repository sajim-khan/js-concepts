const myInches = 84;
const myFeet = myInches/12;
//console.log('My height in feet which is',myFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 84;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);