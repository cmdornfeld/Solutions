const kidsWithCandies = (candies, extraCandies) => {
    console.log(Math.max(...candies));
    return candies.map(kid => kid + extraCandies >= Math.max(...candies));
};

console.log(kidsWithCandies([2,3,5,1,3], 3));