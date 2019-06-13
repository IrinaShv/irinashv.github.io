function addZero(variable, element) {
  if (variable < 10) {
    document.querySelector(element).innerHTML = '0' + variable;
  } else {
    document.querySelector(element).innerHTML = variable;
  }
}

function playAudio() {
  document.getElementById('audio').play();
}

function stopAudio() {
  document.getElementById('audio').pause();
  document.getElementById('audio').currentTime = 0;
  document.querySelector('.popup').classList.add('hide');
}

function counting() {
  if (seconds == 0 && minutes == 0) {
    reset();
    document.querySelector('.popup').classList.remove('hide');
  } else if (seconds == 0) {
    seconds = 59;
    minutes--;
  } else if (seconds >= 1) {
    seconds--;
  }
  addZero(minutes, '.minutes');
  addZero(seconds, '.seconds');
}

function start() {
  timer = setInterval(counting, 1000);
  document.querySelector('.start').classList.add('hide');
  document.querySelector('.pause').classList.remove('hide');

  audioTimeout = setTimeout(playAudio, minutes * 60 * 1000 + seconds * 1000);
}

function pause() {
  clearInterval(timer);
  clearTimeout(audioTimeout);
  document.querySelector('.pause').classList.add('hide');
  document.querySelector('.start').classList.remove('hide');
}

function reset() {
  pause();
  startTime = 0; minutes = 0; seconds = 0;
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
}

var startTime = 0, minutes = 0, seconds = 0, timer, audioTimeout;

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  startTime = Number(document.getElementById('time').value);
  addZero(startTime, '.minutes');
  minutes = startTime;
  seconds = 0;
  addZero(seconds, '.seconds');
});

document.querySelector('.start').addEventListener('click', start);

document.querySelector('.pause').addEventListener('click', pause);

document.querySelector('.reset').addEventListener('click', reset);

document.querySelector('.popup__btn').addEventListener('click', stopAudio);