import {render, replace, remove} from '../framework/render.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-view.js';
import {UserAction, UpdateType} from '../const.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #point = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #eventListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;
  #pointsModel = null;

  constructor({eventListContainer, onDataChange, onModeChange, pointsModel}) {
    this.#eventListContainer = eventListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
    this.#pointsModel = pointsModel;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    const destination = this.#pointsModel.destinations.find((oneDestination) => oneDestination.id === this.#point.destination);

    this.#pointComponent = new EventView({
      point: this.#point,
      destination: destination,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
      offers: this.#pointsModel.offers,
    });

    this.#pointEditComponent = new EditEventView({
      point: this.#point,
      offers: this.#pointsModel.offers,
      destinations: this.#pointsModel.destinations,
      onFormSubmit: this.#handleFormSubmit,
      onReset: this.#handleResetForm,
    });


    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#eventListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointEditComponent.reset(this.#point, this.#pointsModel.offers, this.#pointsModel.destinations);
      this.#replaceFormToCard();
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite},
    );
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      point,
    );
    this.#replaceFormToCard();
  };

  #handleResetForm = () => {
    this.#pointEditComponent.reset(this.#point, this.#pointsModel.offers, this.#pointsModel.destinations);
    this.#replaceFormToCard();
  };

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#pointEditComponent.reset(this.#point, this.#pointsModel.offers, this.#pointsModel.destinations);
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }
}
