//problem 1: Let's play a mind game
// Here i have a function name mindGame which input is a positive number. In this problem i have to do that at first i take a positive input number than i have to do that number multiply by 3 than 10 adding with that result than divided by 2 with that result than minus 5 from the previous result and that is the final output.

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
//In this problem i have to take a string as an input. Than i have to count the string length ,after that i have to apply condition for check the length of the string which is even or odd.

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
//In this problem i have to take a  input. At first I have to make difference between 7 and input value. After that if that difference is less than 7 than return the value as an output. Otherwise if that difference is greater than 7 than return double of the difference value as an output.


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
//const output = isLGSeven(-15);                       //call the function and put it in a variable
//console.log(output);


//problem 4: Finding Bad data
// In this problem given a function which called findingBadData and i have to take a array as an input . In this array number can be negative(less than 0) or positive(greater than or equal 0).