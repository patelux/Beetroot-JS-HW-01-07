function calculateTip() {
    const billAmount = parseInt(document.getElementById('billAmount').value);
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Будь ласка, введіть коректну суму (більше 0)");
        return;
    }

    let tipPercentage;
    if (billAmount < 500) {
        tipPercentage = 0.2; // 20%
    } else if (billAmount < 1000) {
        tipPercentage = 0.1; // 10%
    } else {
        tipPercentage = 0.05; // 5%
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    const tipAmountElement = document.getElementById('tipAmount');
    tipAmountElement.innerHTML = 'Чайові складають: ' + tipAmount.toFixed(2) + ' грн<br>Загалом : ' + totalAmount.toFixed(2) + ' грн';
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function(e) {
        e.preventDefault();
        calculateTip();
    });
});