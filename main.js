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

const fifteen = (e) => {
  return e % 15 === 0;
};

const newArray3 = everyArray(array3, fifteen)

// implement Array.prototype.flatFilter()

var array4 = [[8, 2], 5, 18, [20, 25], 19, [16,7, 2], [11, 28], 13, 37];

function flatFilter(arr, filterMethod){
let x = [];
arr = arr.flat();

arr.reduce((acc, crr) => {
if (filterMethod(crr)) {
x.push(crr);
}
}, 0)
return x
}


function isPrime(e) {
    let boolean = true;
    if(isNaN(e)){
      boolean = false
    }
  for(let i = 2; i < e; i++)
    if(e % i === 0)
    {
    boolean = false;
    };
  return boolean;

}

const newArray4 = flatFilter(array4, isPrime)



// implement Bubble sort

var array5 = [7, 2, 4, 1, 3, 5, 1, 0, 2, 8]

function bubbleSort(arr){

const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1])
      {
      swap(arr, j, j + 1);
      }
    };
  };

  return arr;
};

const newArray5 = bubbleSort(array5)


// implement Insertion sort

var array6 = [7, 2, 4, 1, 3, 5, 1, 0, 2, 8]

function insertSort(arr) {
  
const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
    while (arr[i] < arr[j]){
      swap(arr, i, j);
    }
}}
return arr;
}


const newArray6 = insertSort(array6)



// implement Array.prototype.flatLevel(n) 

var array7 = [[8, 2], 5, 18, [[[20, 25], 19], [16,7, 2]], [11, 28], 13, 37];

function arrayFlatLevel(arr, level){
for (let i = 0; i < level; i++) {
    arr = arr.flat()
    }

return arr;
}

const newArray7 = arrayFlatLevel(array7, 2)

// implement Array.prototype.dualReduce(dualReducer,initial)

//[1,2,3,4,5,6,7,8,9,10].dualReduce((acc,a,b)=>[...acc,a+b],[]) == [3,7,11,15,19]


var array8 = [1,2,3,4,5,6,7,8,9,10,13];

function pairSum(arr) {
let x = [];
const add = (a, b) => a + b;

for (let i = 0; i < arr.length; i+=2){
if(arr[i+1]){
arr[i] = add(arr[i], arr[i+1])
x.push(arr[i])
}
else{
x.push(arr[i])
}
}
return x;
}

const newArray8 = pairSum(array8)


// [1,2,3,4,5,6,7,8,9,10].dualReduce((acc,a,b)=>acc+a*b,0) == 190


var array9 = [1,2,3,4,5,6,7,8,9,10];

function pairDup(arr) {
let x = [];

const add = (a, b) => a * b;
const total = (a, b) => a + b;

for (let i = 0; i < arr.length; i+=2){
if(arr[i+1]){
arr[i] = add(arr[i], arr[i+1])
x.push(arr[i])
}
else{
x.push(arr[i])
}
}
return x.reduce(total);
}

var newArray9 = pairDup(array9)


// [..."hello world"].dualReduce((acc,a,b="")=>acc+b.toUpperCase()+a,"") === "EhLl oOwLrd"

var array10 = ["hello world"];

function upperSwitch(arr){
const upper = (a) => a.toUpperCase();
const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

let x = arr.toString().split('');

for (let i = 1; i < x.length; i+=2){
x[i] = upper(x[i]);
}


for (let j = 0; j < x.length; j+=2){
if(x[j+1]){
swap(x, j, j+1);
}
}

return x.join('');
}

const newArray10 = upperSwitch(array10)
