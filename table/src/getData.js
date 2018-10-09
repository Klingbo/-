function getData(targetArr, sourceArr, targetVal) {
  let checkeData = [];
  targetArr.forEach((value, index) => {
    for (let i = 0; i < sourceArr.length; i++) {
      if (sourceArr[i][targetVal] == value) {
        checkeData.push(sourceArr[i]);
      }
    }
  });
  return checkeData;
}; // end of getData

module.exports = getData;