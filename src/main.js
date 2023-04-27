import FilterView from './view/filter-view.js';
import HeaderView from './view/header-view.js';
import {RenderPosition, render} from './render.js';

import MainPresenter from './presenter/main-presenter.js';

const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');

const mainPresenter = new MainPresenter({container: siteMainElement});

render(new FilterView(), siteFilterElement);
render(new HeaderView(), siteHeaderElement, RenderPosition.AFTERBEGIN);

mainPresenter.init();
