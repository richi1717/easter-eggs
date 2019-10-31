import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const options = {
    eventType: 'keydown',
    keystrokeDelay: 1000
  };

  keyMapper(options);
});

function keyMapper(options) {
  const delay =
    hasProperty('keystrokeDelay', options) &&
    options.keystrokeDelay >= 300 &&
    options.keystrokeDelay;
  const keystrokeDelay = delay || 1000;
  const eventType =
    (hasProperty('eventType', options) && options.eventType) || 'keydown';

  const state = {
    buffer: [],
    lastKeyTime: Date.now()
  };

  document.addEventListener(eventType, event => {
    const key = event.key;
    const currentTime = Date.now();
    let buffer = [];

    if (currentTime - state.lastKeyTime > keystrokeDelay) {
      buffer = [key];
    } else {
      buffer = [...state.buffer, key];
    }

    state.buffer = buffer;
    state.lastKeyTime = currentTime;

    updateUI(buffer);
  });

  function hasProperty(property, object) {
    return object && object.hasOwnProperty(property);
  }
}

function createVelociRyan() {
  const { id } = document.body;
  document.body.id = `velociryan-container ${id}`;
  const velociryan = document.createElement('div');
  velociryan.id = 'velociryan';
  document.body.appendChild(velociryan);
  cleanUp(id, velociryan);
}

function updateUI(keySequence) {
  const userInput = keySequence.join('').toLowerCase();
  const konamiCode =
    'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter';
  const isKonamiCode = userInput === konamiCode;

  if (isKonamiCode) {
    createVelociRyan();
  }
}

function cleanUp(id, element) {
  setTimeout(() => {
    document.body.id = id;
    document.body.removeChild(element);
  }, 6000)
}
