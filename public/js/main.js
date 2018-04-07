'use strict';
fetch('/events').then(res => {
  return res.json();
}).then(json => {
  console.log(json);
  document.querySelector('table').innerHTML = table(json);
});