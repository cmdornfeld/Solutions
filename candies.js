const kidsWithCandies = (candies, extraCandies) => {
    console.log(Math.max(...candies));
    return candies.map(kid => kid + extraCandies >= Math.max(...candies));
};