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

function createSonic() {
  const { id } = document.body;
  document.body.id = `sonic-container ${id}`;
  const sonic = document.createElement('div');
  sonic.id = 'sonic';
  document.body.appendChild(sonic);

  cleanUp(id, sonic);
}

function updateUI(keySequence) {
  const velociryanId = document.getElementById('velociryan');
  const sonicId = document.getElementById('sonic');

  if (velociryanId || sonicId) {
    console.warn('Please wait until animation is done');
    return;
  }

  const userInput = keySequence.join('').toLowerCase();
  const konamiCode =
    'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter';
  const sonicCode = 'arrowupcarrowdowncarrowleftcarrowrightcaenter';
  const isKonamiCode = userInput === konamiCode;
  const isSonicCode = userInput === sonicCode;

  if (isSonicCode) {
    return createSonic();
  }

  if (isKonamiCode) {
    return createVelociRyan();
  }
}

function cleanUp(id, element) {
  setTimeout(() => {
    document.body.id = id;
    document.body.removeChild(element);
  }, 6000)
}
