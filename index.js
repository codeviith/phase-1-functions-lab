const hq = 42;
const ftEachBlock = 264;

function distanceFromHqInBlocks(distance) {
    return Math.abs(hq - distance);
}

function distanceFromHqInFeet(distance) {
    return Math.abs((hq - distance) * ftEachBlock);
}

function distanceTravelledInFeet(distance1, distance2) {
    return Math.abs((distance2 - distance1) * ftEachBlock);
}

function calculatesFarePrice(start, destination) {
    let ftTravelled = Math.abs(destination - start) * ftEachBlock;

    if(ftTravelled < 400) {
        return 0;
    } else if(ftTravelled > 400 && ftTravelled <= 2000) {
        return ((ftTravelled - 400) * 0.02);
    } else if(ftTravelled > 2000 && ftTravelled <= 2500) {
        return 25;
    } else if(ftTravelled > 2500) {
        console.log(ftTravelled);
        return "cannot travel that far";
    }
}





