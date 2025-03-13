
var create_btn = document.getElementsByClassName("create-array");
var arrOperationsContainer = document.getElementsByClassName("array-operations-container");
var arrOperationsKey  = document.getElementsByClassName("operation-btn");
var create_Object = document.getElementsByClassName("array-data-feed");
var output = document.querySelector(".operation-output");
var create_container = document.getElementsByClassName("Object-input");

var created_Objects = JSON.parse(this.localStorage.Object);
var tempObj={};
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
    out_box.value = "";

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
   console.log(e.target.innerHTML.split(".")[1]);
});
create_Object[0].addEventListener('click',()=>{
    var Object_Name = document.getElementsByClassName("Object-name")[0].value;
    var Object_Key = document.getElementsByClassName("Object-key")[0].value;
    var Object_value = document.getElementsByClassName("Object-value")[0].value;
    if(Object_Name==""||Object_Key==""||Object_value=="") return alert("Data Insufficient");
    // create_container[0].style.display="none";
    createNewObject(Object_Name,Object_Key,Object_value)
});

function createNewObject(Object_Name,Object_Key,Object_value){
     tempObj[Object_Key]=Object_value;
    var output_div = document.createElement("div");
    var array_label = document.createElement("label");
    var array_data = document.createElement("label");
    output_div.className = "array-Meta";
    created_Objects[Object_Name]=tempObj;
    console.log(created_Objects);
    // array_label.innerHTML = aName;
    // array_data.innerHTML = created_Array;
    // output_div.append(array_label,array_data);
    // output.appendChild(output_div);
    window.localStorage.setItem("NewObject",JSON.stringify(created_Objects));
    document.querySelector(".container").style = `padding: 15px;
                                                  border:#004100 solid 4px;
                                                  border-radius:5px
                                                 `;
    arrOperationsContainer[0].style.display = "flex";
}
function onLoad(){   
    arrOperationsContainer[0].style.display = "none";
    // create_container[0].style.display="none";
}
create_btn[0].addEventListener('click',()=>{
    create_container[0].style.display="";
});
create_container[0].addEventListener('change',()=>{
   console.log("Hello");
})
window.onload = onLoad(); 