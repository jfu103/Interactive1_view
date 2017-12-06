

function setup() {
  loadJSON("http://api.open-notify.org/iss-now.json", getCoolData, 'jsonp');
}

function getCoolData(data) {
  createElement('h1', data.iss_position.latitude);
  createElement('h1', data.iss_position.longitude);
}

function draw() {

}