const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
});

app.get('/api/menu', (req, res) => {
// export default function menu(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Atau ganti '*' dengan origin tertentu
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(
        [
            {
                id: 1,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/S2b8K7g2tM6cDksrAdVv.webp",
                title: "Big Mac®"
            },
            {
                id: 2,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/zdp0LhOduHDNXVYWILMx.webp",
                title: "PaNas 1"
            },
            {
                id: 3,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/Mdfc31HLjuorHac10yKX.webp",
                title: "Panas Spesial"
            },
            {
                id: 4,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/foods/November2023/P2zG2zY5Z7dory0BUYfc.webp",
                title: "McChicken"
            },
            {
                id: 5,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/foods/October2023/ce7g1MMi3D7YNWGH3iuK.webp",
                title: "McNuggets®"
            },
        ]
    )
})

module.exports = app;