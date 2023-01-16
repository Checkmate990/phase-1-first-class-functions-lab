let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const  createFareMultiplier = function(themultiplier){
    return function(themultiplied){
        return themultiplied * themultiplier;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)



const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };