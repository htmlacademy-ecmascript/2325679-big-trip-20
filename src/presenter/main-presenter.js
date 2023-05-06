import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import CreateEventView from '../view/create-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';
export default class MainPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.container);
    render(this.eventListComponent, this.container);
    render(new CreateEventView({point: this.points[0]}), this.eventListComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      render(new EventView({point: this.points[i]}), this.eventListComponent.getElement());
    }
  }
}
