const accountId = 123125;
let accountEmail = "mohit@gmail.com";
var accountPassword = "123123";
let cityName = "japur";


/*
best is not uses of var because problem with var No Block & functional scope 
*/


accountEmail = "moh@gmail.com";
accountPassword = "12322";
cityName = "sonipat";

console.table([accountEmail, accountPassword, cityName]);

/*
let example 
if (true) {
var a = 10;
}                                  is matlb if ka andar banaya hai or bahar bhi mil rha hai
console.log(a);
*/


/* let = let is a modren way to creat variable. it  work only inside the the block {} 
   where it is created. it value can be changed, but not re-declared.
*/

// var = var is a old way to creat variable. its value can be changed and it can be re-declared.

// const = const is used for fixed values. once a value is assigned, it cannot be changed.