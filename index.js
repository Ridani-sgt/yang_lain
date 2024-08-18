const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk memparsing JSON
app.use(bodyParser.json());

// Endpoint untuk menerima notifikasi dari Midtrans
app.post('/midtrans-webhook', (req, res) => {
    const notification = req.body;

    // Log untuk melihat notifikasi
    console.log('Received Midtrans notification:', notification);

    // Logika pemrosesan notifikasi
    if (notification.status_code === '200') {
        // Lakukan sesuatu, misalnya update database, kirim email, dll.
        console.log('Payment successful!');
    }

    // Kirim respon ke Midtrans
    res.status(200).send('Notification received');
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
