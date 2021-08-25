let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "←":
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                if(display.innerText) {
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error!";
                    }
                } else {
                    alert("Please write some expression first");
                }
                break;
            default:
                display.innerText += e.target.innerText;
        };
    });
});