const axios = require('axios');

exports.get = async (path) => {
  try {
    return await axios.get(path);
  } catch (err) {
    console.log('Error while fetching data: ', err);
  }
};

exports.post = async (path, data) => {
  try {
    return await axios.post(path,data);
  } catch (err) {
    console.log('Error while fetching data: ', err);
  }
};

module.exports = exports;
