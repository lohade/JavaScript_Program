firstNumber=Math.floor(Math.random() * 1000 + 100);
secondNumber=Math.floor(Math.random() * 1000 + 100);
third=Math.round(Math.random() * 899 + 100);
fourthNumber=Math.floor(Math.random() * 899);
fifthNumber=Math.floor(Math.random() * 1000 + 100);

console.log(firstNumber,secondNumber,third,fourthNumber,fifthNumber);
if(firstNumber>secondNumber && secondNumber>third && third>fourthNumber && fourthNumber>fifthNumber){
    console.log("maximum number is:" +firstNumber);
    console.log("minimum number is:" +fifthNumber);
}
else if(fifthNumber>fourthNumber && fourthNumber>third && third>secondNumber && secondNumber>firstNumber){
    console.log("maximum number is:" +fifthNumber);
    console.log("minimum number is:" +firstNumber);
}
else{
    console.log(Math.max(firstNumber,secondNumber,third,fourthNumber,fifthNumber));
    console.log(Math.min(firstNumber,secondNumber,third,fourthNumber,fifthNumber));
}
