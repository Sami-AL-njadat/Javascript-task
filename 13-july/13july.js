let head =document.querySelector ("h4")
head.style.backgroundColor =  ("yellow") 
head.style.width =("65%")
head.style.border = " 3px solid black"
head.style.textAlign = ' center'

head.addEventListener("mouseover" , function(){
    head.textContent = "hello world !";
    
})

head.addEventListener("mouseout" , function(){
    head.textContent = "Can i help  you !";
    
})
    

    
// }
// console.log(head)
// Can I help you!