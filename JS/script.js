"use strict";





let visibillity = false;

document.getElementById("contact").addEventListener("click",(e)=>
{
    e.preventDefault();
    const a = "aGVyZ2VudGxlaHVi";
    const b = "QG91dGxvb2su";
    const c = "Y29t";

    const message = document.getElementById("msg"); 

    if(!visibillity)        
    {                             
        message.textContent = atob(a+b+c); 
        message.style.background = "black";
        message.style.height = "50px";
        message.style.width = "300px";
        message.style.borderWidth = "1px 1px 2px 2px";
        message.classList.remove("hidden");    
        message.classList.add("visible");                    
        visibillity = true;
    }
    else
    {
        message.classList.remove("visible");
        message.classList.add("hidden");
        visibillity = false;    
    }
})