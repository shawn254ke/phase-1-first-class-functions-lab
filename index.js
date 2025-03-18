// Return first two drivers from an array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return last two drivers from an array
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that creates a fare multiplier
  const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the provided function
  const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
  };
  
  
  