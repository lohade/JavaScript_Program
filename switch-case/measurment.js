/*
"use strict";
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("\n1:Feet to Inch:\n2:Inch to Feet:\n3:Feet to Meter:\n4:Meter to Feet",function(choice){
    console.log(choice);*/

let choice=4;
switch (choice) {
    case 1:
        let feet1 =85;
        inch=feet1 * 12;
        console.log("feet to inch is:"+inch);
        break;
 
    case 2:
        let input1=12;
        let feet=input1 / 12;
        console.log("inch to feet is:"+feet);
        break;
        
    case 3:
        let foot =40;
        let meter=foot * 0.3048;
        console.log("feet to meter is:"+meter);
        break;

     case 4:
         let meter1=1000;
         let feet2=meter1 * 3.2808;
         console.log("meter to feet is:"+feet2);
         break;   
}
//});

