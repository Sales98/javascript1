function to_verify(){
    const myBody = document.getElementsByTagName("body")[0];

    // creates <table> and <tbody> elements
    const myTable = document.createElement("table");
    const myTableBody = document.createElement("tbody");

    // creating all cells
    for (let j = 0; j < 9; j++) {
      // creates a <tr> element
      const myCurrentRow = document.createElement("tr");

      for (let i = 0; i < 9; i++) {
        // creates a <td> element
        const myCurrentCell = document.createElement("td");
        // appends the cell <td> into the row <tr>
        myCurrentRow.appendChild(myCurrentCell);
      }
      // appends the row <tr> into <tbody>
      myTableBody.appendChild(myCurrentRow);
    }

    // appends <tbody> into <table>
    myTable.appendChild(myTableBody);
    // appends <table> into <body>
    myBody.appendChild(myTable);
    // sets the border attribute of myTable to 2;
    myTable.setAttribute("border", "2");
    myTable.setAttribute("width", "300px")
    myTable.setAttribute("height", "300px")
  }
  
  var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6"; 
array_number[1]= "9 8 3 7 6 2 5 1 4"; 
array_number[2]= "1 5 6 8 9 4 7 2 3"; 
array_number[3]= "2 3 9 1 8 5 4 6 7"; 
array_number[4]= "7 4 1 6 3 9 2 5 8"; 
array_number[5]= "5 6 8 2 4 7 1 3 9"; 
array_number[6]= "8 7 2 9 1 3 6 4 5"; 
array_number[7]= "3 9 5 4 2 6 8 7 1"; 
array_number[8]= "6 1 4 5 7 8 3 9 6";

//function that returns a 2 dimensions array
function F11(arr){
    let result_arr = [];
    arr.map(array_number => {
        let content_arr = array_number.split(" ");

        result_arr.push(content_arr);
    })
    return result_arr
}

function F12(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(myBody);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(result_arr[0]);
  generateTable(table, result_arr);