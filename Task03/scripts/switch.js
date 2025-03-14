var main_switch = document.querySelector(".switch-control");
var comp = document.querySelector('button');
comp.addEventListener("click",()=>{
    switch(comp.value){
            case '0' : 
                comp.value=1;
                comp.className="button-toggled";
                main_switch.style.display="block";
                break;
            case '1' : 
                comp.className="button-untoggled";
                comp.value=0;
                main_switch.style.display="none";
                 break;
    }
}
)
main_switch.querySelectorAll("button").forEach(
    e => e.addEventListener("click",()=>{
        var container = document.querySelector(`.${e.textContent.toLowerCase()}-container`);
        switch(e.value){
            case '0' : 
                e.className="button-toggled";
                e.value=1;
                container.querySelector(".controllers").style.display="flex";
                break;
            case '1' : 
                e.className="button-untoggled";
                e.value=0;
                container.querySelector(".controllers").style.display="none";
                 break;
        }
        container.querySelectorAll("input").forEach(sw=>sw.addEventListener('click',()=>{
            switch(sw.value){
                case '0' : 
                sw.value=1;
                container.querySelector(`.${e.textContent.toLowerCase()}-on`).style.display="flex";
                container.querySelector(`.${e.textContent.toLowerCase()}-off`).style.display="none";
                break;
            case '1' : 
                sw.value=0;
                container.querySelector(`.${e.textContent.toLowerCase()}-on`).style.display='none';
                container.querySelector(`.${e.textContent.toLowerCase()}-off`).style.display="flex";
                 break;
            }
        })
    )
        })
)

