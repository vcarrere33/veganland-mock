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
    user: {
      id: 1,
      name: 'Jean',
      phoneNumber: '+33606039450',
      email: 'test@gmail.com',
      gender: 'male',
      birthday: '04/04/2000',
      pictures: [],
      occupation: 'J\'aime les fleurs',
      description: 'Salut ! Salut !',
      diet: 'vegan',
      settings: [
        {
          slug: 'cooking',
          value: 'chef'
        }
      ],
      location: {
        coordinates: [44.8428348, 0.5490573],
        city: 'Bordeaux',
        region: 'Aquitaine',
        country: 'France'
      },
      interest: 'female',
      age: {
        min: 10,
        max: 30
      },
      distance: {
        min: 10,
        max: 30
      },
      distanceUnit: 'km',
      premiumExpiration: '20/12/2021',
      premium: true,
      seeds: 5,
      lastConnected: '20/12/2020',
      connected: false,
      status: 'active'
    },
    token: 'test',
    new: true
  }
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};