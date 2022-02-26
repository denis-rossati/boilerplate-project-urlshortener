/* eslint-disable camelcase */
const { validateUrl, createUrlDoc, getOriginalUrlByShortcut } = require('../services/shortener');

const receiveUrl = async (req, res) => {
  const { url } = req.body;
  const isNotValidUrl = validateUrl(url);
  if (isNotValidUrl) res.json({ error: 'invalid url' });
  const { original_url, short_url } = await createUrlDoc(url);
  return res.status(200).json({ original_url, short_url });
};

const redirectToUrl = async (req, res) => {
  const { short_url } = req.params;
  const { original_url } = await getOriginalUrlByShortcut(short_url);
  return res.redirect(original_url);
};

module.exports = {
  receiveUrl,
  redirectToUrl,
};
