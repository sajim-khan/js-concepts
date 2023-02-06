function milesToKm(miles){
    const km = miles * 1.609;
    return km;
}
const kilometer = milesToKm(2)
//console.log('kilometer :',kilometer);

function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
  }
  //console.log(print(1,2,3));

  const number = -78; 
  const answer = Math.abs(number); 
  //console.log(answer);

  var a=2; 
  var b=3; 
  if(a < b){
      console.log("Hello");
  }

  function add(a, b){
    return a + b;
  }
  //console.log(add("adam" + "eve"))

  const nayoks=['Bangla Bhai','English Bhai','Korean Bhai','Turkish Bhai'] 
  for (const nayok of nayoks) {
    console.log(nayok);
  }

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);