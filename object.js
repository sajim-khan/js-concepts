//object -> object -> object 
//object -> Array -> object 
const nayok = {
    name : 'Sakib Khan',
    id : 11223,
    age : 28,
    friends : ['sajim', 'shuvo', 'jihad', 'hasib'],
    movies : [{name : 'no 1 sakib khan', year : 2016}, {name : 'Rongbaz', year : 2018}],
    car : {
        brand : 'Toyota',
        model : '2018',
        price : '$50000',
        manufacturer : {
            name : 'Toyota',
            ceo : 'elon mask',
            country : 'US'
        }
    },
    act :function(){
        console.log("Acting like sakib khan");
    }
}
console.log(nayok);
console.log(nayok.act);
nayok.act()