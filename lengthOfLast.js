function lengthOfLastWord(s) {
    let split = s.trim().split(' ');
    let lastWord = split[split.length-1]
    return lastWord.length;
};
