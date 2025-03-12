var submit = document.getElementsByClassName("submit-btn");
var inpField = document.getElementsByClassName("input-container");
 console.log(inpField);
inpField[0].addEventListener("mouseover",()=>{
    inpField[0].style['background']="grey";
});
inpField[0].addEventListener("mouseleaves",()=>{
    inpField[0].style['background']="black";
});
submit[0].addEventListener("click",()=>{
    var  rowinp = document.getElementById("row-inp");
    var colinp = document.getElementById("col-inp");
    if(isNaN(parseInt(rowinp.value))||isNaN(parseInt(colinp.value))) return alert("Enter Valid Inputs.");
    rowVal = parseInt(rowinp.value);
    colVal = parseInt(colinp.value);
    var table = document.getElementsByClassName('output-container')[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");  
    table.innerHTML=`<h4>Entered Rows : ${rowVal} || Entered colums : ${colVal}</h4>`;
    var cell_Value = 1;
    for(var i=0;i<rowVal;i++){
        var row = document.createElement("tr");
        for(var j=0;j<colVal;j++){
            var cell = document.createElement("td");
            var cellText = document.createTextNode(cell_Value+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        cell_Value+=j;
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    table.append(tbl);
    tbl.setAttribute("border", "2");
    rowinp.value = "";
    colinp.value = "";      
    
});