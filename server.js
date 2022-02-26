const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { receiveUrl, redirectToUrl } = require('./src/controllers/shortener');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.post('/api/shorturl', receiveUrl);

app.get('/api/shorturl/:short_url', redirectToUrl);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;
