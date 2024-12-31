// Fixed UPI ID for the artist (Replace with the actual UPI ID)
const artistUpiId = 'nirmaldebnath75@oksbi';  

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;

    if (amount && amount > 0) {
        // Generate UPI payment URL
        const paymentUrl = `upi://pay?pa=${artistUpiId}&pn=Artist&am=${amount}&cu=INR`;
        const qrCodeData = `upi://pay?pa=${artistUpiId}&pn=Artist&am=${amount}&cu=INR`;
        const qrCode = new QRCode(document.getElementById("qrcode"), qrCodeData);


        // Redirect to the UPI payment app
        window.location.href = paymentUrl;
    } else {
        alert('Please enter a valid amount.');
    }
});
