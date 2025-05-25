const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`);
});

app.get('/api/banner', (req, res) => {
// export default function banner(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Atau ganti '*' dengan origin tertentu
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json(
    [
            {
                id: 1,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/April2025/bZBqwzU0hPuyF96I61U2.webp"
            },
            {
                id: 2,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/May2025/OzEhBotMVOgtl123fHXn.jpg"
            },
            {
                id: 3,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/April2025/WEsaV6Ercw4ZWq0FpJGy.webp"
            },
            {
                id: 4,
                source: "https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/May2024/rIfkVUiRlgc5hJjCYBLH.webp"
            },
        ]
  );
})

module.exports = app;