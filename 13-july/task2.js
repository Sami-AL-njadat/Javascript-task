let flag = document.getElementById ("flag")
let image = document.querySelector(".image")

flag.addEventListener ("change", function (){
if (flag.value === "algira" )
{image.src = "a;gira.jpg";
}else if (flag.value === "palestine" ) {
    image.src = "palestine.png"
    
}else {image.src = "jordan.jpg"}
})

image.style.width= "300px"
image.style.display= "block"