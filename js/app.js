//SEATTLE
var seattle = {
  name: 'Seattle',
  customers: 0,
  cookies: 0,
  min: 23,
  max: 65,
  avg: 6.3,
  total:0,
  arr: [],
  time: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  getCustomers: function (min, max) {
    return getRandomCustomers(min, max);

  },
  getCookies: function () {
    for (var j = 0; j < this.time.length; j++) {
      this.arr[j] = Math.floor(this.getCustomers(this.min, this.max) * this.avg);
    }
    for (var x = 0; x < this.arr.length; x++) {
      this.total += this.arr[x];
    }

  },
  render: function () {

    var container = document.getElementById('cookiesShop');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);

    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.time[i] + this.arr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    ulEl.appendChild(liEl);
    liEl.textContent = 'total: ' + this.total;
  },
};
//callingFunction
seattle.getCustomers(seattle.min, seattle.max);
seattle.getCookies(23, 65);
seattle.render();
//console.table(seattle);
//randomNumber
function getRandomCustomers(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min ;
}
//End of SEATTEL

//TOKYO
var tokyo = {
  name: 'Tokyo',
  customers: 0,
  cookies: 0,
  min: 3,
  max: 24,
  avg: 1.2,
  total:0,
  arr: [],
  time: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  getCustomers: function (min, max) {
    return getRandomCustomer(min, max);

  },
  getCookies: function () {
    for (var j = 0; j < this.time.length; j++) {
      this.arr[j] = Math.floor(this.getCustomers(this.min, this.max) * this.avg);
    }
    for (var x = 0; x < this.arr.length; x++) {
      this.total += this.arr[x];
    }

  },
  render: function () {

    var container = document.getElementById('cookiesShop');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);

    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (var i = 0; i < this.time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.time[i] + this.arr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    ulEl.appendChild(liEl);
    liEl.textContent = 'total: ' + this.total;
  },
};
  //callingFunction
tokyo.getCustomers(tokyo.min, tokyo.max);
tokyo.getCookies(23, 65);
tokyo.render();
//console.table(tokyo);
//randomNumber
function getRandomCustomer(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min ;

}//End of TOKYO
//DUBAI
var dubai = {
  name: 'Dubai',
  customers: 0,
  cookies: 0,
  min: 11,
  max: 38,
  avg: 3.7,
  total:0,
  arr: [],
  time: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  getCustomers: function (min, max) {
    return getRandomCustomer(min, max);

  },
  getCookies: function () {
    for (var j = 0; j < this.time.length; j++) {
      this.arr[j] = Math.floor(this.getCustomers(this.min, this.max) * this.avg);
    }
    for (var x = 0; x < this.arr.length; x++) {
      this.total += this.arr[x];
    }

  },
  render: function () {

    var container = document.getElementById('cookiesShop');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);

    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (var i = 0; i < this.time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.time[i] + this.arr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    ulEl.appendChild(liEl);
    liEl.textContent = 'total: ' + this.total;
  },
};
//callingFunction
dubai.getCustomers(dubai.min, dubai.max);
dubai.getCookies(23, 65);
dubai.render();
console.table(dubai);
//randomNumber
function getRandomCustome(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min ;

}//End of DUBAI
//Paris
var paris = {
  name: 'Paris',
  customers: 0,
  cookies: 0,
  min: 20,
  max: 38,
  avg: 2.3,
  total:0,
  arr: [],
  time: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  getCustomers: function (min, max) {
    return getRandomCustome(min, max);

  },
  getCookies: function () {
    for (var j = 0; j < this.time.length; j++) {
      this.arr[j] = Math.floor(this.getCustomers(this.min, this.max) * this.avg);
    }
    for (var x = 0; x < this.arr.length; x++) {
      this.total += this.arr[x];
    }

  },
  render: function () {

    var container = document.getElementById('cookiesShop');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);

    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (var i = 0; i < this.time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.time[i] + this.arr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    ulEl.appendChild(liEl);
    liEl.textContent = 'total: ' + this.total;
  },
};
  //callingFunction
paris.getCustomers(paris.min, paris.max);
paris.getCookies(23, 65);
paris.render();
//console.table(tokyo);
//randomNumber
function getRandomCustom(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min ;
}//End of PARIS
var lima = {
  name: 'Lima',
  customers: 0,
  cookies: 0,
  min: 2,
  max: 16,
  avg: 4.6,
  total:0,
  arr: [],
  time: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
  imagePath: 'img/salmon.png',
  getCustomers: function (min, max) {
    return getRandomCustom(min, max);

  },
  getCookies: function () {
    for (var j = 0; j < this.time.length; j++) {
      this.arr[j] = Math.floor(this.getCustomers(this.min, this.max) * this.avg);
    }
    for (var x = 0; x < this.arr.length; x++) {
      this.total += this.arr[x];
    }

  },
  render: function () {

    var container = document.getElementById('cookiesShop');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);

    var h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (var i = 0; i < this.time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.time[i] + this.arr[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    ulEl.appendChild(liEl);
    liEl.textContent = 'total: ' + this.total;

    var imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imagePath);
  },
};
//callingFunction
lima.getCustomers(lima.min, lima.max);
lima.getCookies(23, 65);
lima.render();
//console.table(lima);
