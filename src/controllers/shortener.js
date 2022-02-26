/* eslint-disable camelcase */
const { validateUrl, createUrlDoc } = require('../services/shortener');

const receiveUrl = async (req, res) => {
  const { url } = req.body;
  const isNotValidUrl = validateUrl(url);
  if (isNotValidUrl) res.json({ error: 'invalid url' });
  const { original_url, short_url } = await createUrlDoc(url);
  return res.status(200).json({ original_url, short_url });
};

module.exports = {
  receiveUrl,
};
