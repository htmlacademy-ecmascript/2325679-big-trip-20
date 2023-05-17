import {render, replace} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EditEventView from '../view/edit-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';
import NoPointView from '../view/no-point-view.js';
export default class MainPresenter {
  #sortComponent = new SortView();
  #eventListComponent = new EventListView();

  #container = null;
  #pointsModel = null;
  #points = [];

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    this.#renderBoard();
  }

  #renderEvent(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new EventView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditEventView({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#eventListComponent.element);
  }

  #renderBoard() {
    render(this.#sortComponent, this.#container);
    render(this.#eventListComponent, this.#container);

    if (this.#points.length === 0) {
      render(new NoPointView(), this.#container);
      return;
    }
    for (let i = 0; i < this.#points.length; i++) {
      this.#renderEvent(this.#points[i]);
    }
  }
}
