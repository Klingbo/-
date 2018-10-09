// import {addToHtml} from './src/addToHtml';
// import { checkAll, checkItemList, getChecked } from "./src/check";
// import {getData} from './src/getData';
// import {sourceData} from './src/ife31data';
let addToHtml = require('./src/addToHtml');
let getData = require('./src/getData');
let sourceData = require('./src/ife31data');
let checkAll = require('./src/check').checkAll;
let checkItemList = require('./src/check').checkItemList;
let getChecked = require('./src/check').getChecked;



let regionCheckAll = document.getElementById("region-check-all");
let regionCheckItems = document.querySelectorAll("#region-check-item");
let productCheckAll = document.getElementById("product-check-all");
let productCheckItems = document.querySelectorAll("#product-check-item");
let btnSubmit = document.getElementById("btn");
let tbody = document.getElementById("tbody");

regionCheckAll.onclick = function(e) {
  checkAll(regionCheckAll, regionCheckItems);
}; //end of regionCheckAll.onclick

regionCheckItems.forEach((value, index) => {
  value.onclick = function(e) {
    checkItemList(regionCheckAll, regionCheckItems);
  };
}); //end of forEach
productCheckAll.onclick = function(e) {
  checkAll(productCheckAll, productCheckItems);
}; //end of productCheckAll.onclick

productCheckItems.forEach((value, index) => {
  value.onclick = function(e) {
    checkItemList(productCheckAll, productCheckItems);
  };
}); //end of forEach

btnSubmit.onclick = function(e) {
  let regions = getChecked(regionCheckItems);
  let products = getChecked(productCheckItems);
  let regionArr = getData(regions, sourceData, "region");
  let productArr = getData(products, regionArr, "product");
  addToHtml(productArr, tbody);
}; //end of btnSubmit.onclick
