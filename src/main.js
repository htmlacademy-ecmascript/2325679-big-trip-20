import FilterView from './view/filter-view.js';
import HeaderView from './view/header-view.js';
import {RenderPosition, render} from './framework/render.js';

import MainPresenter from './presenter/main-presenter.js';

import PointsModel from './model/points-model.js';

import {generateFilter} from './mock/filter.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const mainPresenter = new MainPresenter({
  container: siteMainElement,
  pointsModel
});

const filters = generateFilter(pointsModel.points);

render(new FilterView({filters}), siteFilterElement);
render(new HeaderView(), siteHeaderElement, RenderPosition.AFTERBEGIN);

mainPresenter.init();
