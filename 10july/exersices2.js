/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/



var rate_r ;
rate_r  = window.prompt(" enter your average rate", "0-100");
 if (rate_r  < 49)
 {
alert( "FAIL")
 }
else if (rate_r <= 59){
    alert( "E")

}

else if ( rate_r <= 69){
    alert( "D")

}


else if ( rate_r <= 79){
    alert( "C")

}

else if ( rate_r <= 89){
    alert( "B")

}

else if ( rate_r  >=90 && rate_r <=100){
    alert( "A")

}