const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
});

app.get('/api/promo', (req, res) => {
// export default function promo(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Atau ganti '*' dengan origin tertentu
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(
        [
            {
                id: 1,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/promos/April2025/L1j9n6Kkr5FdW1QEvzXn.webp",
                title: "BCA Hemat 25% Setiap Hari",
                description: "",
                validUntil: "Berlaku hingga 30 June 2025",
            },
                {
                id: 2,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/promos/February2025/c8hqSUcCx1NgXKAUSsuR.webp",
                title: "Dinosaur McFlurry",
                description: "McFlurry favoritmu kembali hadir",
                validUntil: "Berlaku hingga 01 June 2025",
            },
                {
                id: 3,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/promos/May2025/W03rTa6V75fvgt3Q5l1h.jpg",
                title: "Rebo Hemat dengan McDelivery",
                description: "5 Ayam Krispy McD hanya Rp55.000",
                validUntil: "Berlaku hingga 28 May 2025",
            }
        ]
    );
})

module.exports = app;