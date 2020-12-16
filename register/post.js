const request = (headers, body, query) => {
  if (body.phoneNumber) {
    throw {
      success: false,
      data: {
        message: 'Missing token',
      }
    };
  }
};

const response = () => ({
  success: true,
  data: {},
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};