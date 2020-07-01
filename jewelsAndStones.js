function numJewelsInStones(J, S) {
    let jewelCount = 0;
    let jewelArr = J.split('');
    let stonesArr = S.split('');
    for(let i = 0; i < jewelArr.length; i++){
        for(let j = 0; j < stonesArr.length; j++){
            if(jewelArr[i] === stonesArr[j]){
                jewelCount++
            }
        }
    }
    return jewelCount;
};