function isValid(s){
    const mirror = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            mirror.push(')');
        }
        else if(s[i] === '{'){
            mirror.push('}');
        }
        else if(s[i] === '['){
            mirror.push(']');
        }
        else if(s[i] !== mirror.pop()){
            return false;
        }
    }
    return mirror.length === 0;
}