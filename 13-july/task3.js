let font = document.getElementById ("font_family")
let text = document.querySelector(".text")
let font_size = document.querySelector("#font_size")
let Italic = document.getElementById ("Italic")
let Bold = document.getElementById ("Bold")
let Underline = document.getElementById ("Underline")


font.addEventListener ("change", function (){
if (font.value === "Time new romine" )
{text.style.fontFamily ="'Times New Roman', Times, serif" 
}else {text.style.fontFamily ="fantasy" }
})

font_size.addEventListener ("change", function (){
    if (font_size.value === "10px" )
    {text.style.fontSize ="10px" 
    }else {text.style.fontSize ="15px" }
    })

    Italic.addEventListener("change" , function () {
        if (Italic.checked === true ) {text.style.fontStyle ="italic"
            
        }else {text.style.fontStyle ="normal"}
        
    })
    Bold.addEventListener("change" , function () {
        if (Bold.checked === true ) {text.style.fontWeight ="Bold"
            
        }else {text.style.fontWeight ="normal"}
        
    })
    Underline.addEventListener("change" , function () {
        if (Underline.checked === true ) {text.style.textDecoration ="Underline"
            
        }else {text.style.textDecoration ="none"}
        
    })

    text.style.cssText ="border: 2px solid black ; width:40% ; height: 150px "