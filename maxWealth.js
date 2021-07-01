const maximumWealth = (accounts) => {
    let max = 0;
    for (account of accounts) {
        let accountSum = account.reduce((a,b) => a + b);
        if (accountSum > max) {
            max = accountSum;
        }
    }
    return max;
}