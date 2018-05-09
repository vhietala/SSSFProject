'use strict';
const events = fetch('/events').then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});
const eventList = document.querySelector(eventList);
for(event in events){

}

