document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDeposit = getInputFieldValueById('deposit-field') ;
    if(isNaN(newDeposit)== true){
        alert('Please Input Correct Amount')
        return;
    }
    const previousTotalDeposit = getTextElementValueById('total-deposit') ;
    const newTotalDeposit = previousTotalDeposit + newDeposit ;
    setTextElementById('total-deposit' , newTotalDeposit) ;
    const previousTotalBalance = getTextElementValueById('total-balance') ;
    const newTotalBalance = previousTotalBalance + newDeposit ;
    setTextElementById('total-balance' , newTotalBalance)
})
