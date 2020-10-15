const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
    console.log(req)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to ${PORT}`));