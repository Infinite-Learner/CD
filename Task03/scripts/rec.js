var cell_Value = 1
var submit = document.getElementsByClassName("submit-btn");
var inpField = document.getElementsByClassName("input-container");
console.log(inpField);
inpField[0].addEventListener("focusin",()=>{
    document.querySelectorAll("h4").forEach(ele=>ele.style.color="#00ff00");
    document.querySelectorAll(".input-area").forEach(ele=>ele.querySelectorAll("label").forEach(ele=>ele.style.color="#00ff00"));
});
inpField[0].addEventListener("focus out",()=>{
    document.querySelectorAll("h4").forEach(ele=>ele.style.color="#1d5822")
    document.querySelectorAll(".input-area").forEach(ele=>ele.querySelectorAll("label").forEach(ele=>ele.style.color="#1d5822"));
});
submit[0].addEventListener("click",()=>{
    var table_con = document.getElementsByClassName('output-container')[0];
    var table = document.createElement('table');
    var tbody= document.createElement("tbody")
    var  rowinp = document.getElementById("row-inp");
    var colinp = document.getElementById("col-inp");
    if(isNaN(parseInt(rowinp.value))||isNaN(parseInt(colinp.value))||rowinp.value<1||colinp.value<1) return alert("Enter Valid Inputs.");
    cell_Value = 1; 
    rowVal = parseInt(rowinp.value);
    colVal = parseInt(colinp.value);
    table_con.innerHTML=`<h4 style="color:#00ff00">Entered Rows : <span style="color:#00ff00">${rowVal}</span > || Entered colums : <span style="color:#00ff00">${colVal}</span></h4>`;
    tableCreation(rowVal,colVal,tbody);
    table.appendChild(tbody);
    table.setAttribute("border", "2");
    console.log(table);
    table_con.appendChild(table);
    rowinp.value = "";
    colinp.value = "";      
    
});

function tableCreation(row,col,table) {
    if(row===0) return;
    const row_ = document.createElement('tr');
    rowCreation(row_,col,cell_Value);
    table.appendChild(row_);
    tableCreation(row-1,col,table)
}

function rowCreation(row,col,){
    if(col===0) return;
    cell = document.createElement("td")
    cell.textContent = cell_Value;
    cell_Value++;
    row.appendChild(cell);
    rowCreation(row,col-1);
}
