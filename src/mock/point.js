import {nanoid} from 'nanoid';
import {getRandomArrayElement, getRandomNumber} from '../utils/common.js';
import {TYPES_OF_POINT} from '../const.js';

const mockDestinations = [
  {
    id: '10',
    name: 'Amsterdam',
    description: 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Amsterdam parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Cras aliquet varius magna'
      }
    ]
  },
  {
    id: '11',
    name: 'Geneva',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Phasellus eros mauris'
      }
    ]
  },
  {
    id: '12',
    name: 'Paris',
    description: 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Phasellus eros mauris'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Eiffel Tower'
      },
    ]
  },
  {
    id: '13',
    name: 'London',
    description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Beautiful London'
      }
    ]
  },
  {
    id: '14',
    name: 'Rome',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Aliquam id orci'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 50)}`,
        description: 'Nunc fermentum tortor ac porta dapibus'
      }
    ]
  }
];

const mockOffers = [
  {
    id: '20',
    type: 'business',
    title: 'Upgrade to a business class',
    price: 120
  },
  {
    id: '21',
    type: 'luggage',
    title: 'Add luggage',
    price: 30
  },
  {
    id: '22',
    type: 'comfort',
    title: 'Switch to comfort class',
    price: 100
  },
  {
    id: '23',
    type: 'meal',
    title: 'Add meal',
    price: 15
  },
  {
    id: '24',
    type: 'seats',
    title: 'Choose seats',
    price: 5
  },
  {
    id: '25',
    type: 'train',
    title: 'Travel by train',
    price: 40
  }
];

const mockPoints = [
  {
    id: '1',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '10'),
    dateFrom: '2023-04-24T18:25',
    dateTo: '2023-04-24T22:36',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: false,
      21: false,
      22: true,
      23: false,
      24: true,
      25: true
    },
    offers: [
      mockOffers.find((value) => value.id === '22'),
      mockOffers.find((value) => value.id === '24'),
      mockOffers.find((value) => value.id === '25'),
    ]
  },
  {
    id: '2',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '14'),
    dateFrom: '2023-04-26T22:55',
    dateTo: '2023-04-27T02:18',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    isOffer: {
      20: false,
      21: true,
      22: false,
      23: false,
      24: false,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '21')
    ]
  },
  {
    id: '3',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '10'),
    dateFrom: '2023-05-03T04:28',
    dateTo: '2023-05-03T08:52',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: false,
      21: true,
      22: false,
      23: false,
      24: true,
      25: true
    },
    offers: [
      mockOffers.find((value) => value.id === '21'),
      mockOffers.find((value) => value.id === '24'),
      mockOffers.find((value) => value.id === '25')
    ]
  },
  {
    id: '4',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '12'),
    dateFrom: '2023-05-04T17:31',
    dateTo: '2023-05-04T21:43',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: true,
      21: false,
      22: false,
      23: true,
      24: false,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '20'),
      mockOffers.find((value) => value.id === '23')
    ]
  },
  {
    id: '5',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '11'),
    dateFrom: '2023-05-06T23:14',
    dateTo: '2023-05-07T05:17',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    isOffer: {
      20: false,
      21: true,
      22: true,
      23: false,
      24: false,
      25: true
    },
    offers: [
      mockOffers.find((value) => value.id === '21'),
      mockOffers.find((value) => value.id === '22'),
      mockOffers.find((value) => value.id === '25')
    ]
  },
  {
    id: '6',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '13'),
    dateFrom: '2023-05-10T14:38',
    dateTo: '2023-05-10T19:20',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    isOffer: {
      20: true,
      21: false,
      22: false,
      23: false,
      24: true,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '20'),
      mockOffers.find((value) => value.id === '24')
    ]
  },
  {
    id: '7',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '10'),
    dateFrom: '2023-05-12T13:41',
    dateTo: '2023-05-12T16:05',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    isOffer: {
      20: false,
      21: false,
      22: true,
      23: false,
      24: false,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '22')
    ]
  },
  {
    id: '8',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '14'),
    dateFrom: '2023-05-15T18:34',
    dateTo: '2023-05-15T21:09',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: false,
      21: false,
      22: true,
      23: true,
      24: false,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '22'),
      mockOffers.find((value) => value.id === '23')
    ]
  },
  {
    id: '9',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '12'),
    dateFrom: '2023-05-16T08:55',
    dateTo: '2023-05-16T11:39',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: true,
      21: true,
      22: false,
      23: false,
      24: false,
      25: true
    },
    offers: [
      mockOffers.find((value) => value.id === '20'),
      mockOffers.find((value) => value.id === '21'),
      mockOffers.find((value) => value.id === '25')
    ]
  },
  {
    id: '10',
    type: getRandomArrayElement(TYPES_OF_POINT),
    destination: mockDestinations.find((value) => value.id === '10'),
    dateFrom: '2023-05-21T22:51',
    dateTo: '2023-05-22T03:47',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    isOffer: {
      20: false,
      21: false,
      22: false,
      23: false,
      24: true,
      25: false
    },
    offers: [
      mockOffers.find((value) => value.id === '24')
    ]
  }
];


function getRandomPoint() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockPoints)
  };
}

export {getRandomPoint, mockOffers};
