const judgeCircle = (moves) => {
    let origin = {x: 0, y: 0};
    for (char of moves) {
        switch (char) {
            case 'R':
                origin.x++;
                break;
            case 'L':
                origin.x--;
                break;
            case 'U':
                origin.y++;
                break;
            case 'D':
                origin.y--;
                break;
        }
    }
    return origin.x === 0 && origin.y === 0;
};