define({ "api": [
  {
    "type": "get",
    "url": "/event/:param",
    "title": "Return events based on search paramater",
    "name": "GetEvent",
    "group": "Event",
    "description": "<p>This one can be used to search for events based on the title it returns one item as a JSON.</p>",
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/event",
    "title": "Request all events from database",
    "name": "GetEvents",
    "group": "Event",
    "description": "<p>This one is used to get all events from the database. it returns a JSON containing the data.</p>",
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/event",
    "title": "post new event",
    "name": "PostEvent",
    "group": "Event",
    "description": "<p>This is used to post a new event to the database it redirects to main page if successful, if not it sends an error message</p>",
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Event"
  }
] });