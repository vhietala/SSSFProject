'use strict';
const events = fetch('/events').then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});


