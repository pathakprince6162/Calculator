 let display = document.querySelector(".display")

document.querySelector(".numbers").addEventListener("click" ,(e) => {

    display.textContent += e.target.textContent
    console.log(display.textContent)
})

document.querySelector(".operators").addEventListener("click" ,(e) => {

    if (e.target.classList.contains("ac")) {
        display.textContent = "";
        return;
    }
    else{
        display.textContent += e.target.textContent
        console.log(display.textContent)
    }
    
})



document.querySelector(".equal").addEventListener("click", (e)=>{
   
    let expression = display.textContent;

    expression = expression.replace(/X/g, "*"); 
    // replace all X with *

    let result = eval(expression);

    display.textContent = result
   
})


