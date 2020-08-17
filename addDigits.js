function addDigits(num) {
    while(num > 9){
        let total = num.toString().split('').reduce((acc, curr) => acc + +curr, 0);
        num = total;
    }
    return num;
};
