'use strict';
fetch('/event').then(res => {
  return res.json();
}).then(json => {
  console.log(json);
  document.querySelector('table').innerHTML = table(json);
});

const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');

button.addEventListener('click', () => {
  document.querySelector('table').innerHTML='';
  const param = input.value;
  const url = '/event/' + param;
  console.log(url);
  fetch(url).then(res => {
    return res.json();
  }).then(json =>{
    console.log(json);
    document.querySelector('table').innerHTML = table(json);
  });
});

