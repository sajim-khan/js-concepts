//problem 1: Let's play a mind game

// Here i have a function name mindGame which input is a positive number. In this problem i have to do that at first i take a positive input number than i have to do that number multiply by 3 than 10 adding with that result than divided by 2 with that result than minus 5 from the previous result and that is the final output. The solution is given bellow.

function mindGame(number) {                         //declare a function name mindGame
    if (typeof number == 'number') {
        const mulNumber = number * 3;               
        const addNumber = mulNumber + 10;
        const divNumber = addNumber / 2;
        const subNumber = divNumber - 5;
        return subNumber;
    } else {
        return "Input should be a number";
    }
}
//const output = mindGame(5);   //call the function and put it in a variable
//console.log(output);          // print the output variable which show the result



//problem 2: Finding even or odd

//In this problem i have to take a string as an input. Than i have to count the string length ,after that i have to apply condition for check the length of the string which is even or odd. The solution is given bellow.

function evenOdd(string) {                      //declare a function name evenOdd
    if (typeof string == 'string') {                
        const stringLength = string.length;
        if( stringLength % 2 == 0){            //check the string length 
            return "even";                     // if string reminder is 0 than it even otherwise odd
        }                                           
        else{
            return "odd";
        }
    }
    else {
        return "Input should be string";
    }
}
//const output = evenOdd('chatgpt');              //call the function and put it in a variable
//console.log(output);                            //print the output variable which show the result



//Problem 3: Is Less or Greater than seven

//In this problem i have to take a  input. At first I have to make difference between 7 and input value. After that if that difference is less than 7 than return the value as an output. Otherwise if that difference is greater than 7 than return double of the difference value as an output. The solution is given bellow.


function isLGSeven(number){                        //declare a function name isLGSeven
    if(typeof number == 'number'){
        const output = number -7;
        if(output < 7){
            return output;
        } else{
            return number * 2;
        }
    } else{
        return "Input should be number";
    }
}
//const output = isLGSeven(15);                //call the function and put it in a variable
//console.log(output);                          // print the output variable which show the result



//problem 4: Finding Bad data

// In this problem given a function which called findingBadData and i have to take a array as an input . In this array number can be negative(less than 0) or positive(greater than or equal 0). If any number of this array is negative than we call it Bad data otherwise we call it Good data.The solution is given bellow.

function findingBadData(ages) {                     //declare function findingBadData  
    if (Array.isArray(ages)) {
        let bad = [];
        for (const age of ages) {
            if (typeof age == 'number') {
                if (age < 0) {
                    bad.push(age);
                }
            }
            else {
                return "Elements should be number";
            }
        }
        const count = bad.length;
        return count;
    }
    else {
        return "Input should be array";
    }
}
//const output = findingBadData([1,2,-5]);       //call the function and put it in a variable
//console.log(output);                            // print the output variable which show the result



//Problem 5: Convert your gems to diamond

//In this problem given a function which called gemsToDiamond .Here it will took 3 input as a number. Here first input is multiplied by 21 ,2nd input is multiplied by 32, 3rd input is multiplied by 43.than i have to add all 3 number as a total number . Than if the total number is greater than 2000 than you have to minus the the number from total number . The solution is given bellow.

function gemsToDiamond(friend1, friend2, friend3) {         //declare function gemsToDiamond  
    if ((typeof friend1 == 'number') && (typeof friend2 == 'number') && (typeof friend3 == 'number')) {
        const friend1Diamond = 21 * friend1;
        const friend2Diamond = 32 * friend2;
        const friend3Diamond = 43 * friend3;
        const total = friend1Diamond + friend2Diamond + friend3Diamond;

        if (total > 2000) {
            return total - 2000;
        }
        else {
            return total;
        }
    }
    else {
        return "input should be a number";
    }
}
//const output = gemsToDiamond(100,5,1);     //call the function and put it in a variable
//console.log(output);                      // print the output variable which show the result