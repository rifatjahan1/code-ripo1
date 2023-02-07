
//take a value 6 and passes it as a argument, 
function mindGame(number){
    const result=number*3;
    const sum=result+10;
    const divi=sum/2;
    const totalResult=divi-5;
    return totalResult;
}
let num=6;
let ourResult= mindGame(num);
console.log(ourResult); 

//solution3
function isLGSeven(number){
    const subNum=number-7;
    if(subNum<7){
        return subNum;
    }
    else{
        return inputNum*2;
    }
    }
    const inputNum=14;
    const myNum=isLGSeven(inputNum);
    console.log(myNum);

    //solution4

    function findingBadData(numbers){
        let badData=0;
        for(let i=0;i<numbers.length;i++){
           let element= numbers[i];
           if(element<0){
            badData=badData+1;
           }
    
        }
        return badData;
    
    }
    let result=findingBadData([-14,-4,-5,12,16,19,-2,-1]);
    console.log(result);

    //solution 5

    function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
        const firstFriendTotalGems= firstFriendGems*21;
        const secondFriendTotalGems= secondFriendGems*32;
        const thirdFriendTotalGems= thirdFriendGems*43;
        const friendGemsSum= firstFriendTotalGems+secondFriendTotalGems+thirdFriendTotalGems;
        if(friendGemsSum>1000*2){
        const sub=friendGemsSum-2000;
        return sub;
        }
        else{
            return friendGemsSum;
        }
    
    
    }
    const friend1Gems=20;
    const friend2Gems=30;
    const friend3Gems=40;
    let totalGems=gemsToDiamond(friend1Gems, friend2Gems,friend3Gems); 
    console.log(totalGems);
    
    
    