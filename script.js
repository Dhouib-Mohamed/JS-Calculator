let element ="";
let op = null; 
let r = false;
const log = document.getElementById("log");
function operation(el1,el2,op){
    switch(op) {
        case "+":return(el1+el2);
        case "-":return(el1-el2);
        case "X":return(el1*el2);
        case "/":return parseInt(el1/el2);
    }
}
Array.from(document.getElementsByClassName("n")).forEach(number=>{
    number.addEventListener("click",(event)=>{
        if (log.textContent==="0"||r===true){log.textContent=event.target.textContent}
        else {log.textContent+=event.target.textContent}
        r= false;
    })
})
Array.from(document.getElementsByClassName("op")).forEach(operator=>{
    operator.addEventListener("click",(event)=>{
        if(!op) {element=log.textContent;}
        else {element = operation(parseInt(element),parseInt(log.textContent),op);}
        op = event.target.textContent;
        log.textContent=0;
        console.log(element);
    })
})
document.getElementById("res").addEventListener("click",(event)=>{
    log.textContent = operation(parseInt(element),parseInt(log.textContent),op);
    element = log.textContent;
    op = null;
    r = true;
});
document.getElementById("clear").addEventListener("click",()=>{
    log.textContent="0";
    element ="";
    op = null;
});
document.getElementById("back").addEventListener("click",()=>{
    if(log.textContent.length>1){
        log.textContent=log.textContent.substring(0,log.textContent.length-1);
    }
    else {
        log.textContent="0";
    }
})
