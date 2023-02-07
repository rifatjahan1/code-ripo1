function evenOdd(number){
    const remainder=number%2;
    if (remainder==0){
        return true;
    }
    else{
        return false;
    }
}
let str="hellow";
let strString=parseInt(str);
const myNumber=evenOdd(strString);
console.log(myNumber);