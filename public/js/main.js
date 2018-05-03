'use strict';
fetch('/events').then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    //document.querySelector('table').innerHTML = table(json);
});

// const input = document.getElementById('searchInput');
// const button = document.getElementById('searchButton');
//
// button.addEventListener('click', () => {
//     console.log('search pressed');
//     document.querySelector('table').innerHTML = '';
//     const param = input.value;
//     const url = '/event/' + param;
//     console.log(url);
//     fetch(url).then(res => {
//         return res.json();
//     }).then(json => {
//         console.log(json);
//         document.querySelector('table').innerHTML = table(json);
//     });
// });

// document.querySelector('#eventCreate').addEventListener('submit', evt => {
//     console.log('submit pressed');
//     evt.preventDefault();
//     const data = new FormData();
//     data.append('title', evt.target.title.value);
//     data.append('category', evt.target.category.value);
//     data.append('date', evt.target.date.value);
//     data.append('hour', evt.target.hour.value);
//     data.append('minutes', evt.target.minutes.value);
//     console.log('this '+JSON.stringify(data));
//     const url = '/events';
//     fetch(url,{
//         method: 'post',
//         body: data,
//     }).then(res => {
//         return resp.json();
//     }).then(json=>{
//         console.log(json);
//     })
// });