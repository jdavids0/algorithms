// 1.
function print1To255(){
    for(var i=1; i<=255; i++){
        console.log(i);
    }
    
}
console.log(print1to255());

// 2. Print all odd integers from 1 to 255. 

function printOdd255(){
    for(var i=1; i<=255; i++){
        if (i%2==1) {
            console.log(i);
        }
    }
}
printOdd255();

// 3. Print integers from 0 to 255, and with each integer print the sum so far. 

function printIntsandSum(){
    var sum = 0
    for (i=0; i<=255; i++){
        console.log(i)
        sum+=i;
        console.log(sum)
    }

}
printIntsandSum();

// 4. Given an array, find and print its largest element. 

var arr = [1,2,3,4,5,6]

function printArrayVals(arr){
    for (i=0; i<=arr.length-1; i++)
    console.log(arr[i]);
}

printArrayVals();

// 5. Given an array, find and print its largest element. 
// so I need to print the greatest integer, i.e. 6 -> set var to arr[0] as default, so it's equal to first number in array rather than 0 (arry might have negative numbers)

var arr = [1,2,3,4,5,6]

function printMaxOfArray(arr){
    var max = arr[0]
    for (i=0; i<=arr.length-1; i++){
        if (max<arr[i])
        max = arr[i];
    }
return max;

}

console.log ('Max number is ' + printMaxOfArray(arr));

// 6. Analyze an array’s values and print the average. 

var arr = [1,2,3,5,6]

function printAverage(arr){
    var max = arr [0];
    for (i=0; i<=arr.length-1; i++){
        max+=arr[i];
        avg = max/arr.length;

    }

return avg;
}

printAverage(arr)
console.log ('The average is ' + printAverage(arr));

// 7. Create an array with all the odd integers between 1 and 255 (inclusive).  

function returnOdds(){
    var arr=[];
    for(var i=1; i<=255; i++){
        if(i%2==1){
            arr.push(i);
        }
    }
    
return arr;
}

returnOdds();
console.log(returnOdds()); // need to console.log function, not arr, because arr only exists inside the function

// 8. Square each value in a given array, returning that same array with changed values. 

var arr = [2,3,4,5,6];

function squareArray(newArr){
    for(var i=0; i<=arr.length-1; i++){
        arr[i]= arr[i]*arr[i];
    }

return newArr;
}

/* squareArray(arr); */
console.log(squareArray(arr));

// 9. Given an array and a value Y, count and print the number of array values greater than Y. 

var array = [1,2,3,4,5,6];
var num = 2.5;

function greaterThan(arr, y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
            console.log(arr[i]+" is greater than y");
        }
    }
return count;
}

console.log(greaterThan(array, num));

// 10. Return the given array, after setting any negative values to zero. 

var arr = [-5,-3,-1,2,7,9]

function zeroOut(arr){
    console.log(arr);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i]=0;
        }
    }
return arr;
}

console.log(zeroOut(arr));
// function gets called, then returns array after it's gone through function

// 11. Given an array, print the max, min and average values for that array.

var array = [3, 2, 7, 8, 11, 21]

function printMaxMinAvg(arr){
    var sum = 0;
    var avg = 0;
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i<arr.length; i++){
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
avg = sum/arr.length;
console.log(max);
console.log(min);
console.log(avg);
}

printMaxMinAvg(array);

// 12. given an array, move all values forward (i.e. to the left) by on index, dropping the first value, and leave a 0 (i.e. zero) value at the end of the array

var array = [3, 2, 7, 8, 11, 21]

function shiftArrayValsLeft (arr){
    for (var i = 0; i<arr.length; i++){
    arr[i]=arr[i+1];
    }

    arr.push(0);
return arr
}

console.log(shiftArrayValsLeft(array));

// 13. Given an array of numbers, replace any negative values with the string 'Dojo'.

var array = [-15, 3, 7, 41, -16, 5, -21]

function Dojo(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
return arr
}

console.log(Dojo(array));