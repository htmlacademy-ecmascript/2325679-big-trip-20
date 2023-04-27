import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import CreateEventView from '../view/create-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';

const COUNT_RENDER = 3;

export default class MainPresenter {
  sortComponent = new SortView();
  createEventComponent = new CreateEventView();
  eventListComponent = new EventListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventListComponent, this.container);
    render(this.createEventComponent, this.eventListComponent.getElement());

    for (let i = 0; i < COUNT_RENDER; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
  }
}
