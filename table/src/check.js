exports.checkAll = function(checkall, checkItemList) {
  if (checkall.checked) {
    checkItemList.forEach((value, index) => {
      value.checked = true;
    }); //end of forEach
  } else {
    checkItemList.forEach((value, index) => {
      value.checked = false;
    }); //end of forEach
  } //end of if
}; // end of checkAll

exports.checkItemList = function(checkall, checkItemList) {
  let trueNum = 0;
  checkItemList.forEach((value, index) => {
    if (value.checked) {
      trueNum += 1;
    }
  });
  if (trueNum == checkItemList.length) {
    checkall.checked = true;
  } else {
    checkall.checked = false;
  }
}; // end of checkItemList

exports.getChecked = function(checkboxList) {
  let checkedList = [];
  checkboxList.forEach((value, index) => {
    if (value.checked) {
      checkedList.push(value.value);
    }
  });
  return checkedList;
}; //end of getChecked
