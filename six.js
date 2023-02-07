function findingBadData(numbers){
    let count=0;
    for(let i=0;i<numbers.length;i++){
       let element= numbers[i];
       if(element<0){
        count=count+1;
       }

    }
    return count;

}
let result=findingBadData([-14,-4,-5,12,16,19,-2,-1]);
console.log(result);