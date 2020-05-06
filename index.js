// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    //  const newArray = []
    //  newArray.push(array[0],array[1])
    return array.slice(0,2)
};

const returnLastTwoDrivers = (array) => {
    // const newArray = []
    // newArray.push(array[array.length - 2],array[array.length - 1])
   return array.slice(-2)
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = (int) => {
    return function(fare){
        return fare * int
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers,orderDrivers) => {
   return orderDrivers === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers);


}