function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    const firstFriendTotalGems= friend1Gems*21;
    const secondFriendTotalGems= friend2Gems*32;
    const thirdFriendTotalGems= friend3Gems*43;
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