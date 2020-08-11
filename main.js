// implement your own version of Array.prototype.map() using a for loop

var array1 = [1,2,3,4];

function arrayMap(arr, mapMethod){
for ( let i = 0; i < arr.length; i++ ){
arr[i] = mapMethod(arr[i]);
}
return arr;
}
//example mapMethod
function mapDuplicate(e){
e *= 2;
return e;
}

const newArray1 = arrayMap(array1, mapDuplicate)

//implement Array.prototype.filter() using Array.prototype.reduce()

var array2 = [15, 350, 10, 15, 18, 85, 115, 145, 70];

function filterArray(arr, filterMethod){
let x = []
arr.reduce((acc, crr) => {
if (filterMethod(crr))
{
x.push(crr)
}
}, 0)
return x;
}

function aboveHundred(e){
if (e > 100)
{
return true;
}
else
{
return false;
}
}


const newArray2 = filterArray(array2, aboveHundred)

// implement Array.prototype.every() using Array.prototype.some()

var array3 = [0, 75, 215, 35, 15, 65, 80, 90, 120];

function everyArray(arr, someMethod){
let boolean = true;
for (let i = 0; i < array3.length; i++){
let x = [arr[i]];
x.some(someMethod);
if (!x.some(someMethod))
{
boolean = false;
}
}
return boolean;
}

const fifteen = (e) => e % 15 === 0;


// implement Array.prototype.flatFilter()

var array4 = [[8, 2], 5, [18, [20, 25]], 19, [[[16,7, 2], [11, 28], 13]], 37];

function flatFilter(arr, depth, filterMethod){
let x = [];
let y = 0;
let z;

arr= arr.flat(depth);
console.log(arr)
arr.reduce((acc, crr) => {
console.log(crr)
console.log(crr[0])
console.log(crr.length)

for (let i = 0; i < crr.length; i++)



if (filterMethod(crr)) {
x.push(crr);
}
}, 0)
return x
}

function isPrime(e) {
    let boolean = true;
  for(let i = 2; i < e; i++)
    if(e % i === 0)
    {
    boolean = false;
    };
  return boolean;

}

const newArray4 = flatFilter(array4, 0, isPrime)

console.log(newArray4)
