const color = [
    ['Black','ดำ','สีดำ'],
    ['Red','แดง','สีแดง'],
    ['Green','เขียว','สีเขียว'],
    ['Pink','ชมพู','สีชมพู'],
    ['Blue','น้ำเงิน','สีน้ำเงิน'],
    ['Brown','น้ำตาล','สีน้ำตาล'],
    ['Purple','ม่วง','สีม่วง'],
    ['White','ขาว','สีขาว'],
    ['Yellow','เหลือง','สีเหลือง'],
    ['Orange','ส้ม','สีส้ม']
]
alert("กดปุ่ม RamdomColor")
let countplay = (prompt("จำนวนที่ต้องการเล่น"))
console.log(countplay)
var i = 0
var countrandom = 0
var wrongans = 0
const rd = Math.floor(Math.random()*color.length) 


function Rd1(){
    rd;
    console.log(rd)
}
function Button(){
    const guess = document.getElementById("guessCL").value;
    const guess1 = guess.charAt(0).toUpperCase()+guess.slice(1);
    console.log(guess1)
    wrongans+=1

    
    while(i < countplay){
        var ok = false
        for(var j=0;j<3;j++)
            {
                if(color[rd][j]==guess1)
                    {
                        console.log('yes')
                        ok=true
                    }                  
            }                 
        if(ok){
            correct()
            break
        }
        else{
            alert("ผิดแล้วจ้า")
            break
        }  
        
    }
    i+=1;

    if(i > countplay){
        incorrect()
    }
}



function correct(){
    alert("ชนะแล้วจ้า")   
    document.getElementById("ShowColor").innerHTML = color[rd];
}
function incorrect(){
    wrongans-- 
    alert("ผิดแล้วจ้า")
    alert("จำนวนครั้งที่เล่น"+ wrongans +"ครั้ง")
    alert("แพ้แล้วจ้า")
    document.getElementById("ShowColor").innerHTML = color[rd];       
}
function wrong(){
    alert("ผิดจ้า")
    alert("จำนวนครั้งที่เล่น"+ wrongans +"ครั้ง")
}

function Reset(){
    location.reload();
}