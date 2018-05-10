'use strict';

const modal = document.getElementById('modal');
const span = document.getElementById('close');
const closeButton = document.getElementById('close-button');

const user = document.user;

user.addListener((value) => {
    viewAdminMenu(value);
});

const viewAdminMenu = (user) => {
    if (user.type !== 'admin') {
        document.getElementById('adminDropdown').style.visibility = 'hidden';
    }
};


// document.getElementById('open-modal').addEventListener('click', evt => {
//     openmodal(evt.target);
// });

const openModal = (id,uid) => {
    const url = '/events/' + id;
    console.log('id:' + id);
    console.log('uid: '+uid);
    fetch(url, {
        method: 'get',
    }).then(resp => {
        return resp.json();
    }).then(json => {
        const item = json[0];
        document.getElementById('modal-header').innerHTML = item.category;
        document.getElementById('modal-title').innerHTML = item.title;
        document.getElementById('modal-info').innerHTML = item.info;
        document.getElementById('modal-joinButton').addEventListener('click', evt => {
            evt.preventDefault();
            const url = '/events/join/' + id + '/' + uid;
            fetch(url, {
                method: 'get',
            }).then(resp => {

            }).then(json => {
                console.log(json);
            })
        });
        document.getElementById('modal').style.display = 'block';
    });
};

const joinEvent = (eventId, userId) => {
    const url = '/events/' + eventId;
    fetch(url, {
        method: 'get',
        userId: userId
    }).then(() => {

    })
};

span.onclick = () => {
    modal.style.display = 'none';
};

closeButton.onclick = () => {
    modal.style.display = 'none';
};
//
window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }

};