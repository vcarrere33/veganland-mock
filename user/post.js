const request = (headers, body, query) => {
  if (headers.token !== 'test') {
    throw {
      success: false,
      data: {
        message: 'Missing token',
      }
    };
  }
  if (!body.name) {
    throw {
      success: false,
      data: {
        message: 'Missing name',
      }
    };
  }
  if (!body.phoneNumber) {
    throw {
      success: false,
      data: {
        message: 'Missing phoneNumber',
      }
    };
  }
  if (!body.email) {
    throw {
      success: false,
      data: {
        message: 'Missing email',
      }
    };
  }
  if (!body.gender) {
    throw {
      success: false,
      data: {
        message: 'Missing gender',
      }
    };
  }
  if (!body.birthday) {
    throw {
      success: false,
      data: {
        message: 'Missing birthday',
      }
    };
  }
};

const response = () => ({
  success: true,
  data: {
    id: 1,
    name: 'Jean',
    phoneNumber: '+33606039450',
    email: 'test@gmail.com',
    gender: 'male',
    birthday: '04/04/2000',
    pictures: [],
    occupation: null,
    description: null,
    diet: 'vegan',
    settings: [],
    location: {
      coordinates: [],
      city: null,
      region: null,
      country: null
    },
    interest: null,
    age: {
      min: null,
      max: null
    },
    distance: {
      min: null,
      max: null
    },
    distanceUnit: null,
    premiumExpiration: null,
    premium: false,
    seeds: 10,
    lastConnected: null,
    connected: false,
    status: 'active'
  },
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};