/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250 ;
let zakat_percentage = 2.5/100 ;
let zakat = x * zakat_percentage ;

console.log("the value of zakat for" , x , "is" , zakat )





/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let number = [1, 7, 9, 45]


let name = ["Str", "alex", "moh"]


let paraghraph1 =  ['the', 'fox', 'over', 'lazy', 'dog']

console.log("number" , "name" , "paraghraph1")


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]

let  indexoff = fruits.indexOf("Banana");
let  index = fruits.indexOf("Tomato");
console.log(index) 

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const Favorite_Food = [
    "mansaf",
    "spaghetti",
    "shakshwkah"
  ] 
  const Favorite_Sport = [
    "football",
    "Tennis",
    "walking"
  ]
  const Favorite_Movie = [
    " sherlock holmes 2009",
    "twilight",
    "before sunrise"
  ]
  console.log("the value of Favorite_Food for" , Favorite_Food , "the value of Favorite_Food for" , Favorite_Sport  , "the value of Favorite_Movie for" , Favorite_Movie )


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

var array = [1,5,9] 
arrayfirst = array[0]
console.log(arrayfirst) 




/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

var array = [ "a" , "b" , "c" ,"d" ]
arraylast = array [array.length-1]
console.log(arraylast) 

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift()
array.shift()
array.shift()

console.log(array)
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);

console.log(array) 

array.push(10)
console.log(array) 


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [1, 3, 4, 6, 8, 9, 10]
array2.shift()
array2.shift()
array2.shift()
array2.shift()
array2.shift()
console.log(array2)

array2.pop()
console.log(array2)
array2.unshift(5);
console.log(array2)

array2.push(-7)
array2.push(3.5)
console.log(array2)







/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

 var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

 arr1.sort(function(a, b){return a-b});
 console.log(arr1)

