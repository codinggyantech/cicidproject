const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Express API!" });
});
app.get('/', (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(port, () => {
    console.log(`Express API running on port ${port}`);
});
