function addToHtml(dataList, targetEle) {
  let temp = "";
  dataList.forEach((value, index) => {
    temp += `<tr>
                <td>${value.product}</td>
                <td>${value.region}</td>
                <td>${value.sale[0]}</td>
                <td>${value.sale[1]}</td>
                <td>${value.sale[2]}</td>
                <td>${value.sale[3]}</td>
                <td>${value.sale[4]}</td>
                <td>${value.sale[5]}</td>
                <td>${value.sale[6]}</td>
                <td>${value.sale[7]}</td>
                <td>${value.sale[8]}</td>
                <td>${value.sale[9]}</td>
                <td>${value.sale[10]}</td>
                <td>${value.sale[11]}</td>
             </tr>`;
  });
  targetEle.innerHTML = temp;
};

module.exports = addToHtml;
