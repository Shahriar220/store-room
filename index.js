const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi buddy');

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to ${PORT}`));