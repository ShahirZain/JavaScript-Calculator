function cal(num){
    Calculator.displayScreen.value = Calculator.displayScreen.value +num;
}
function equalFunc(){
 var exp = Calculator.displayScreen.value;
 if(exp)
        Calculator.screen.value = eval(exp) 
}
function clearScreen(){
    Calculator.displayScreen.value = null;
}