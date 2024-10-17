 

<script>
    function submitWithdrawal() {
        // Fetch input values
        const accountName = document.getElementById("accountName").value;
        const accountNumber = document.getElementById("accountNumber").value;
        const profitBalance = document.getElementById("profitBalance").value;
        const withdrawalAmount = document.getElementById("withdrawalAmount").value;
        const bankName = document.getElementById("bankName").value;

        // Basic validation to check all fields are filled
        if (!withdrawalAmount || !bankName) {
            alert("Please enter the withdrawal amount and select a bank.");
            return;
        }

        // Confirm withdrawal details
        alert(`Withdrawal Request:\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}\nAmount: $${withdrawalAmount}\nBank: ${bankName}`);
    }
</script>
