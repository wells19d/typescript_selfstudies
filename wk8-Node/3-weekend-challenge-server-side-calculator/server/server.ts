const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`server using port:${PORT}`);
});