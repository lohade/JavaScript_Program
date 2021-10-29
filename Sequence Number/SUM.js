function get5random(){
    return Math.round(Math.random() * 89 + 10);
}

let sum=0;
for(c=1;c<=5;c++){
    let number=get5random();
    sum+=number;
}
console.log("summation of number"+sum);
console.log("average of number:" +sum /5);