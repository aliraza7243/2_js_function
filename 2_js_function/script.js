'use strict'

function concatenateStrings(value1, value2) {
    console.log(value1+value2);
}
console.log(concatenateStrings('abc','cdf'));



function extractEmails(str) {
    var list = str.split(";");
    for (let index = 0;index<list.length; index++) {
        console.log(list[index]);  
    }
}
var str="ali@gmail.com;raza@gmail.com;butt@gmail.com";
extractEmails(str);



function findAllOccurences(arr, item) {
    var occurances=0;
    for (let index = 0; index < arr.length; index++) {
        if(item==arr[index]){
            occurances++;
        }
        
    }
    console.log(occurances);
 }
 var arr=[1,2,3,1,3,2,1];
 findAllOccurences(arr,1)