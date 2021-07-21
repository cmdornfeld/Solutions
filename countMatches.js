const countMatches = (items, ruleKey, ruleValue) => {
    let count = 0;
    let index;
    switch(ruleKey){
        case "type":
            index = 0;
            break;
        case "color":
            index = 1;
            break;
        case "name":
            index = 2;
            break;
    }
    for (let i=0; i<items.length; i++) {
        if (items[i][index] === ruleValue) {
            count++;
        }
    }
    return count;
};