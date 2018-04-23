// Code your solution in this file
function findMatching(drivers, string) {
  const matchedArr = drivers.filter(
    function (driver) {
      return driver.toUpperCase() === string.toUpperCase();
    }
  );
  
  return matchedArr;
}

function fuzzyMatch(drivers, string) {
  const matchedArr = drivers.filter(
    function(driver) {
      const upperCaseDriver = driver.toUpperCase();
      const upperCaseString = string.toUpperCase();
      return upperCaseDriver.startsWith(upperCaseString);
    }
  );

  return matchedArr;
}

function matchName(drivers, string) {
  const matchedArr = drivers.filter(
    function(driver) {
      const name = driver.name.toUpperCase();
      return name === string.toUpperCase();
    }
  );

  return matchedArr;
}
