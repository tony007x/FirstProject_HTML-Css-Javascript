

function Button(){
    const inp = document.querySelector("input").value
    
    if(inp >= 80){
        document.getElementById("content").innerHTML = "Grade: A"
    }
    else if(inp >=70){
        document.getElementById("content").innerHTML = "Grade: B"
    }
    else if(inp >=60){
        document.getElementById("content").innerHTML = "Grade: C"
    }
    else if(inp >=50){
        document.getElementById("content").innerHTML = "Grade: D"
    }
    else if(inp>=0){
        document.getElementById("content").innerHTML = "Grade: F"
    }  
    else if(isNaN()){
        document.getElementById("content").innerHTML = "Please input a Number!"
    }   
}





