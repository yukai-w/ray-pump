const express = require('express');
const app = express();

// 设置解析 JSON 请求体的中间件
app.use(express.json());

app.post('/', (req, res) => {
    const requestBody = req.body;

    if (Array.isArray(requestBody) && requestBody[0] && requestBody[0].description) {
        console.log(requestBody[0].description, 22);
        res.status(200).send('Logged POST request body.');
    } else {
        res.status(400).send('Invalid request body.');
    }
});

// 处理其他方法
app.all('/', (req, res) => {
    res.status(405).send('Method not allowed.');
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
