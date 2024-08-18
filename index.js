const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint untuk menerima notifikasi dari Midtrans
app.post('/midtrans-webhook', (req, res) => {
    const notification = req.body;

    // Log notifikasi untuk debugging
    console.log('Received Midtrans notification:', notification);

    // Validasi dan proses notifikasi dari Midtrans
    if (notification && notification.status_code === '200') {
        // Lakukan sesuatu berdasarkan notifikasi
        console.log('Payment successful!');
        // Misalnya, update status transaksi di database
    }

    // Respon balik ke Midtrans
    res.status(200).send('Notification received');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
