const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/progress-data.json', (req, res) => {
    fs.readFile('progress-data.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

app.post('/update-progress-data', (req, res) => {
    const updatedData = req.body;
    fs.writeFile('progress-data.json', JSON.stringify(updatedData, null, 2), err => {
        if (err) throw err;
        res.json({ message: 'Progress data updated' });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
