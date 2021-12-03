let bgvideo = document.getElementById("bgvideo")

bgvideo.play()

var screen = document.getElementsByClassName("screen")[0]

// getting input from keypad
function input(value){
    let prev_screen = screen.innerHTML

    if (prev_screen.length < 15){
        if(["+", "-", "/", "^", "*"].includes(value)){
            if(["+", "-", "/", "^", "*"].includes(screen.innerHTML[screen.innerHTML.length-1])){

            }else{
                let new_screen = prev_screen + value
                screen.innerHTML = new_screen
            }
        }else{
            let new_screen = prev_screen + value
            screen.innerHTML = new_screen
        }
    } else{
        alert("out of limit")
    }

}

// clear all function
function input_AC(){
    screen.innerHTML = ""
}

//clear last input
function input_C(){
    let prev_screen = screen.innerHTML
    screen.innerHTML = prev_screen.slice(0, prev_screen.length - 1)
}

//bracket function
function input_bracket(){
    let last_index = screen.innerHTML[screen.innerHTML.length - 1]

    if (last_index === "(" || last_index === ")" || last_index === undefined){
       screen.innerHTML = screen.innerHTML + "("
    }else{
        let last_bracket 
        for (var i = 0; i < screen.innerHTML.length; i++){
            if (screen.innerHTML[i] === "(" || screen.innerHTML[i] === ")"){
                last_bracket = screen.innerHTML[i]
            }

            if(last_bracket === "("){
                screen.innerHTML = screen.innerHTML + ")"
                break
            }else{
                screen.innerHTML = screen.innerHTML + "("
                break
            }

        }
        
    }
}

//equal to function
function equal_to(){
    let req_screen
    req_screen = screen.innerHTML.replace("^", "**")
    req_screen = req_screen.replace("(", "")
    req_screen = req_screen.replace(")", "*")
    req_screen = req_screen.replace("x", "*")
    last_index = req_screen[req_screen.length - 1]

    if(["+", "-", "*", "^", "**", "/"].includes(last_index)){
        req_screen = req_screen.slice(0, req_screen.lenght - 1)
    }

    screen.innerHTML = eval(req_screen)
}