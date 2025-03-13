var Element_Name = ""
var container = document.querySelector(".container");
document.querySelector("button").addEventListener("click",()=>{
    try{
    var created_element  = document.createElement(prompt("Enter Element"),"button");
    Element_Name = prompt("Enter Name for Element.","NO_NAME")
    created_element.innerHTML = Element_Name;
    created_element.className = "created-ele";
    }
    catch{
        alert("Element is not valid.")
    }
    container.append(created_element);
});
