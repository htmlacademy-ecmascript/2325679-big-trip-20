import { nanoid } from 'nanoid';
import { getRandomArrayElement, getRandomNumber } from '../utils/common.js';

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
    'type': 'taxi',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy taxi',
        'price': 200
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class taxi',
        'price': 280
      },
      {
        'id': nanoid(),
        'title': 'Order a business class taxi',
        'price': 350
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order a bus for 10 people',
        'price': 560
      },
      {
        'id': nanoid(),
        'title': 'Order a bus for 30 people',
        'price': 800
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order reserved seat',
        'price': 370
      },
      {
        'id': nanoid(),
        'title': 'Order a seat in coupe',
        'price': 450
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy ship',
        'price': 390
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class ship',
        'price': 560
      },
      {
        'id': nanoid(),
        'title': 'Order a business class ship',
        'price': 780
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy car',
        'price': 260
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class car',
        'price': 340
      },
      {
        'id': nanoid(),
        'title': 'Order a business class car',
        'price': 410
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': nanoid(),
        'title': 'Order an economy flight',
        'price': 480
      },
      {
        'id': nanoid(),
        'title': 'Order a comfort class flight',
        'price': 600
      },
      {
        'id': nanoid(),
        'title': 'Order a business class flight',
        'price': 820
      }
    ]
  },
];


const mockPoints = [
  {
    id: '1',
    type: 'train',
    destination: '10',
    dateFrom: '2023-04-24T18:25',
    dateTo: '2023-04-24T22:36',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0].id
    ]
  },
  {
    id: '2',
    type: 'drive',
    destination: '14',
    dateFrom: '2023-04-26T22:55',
    dateTo: '2023-04-27T02:18',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    offers: [
      mockOffers[4].offers[0].id,
      mockOffers[4].offers[2].id
    ]
  },
  {
    id: '3',
    type: 'taxi',
    destination: '10',
    dateFrom: '2023-05-03T04:28',
    dateTo: '2023-05-03T08:52',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[0].offers[1].id
    ]
  },
  {
    id: '4',
    type: 'ship',
    destination: '12',
    dateFrom: '2023-05-04T17:31',
    dateTo: '2023-05-04T21:43',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[3].offers[1].id,
      mockOffers[3].offers[2].id
    ]
  },
  {
    id: '5',
    type: 'bus',
    destination: '11',
    dateFrom: '2023-05-06T23:14',
    dateTo: '2023-05-07T05:17',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    offers: [
      mockOffers[1].offers[1].id
    ]
  },
  {
    id: '6',
    type: 'flight',
    destination: '13',
    dateFrom: '2023-05-10T14:38',
    dateTo: '2023-05-10T19:20',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    offers: [
      mockOffers[5].offers[0].id,
      mockOffers[5].offers[1].id
    ]
  },
  {
    id: '7',
    type: 'taxi',
    destination: '10',
    dateFrom: '2023-05-12T13:41',
    dateTo: '2023-05-12T16:05',
    price: getRandomNumber(50, 500),
    isFavorite: true,
    offers: [
      mockOffers[0].offers[1].id,
      mockOffers[0].offers[2].id
    ]
  },
  {
    id: '8',
    type: 'train',
    destination: '14',
    dateFrom: '2023-05-15T18:34',
    dateTo: '2023-05-15T21:09',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0].id,
      mockOffers[2].offers[1].id
    ]
  },
  {
    id: '9',
    type: 'drive',
    destination: '12',
    dateFrom: '2023-05-16T08:55',
    dateTo: '2023-05-16T11:39',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[4].offers[0].id,
      mockOffers[4].offers[1].id
    ]
  },
  {
    id: '10',
    type: 'ship',
    destination: '10',
    dateFrom: '2023-05-21T22:51',
    dateTo: '2023-05-22T03:47',
    price: getRandomNumber(50, 500),
    isFavorite: false,
    offers: [
      mockOffers[3].offers[0].id
    ]
  }
];


function getRandomPoint() {
  return {
    ...getRandomArrayElement(mockPoints),
    id: nanoid(),
  };
}

export { getRandomPoint, mockOffers, mockDestinations};
