import {getRandomPoint, mockOffers, mockDestinations} from '../mock/point.js';
import {POINT_COUNT} from '../const.js';


export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
