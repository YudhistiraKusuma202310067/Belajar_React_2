const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
});

app.get('/api/image', (req, res) => {
// export default function image(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Atau ganti '*' dengan origin tertentu
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(
        [
            {
                id: 1,
                image: "https://www.mcdonalds.co.id/assets/img/ig/img_home-instagram-1.webp"
            },
            {
                id: 2,
                image: "https://www.mcdonalds.co.id/assets/img/ig/img_home-instagram-2.webp"
            },
            {
                id: 3,
                image: "https://www.mcdonalds.co.id/assets/img/ig/img_home-instagram-3.webp"
            },
            {
                id: 4,
                image: "https://www.mcdonalds.co.id/assets/img/ig/img_home-instagram-4.webp"
            },
            {
                id: 5,
                image: "https://www.mcdonalds.co.id/assets/img/ig/img_home-instagram-5.webp"
            }
        ]
    )
})

module.exports = app;