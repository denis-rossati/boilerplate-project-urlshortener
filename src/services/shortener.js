/* eslint-disable camelcase */
const dns = require('dns');
const model = require('../models/shortener');

const validateUrl = (url) => {
  let isValid = true;

  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  if (!url.match(urlRegex)) {
    isValid = false;
  }

  const { hostname } = new URL(url);
  dns.lookup(hostname, { all: true }, (err) => {
    if (err) { isValid = false; }
  });

  return isValid;
};

const createUrlDoc = async (original_url) => model.createUrlDoc(original_url);

module.exports = {
  validateUrl,
  createUrlDoc,
};
