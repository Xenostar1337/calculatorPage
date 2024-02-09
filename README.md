# calculatorPage
Calculator for The Odin Project

2/8/24 started calculator process.  
Base idea is to create layout, have the buttons populate a string. Use the string to display button presses. Populate an array with previous string operation.
Pressing C will pop the last item in the array, CE will clear Array.
Pressing = will evaluate the displayed operation so will trying to apply a 2nd operator +-*/ with a valid operation already displayed. ie 33 + 33 / 2  the / will trigger evaluating the valid operation so 66 will be evaluated by the / button.

foreseeable problems; decimals, incomplete operations, 0 tomfoolery. 
