const request = (headers, body, query) => {
  if (!body.phoneNumber) {
    throw new Error('Missing phoneNumber');
  }
  if (!body.code) {
    throw new Error('Missing code');
  }
};

const response = () => ({
  success: true,
  data: {
    token: 'test',
    new: true
  }
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};