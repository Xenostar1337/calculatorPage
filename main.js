for (let i = 1; i <= 20; i++) {
    let buttonId = 'button' + i;
    let currentButton = document.getElementById(buttonId);

    var displayView = document.getElementsByClassName('display')[0];


    function clear(){
        displayView.textContent = "";
    };

    // Perform different actions based on which button is clicked
    if (currentButton) { 
        displayView.textContent = "";
        currentButton.addEventListener('click', function() {
            
            
            console.log("Button " + i + " clicked!"); 
            switch (i) {
            case 1:
                console.log("Action for Button smile");
                // Perform action for Smile
                break;
            case 2:
                console.log("Action for Button pi");
                displayView.textContent = '3.14159265358979';
                break;
            case 3:
                console.log("Action for Button clear");
                displayView.textContent = "";
                break;
            case 4:
                console.log("Action for Button bckspce");
                // Perform action for backspace
                break;
            case 8:
                console.log("Action for Button -");
                // Perform action for minus
                break;
            case 12:
                console.log("Action for Button /");
                // Perform action for divide
                break;
            case 16:
                console.log("Action for Button x");
                // Perform action for multiply
                break;  
            case 17:
                console.log("Action for Button .");
                // Perform action for decimal
                break;
            case 19:
                console.log("Action for Button =");
                // Perform action for equals
            case 20:
                console.log("Action for Button +");
                // Perform action for plus
                break;  
            default:// default action
                if (displayView.textContent.length < 16) {
                    console.log("Default action");
                    let testIt = document.getElementById(buttonId).textContent;
                    displayView.textContent += testIt;    
                    console.log(displayView.textContent.length)
                    }
            }                  
        });
    }
}
  

