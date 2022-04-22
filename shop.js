var _price = 0
var _each = 0
function Button1(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    i = x*y
    totalinput()
}
function totalinput()
{
    document.getElementById("total").innerHTML= "Total:"+i
}
