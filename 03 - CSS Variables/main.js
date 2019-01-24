let items = document.querySelectorAll(".controls input");

//use "input" instead of "change" so target.value updates immediately at the move of the slider (instead of waiting for it to stop)
items.forEach( item => item.addEventListener("input", updateValues) )    

function updateValues(e) {  //can also use "this"
    let element = document.documentElement.style;
    let measurement = e.target.getAttribute("data-sizing") || ""; //if no need for this, add nothing.
                        //get css variable name using name attribute (more dynamic programming)                                                                       
    element.setProperty(`--${e.target.name}`, e.target.value + measurement);     //sets value but also need to append unit of measurement 
}

