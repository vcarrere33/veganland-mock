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
    pictures: [
      {
        url: 'https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/politique/evenement-jean-castex-est-linvite-exceptionnel-deurope-1-mardi-a-8h15-4011971/56435714-1-fre-FR/EVENEMENT-Jean-Castex-est-l-invite-exceptionnel-d-Europe-1-mardi-a-8h15.jpg',
        profile: true
      }
    ],
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
});

// @XXX Don't forget to export methods !
module.exports = {
  request,
  response,
};