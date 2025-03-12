
var create_btn = document.getElementsByClassName("create-array");
var arrOperationsContainer = document.getElementsByClassName("array-operations-container");
var arrOperationsKey  = document.getElementsByClassName("operation-btn");
var create_Array = document.getElementsByClassName("array-data-feed");
var output = document.querySelector(".operation-output");
var create_container = document.getElementsByClassName("array-input");

var created_Array = [];
function length (){
    var length_div = document.createElement("div");
    var length_lbl = document.createElement("label");
    var out_box = document.createElement("input");
    var value = 0;
    out_box.className="out-label-text";
    length_div.className = "array-length"
    if(!document.querySelector(".array-length")){
        length_lbl.innerHTML = "Length of Given Array";
        length_div.append(length_lbl,out_box);
        output.appendChild(length_div);
    }
    out_box = document.querySelector(".out-label-text");
    value = out_box.value;
    out_box.value = created_Array.length;

}
function toString(){
    var string_div = document.createElement("div");
    var string_lbl = document.createElement("label");
    var out_box = document.createElement("input");
    var value = 0;
    out_box.className="string-text";
    string_div.className = "array-string"
    if(!document.querySelector(".array-string")){
        string_lbl.innerHTML = "String of Given Array";
        string_div.append(string_lbl,out_box);
        output.appendChild(string_div);
    }
    out_box = document.querySelector(".string-text");
    value = out_box.value;
    out_box.value = created_Array.toString();

}
function at(){
    var at_div = document.createElement("div");
    var at_lbl = document.createElement("label");
    var inp_box = document.createElement("input");
    var out_box = document.createElement("input");
    var value = 0;
    var pos = 0;
    out_box.className="at-text";
    at_div.className = "array-at"
    if(!document.querySelector(".array-at")){
        
        at_div.append(at_lbl,inp_box,out_box);
        output.appendChild(at_div);
    }
    out_box = document.querySelector(".at-text");
    inp_box.addEventListener("input",()=>{
        pos = inp_box.value;
        at_lbl.innerHTML = ` Element at ${pos} in Given Array`;
        out_box.value = created_Array.at(pos);
    }
    );
    }
function join(){
    console.log(created_Array.join(prompt("Enter Join delemeter : ",',')));
    }
function pop(){
    created_Array.pop();
}
function push(){

}
function shift(){

}
function unshift(){

}
function Delete(){

}
function concat(){

}
function copywithin(){

}
function flat(){

}
function splice(){

}
function toSplice(){

}
function slice(){

}
arrOperationsContainer[0].addEventListener('click',(e)=>{
   eval(e.target.innerHTML.split(" ")[1]);
});
create_Array[0].addEventListener('click',()=>{
    var arrayName = document.getElementsByClassName("array-name")[0].value;
    var arrayData = document.getElementsByClassName("array-data")[0].value;
    if(arrayName==""|| arrayData=="") return alert("Data Insufficient");
    create_container[0].style.display="none";
    createNewArray(arrayName,arrayData)
});

function createNewArray(arrayName,arrayData){
    var output_div = document.createElement("div");
    var array_label = document.createElement("label");
    var array_data = document.createElement("label");
    output_div.className = "array-Meta";
    created_Array = arrayData.split(",");
    console.log(created_Array);
    array_label.innerHTML = `arrayName`;
    array_data.innerHTML = created_Array;
    output_div.append(array_label,array_data);
    output.appendChild(output_div);
    document.querySelector(".container").style = `padding: 9px 0px 15px 30px;
                                                  border:#004100 solid 4px;
                                                  border-radius:5px
                                                 `;
    arrOperationsContainer[0].style.display = "flex";
}
function onLoad(){   
    // arrOperationsContainer[0].style.display = "none";
    // create_container[0].style.display="none";
}
create_btn[0].addEventListener('click',()=>{
    create_container[0].style.display="";
});
window.onload = onLoad();