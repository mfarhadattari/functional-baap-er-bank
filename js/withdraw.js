document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdraw = getInputFieldValueById('withdraw-field') ;
    if(isNaN(newWithdraw)== true){
        alert('Please Input Correct Amount')
        return;
    }
    const previousTotalWithdraw = getTextElementValueById('total-withdraw') ;
    const newTotalWithdraw = previousTotalWithdraw + newWithdraw ; 
    setTextElementById('total-withdraw' , newTotalWithdraw) ;
    const previousTotalBalance = getTextElementValueById('total-balance') ;
    const newTotalBalance = previousTotalBalance - newWithdraw ;
    setTextElementById('total-balance' , newTotalBalance) ;
})