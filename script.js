document.querySelector("#topBar #toggleBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
})

let display = document.querySelector("#display");
let prevdisplay = document.querySelector("#prevdisplay");
let panel = document.querySelector("#butt");
let string = '';
let prevString = '';

panel.addEventListener("click", function(details) {
    // alert("hello");
    // console.log(details.target.textContent);
    let currentPressed = details.target.textContent;
    if(currentPressed === '=') 
    {
        prevString = string;
        string= eval(string);
    }
    else if(currentPressed === 'AC') 
    {
        string = '';
        prevString = '';
    }
    else if(currentPressed === '')
    {
        if(string[string.length-1] === ' ')
            string = string.substring(0, string.length - 3);
        else
        string = string.substring(0, string.length - 1);
    }
    else 
    {
        string += currentPressed;
    }


    prevdisplay.textContent = prevString;
    display.textContent = string;
    console.log(string);
    // if(currentPressed === '');
})

addEventListener("keydown", (event) => {
    // console.log(event.key);
    if(event.key >= '0' && event.key <= '9') 
    {
        string += event.key;
        display.textContent = string;
    }
    else if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%')
    {
        string += " ";
        string += event.key;
        string += " ";
        display.textContent = string;
    }
    else if(event.key === "Backspace")
    {
        if(string[string.length-1] === ' ')
        string = string.substring(0, string.length - 3);
        else
        string = string.substring(0, string.length - 1);
    }
    else if(event.key === "Enter")
    {
        event.preventDefault();
        prevString = string;
        string = eval(string);
    }
    prevdisplay.textContent = prevString;
    display.textContent = string;
});