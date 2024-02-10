//<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.min.js"></script>

let displayView = document.getElementsByClassName('display')[0];
let overflowView = document.getElementsByClassName('overflow')[0];
let operatorView = document.getElementsByClassName('operator')[0];
const minus = "-";
const add = "+";
const divide = "÷";
const mult = "×";

for (let i = 1; i <= 20; i++) {
    let buttonId = 'button' + i;
    let currentButton = document.getElementById(buttonId);


// Button Actions        
    if (currentButton) { 
        displayView.textContent = "";
        currentButton.addEventListener('click', function() {         
            switch (i) {
//special                
            case 1:  
               displayView.textContent = "8008135";              
                break;
//pi
            case 2: 
                displayView.textContent = '3.141592653589';
                break;
//clear
            case 3: 
                displayView.textContent = "";
                operatorView.textContent = "";
                overflowView.textContent = "";
                break;
//backspace                
            case 4: 
                let modifiedString = displayView.textContent.slice(0, -1);
                  displayView.textContent = modifiedString;
                break;
// minus                
            case 8:                 
                if (operatorView.textContent !== "" && displayView.textContent !== "") {
                    solve();   
                    operatorView.textContent = minus;
                    overflowView.textContent = displayView.textContent; 
                    displayView.textContent = "";   
                } else if (operatorView.textContent !== "") {
                    operatorView.textContent = minus;
                } else if (operatorView.textContent !== "" && displayView.textContent !==""){
                    solve();
                }else if (operatorView.textContent == "") {
                    overflowView.textContent = displayView.textContent;                        
                    displayView.textContent = "";
                    operatorView.textContent = minus;
                }  
                break;
// divide                
            case 12: 
                if (operatorView.textContent !== "" && displayView.textContent !== "") {
                    solve();   
                    operatorView.textContent = divide;
                    overflowView.textContent = displayView.textContent; 
                    displayView.textContent = "";   
                } else if (operatorView.textContent !== "" && displayView.textContent === "") {
                    operatorView.textContent = divide;
                } else if (operatorView.textContent == "") { 
                    overflowView.textContent = displayView.textContent;                        
                    displayView.textContent = "";
                    operatorView.textContent = divide;
                } 
                break;
// multiply        
            case 16: 
                if (operatorView.textContent !== "" && displayView.textContent !== "") {
                    solve();    
                    operatorView.textContent = mult;
                    overflowView.textContent = displayView.textContent; 
                    displayView.textContent = "";
                } else if (operatorView.textContent !== "" && displayView.textContent ==="") {
                    operatorView.textContent = mult;
                } else if (operatorView.textContent !== "" && displayView.textContent !==""){
                    solve();
                } else if (operatorView.textContent == "") {
                    overflowView.textContent = displayView.textContent;                        
                    displayView.textContent = "";
                    operatorView.textContent = mult;
                } 
                break;  
//decimal      
            case 17: 
                if (!displayView.textContent.includes(".")){
                    displayView.textContent += ".";
                }                 
                break;
//equals             
            case 19:               
                    solve();                             
                break;
//addition                
            case 20: 
                if (operatorView.textContent !== "" && displayView.textContent !== "") {
                    solve();  
                    operatorView.textContent = add;
                    overflowView.textContent = displayView.textContent; 
                    displayView.textContent = "";    
                } else if (operatorView.textContent !== "") {
                    operatorView.textContent = add;
                } else if (operatorView.textContent !== "" && displayView.textContent !==""){
                    solve();
                }else if (operatorView.textContent == "") {
                    overflowView.textContent = displayView.textContent;                        
                    displayView.textContent = "";
                    operatorView.textContent = add;
                }  
                break;
// numbers                 
            default:
                if (displayView.textContent.length < 14) {
                    let number = document.getElementById(buttonId).textContent;
                    if (displayView.textContent == 0){
                        displayView.textContent = number;
                    } else{
                        displayView.textContent += number;            
                    }}
            }                  
        });
    }
}
  
function solve(){               
    if (operatorView.textContent.includes(divide) && displayView.textContent == "0" ) {
        let error = "Bad human!";
        displayView.textContent = error;
        setTimeout(byZero, 2000);
    } else if( operatorView.textContent === minus){
        let total = parseFloat(overflowView.textContent) - parseFloat(displayView.textContent);
        let totalString = total.toString();
        displayView.textContent = totalString.slice(0, 14);
        overflowClear();
    } else if (operatorView.textContent === add){
        let var1 = (overflowView.textContent);
        let var2 = (displayView.textContent);
        let total = parseFloat(var1) + parseFloat(var2);
        let totalString = total.toString();
        displayView.textContent = totalString.slice(0, 14);
        overflowClear();
    } else if (operatorView.textContent === mult){
        let total = parseFloat(overflowView.textContent) * parseFloat(displayView.textContent);
        let totalString = total.toString();
        displayView.textContent = totalString.slice(0, 14);
        overflowClear();
    } else if (operatorView.textContent === divide){
        console.log(displayView.textContent);
        console.log(typeof displayView.textContent);
        let total = parseFloat(overflowView.textContent) / parseFloat(displayView.textContent);
        let totalString = total.toString();
        displayView.textContent = totalString.slice(0, 14);
        overflowClear();
    }
        
    
}   

function byZero (){
    displayView.textContent = "";
}


function overflowClear(){
        operatorView.textContent = "";
        overflowView.textContent = "";
}