// loginBtn Event handlar 
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area").style.display = "none"
    const transactionArea = document.getElementById("transaction-area").style.display = "block"
})

// Deposit button event 
    const depositBtn = document.getElementById("addDeposit").addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNum = parseFloat(depositAmount)

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNum = parseFloat(currentDeposit);
    const totalDeposit = depositNum + currentDepositNum;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText
    const currentBalanceNum = parseFloat(currentBalance)
    const totalBalance = depositNum + currentBalanceNum;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = ""
    })
// Withdraw button event 

    const withdrawBtn = document.getElementById("addwithdraw").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNum = parseFloat(withdrawAmount)

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNum = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNum + currentWithdrawNum;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("currentBalance").innerText
    const currentBalanceNum = parseFloat(currentBalance)
    const totalBalance = currentBalanceNum - withdrawNum;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = ""
    

    

})