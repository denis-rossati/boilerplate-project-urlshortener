/* eslint-disable camelcase */
const connection = require('./connection');

const urlDataSchema = {
  original_url: { type: String, required: true },
  short_url: { type: Number, required: true },
};
const Url = connection.model('urls', urlDataSchema);

const countDocuments = async () => Url
  .find({})
  .countDocuments()
  .exec()
  .then((currentLastId) => currentLastId + 1);

const createUrlDoc = async (original_url) => {
  const short_url = await countDocuments();
  const newUrl = new Url({ original_url, short_url });
  await newUrl.save((err, document) => document);
  return newUrl;
};

module.exports = {
  createUrlDoc,
};
