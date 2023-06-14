import HeaderView from './view/header-view.js';
import {RenderPosition, render} from './framework/render.js';
import NewPointButtonView from './view/new-point-button-view.js';

import MainPresenter from './presenter/main-presenter.js';

import PointsModel from './model/points-model.js';

import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const mainPresenter = new MainPresenter({
  container: siteMainElement,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: siteFilterElement,
  filterModel,
  pointsModel,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  mainPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
  document.querySelector('.event__reset-btn').textContent = 'Cancel';
}

render(new HeaderView(), siteHeaderElement, RenderPosition.AFTERBEGIN);
render(newPointButtonComponent, siteHeaderElement, RenderPosition.BEFOREEND);

filterPresenter.init();
mainPresenter.init();
