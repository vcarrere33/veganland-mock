const request = (headers, body, query) => {
  if (!body.phoneNumber) {
    return {
      success: false,
      data: {
        message: 'Missing phoneNumber',
      }
    };
  }
  if (!body.code) {
    return {
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