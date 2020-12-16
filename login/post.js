const request = (headers, body, query) => {
  if (!body.phoneNumber) {
    throw {
      success: false,
      data: {
        message: 'Missing phoneNumber',
      }
    };
  }
  if (!body.code) {
    throw {
      success: false,
      data: {
        message: 'Missing code',
      }
    };
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