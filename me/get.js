const request = (headers, body, query) => {
};

const response = () => ({
  success: true,
  data: {
    id: 1,
    username: 'dotmind',
    email: 'hello@dotmind.io',
  },
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};