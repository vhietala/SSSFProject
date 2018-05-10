define({ "api": [
  {
    "type": "delete",
    "url": "/events/:param",
    "title": "Return events based on search paramater",
    "name": "DeleteEvent",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID</p>"
          }
        ]
      }
    },
    "description": "<p>This is used to remove one TeamEvent from the database</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/events/:param",
    "title": "Return events based on search paramater",
    "name": "GetEvent",
    "group": "Event",
    "description": "<p>This one can be used to search for events based on the id it returns one item as a JSON.</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/events/join/:param/:userId",
    "title": "Return events based on search paramater",
    "name": "GetEvent",
    "group": "Event",
    "description": "<p>This one can be used to search for events based on the id it returns one item as a JSON.</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Request all events from database",
    "name": "GetEvents",
    "group": "Event",
    "description": "<p>This one is used to get all events from the database. it returns a JSON containing the data.</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/events/add",
    "title": "Request all events from database",
    "name": "GetEventsAdd",
    "group": "Event",
    "description": "<p>Request returns a page for adding new events</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/events",
    "title": "creates a new TeamEvent",
    "name": "PostEvent",
    "group": "Event",
    "description": "<p>This is used to create new TeamEvents uses JSON as input</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "post",
    "url": "/events/:param",
    "title": "Update events based on parameter",
    "name": "PostEventUpdate",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID</p>"
          }
        ]
      }
    },
    "description": "<p>This is used to update the event defined in parameter</p>",
    "version": "0.0.0",
    "filename": "routes/events.js",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Request the main index page",
    "name": "GetIndex",
    "group": "Index",
    "description": "<p>Requests the main index page from the server</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "Get login page",
    "name": "GetLogin",
    "group": "Index",
    "description": "<p>Request the login page from the server</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "",
    "name": "GetLogout",
    "group": "Index",
    "description": "<p>Log out from the server</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/ping",
    "title": "Request all events from database",
    "name": "GetPing",
    "group": "Index",
    "description": "<p>Responds a ping with a pong</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/register",
    "title": "Request the register page",
    "name": "GetRegister",
    "group": "Index",
    "description": "<p>Request the register page from the server</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "name": "PostLogin",
    "group": "Index",
    "description": "<p>used to login to the server</p>",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request current user info",
    "name": "GetUsers",
    "group": "Users",
    "description": "<p>This is used to get the current user info from the database, response is a JSON</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:param",
    "title": "Request a user info based on id",
    "name": "GetUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      }
    },
    "description": "<p>This is used to get the one user info from the database</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/edit",
    "title": "Request user edit page",
    "name": "GetUsersEdit",
    "group": "Users",
    "description": "<p>This redirects to user editing page</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "PostUsers",
    "group": "Users",
    "description": "<p>registering a new user</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/update",
    "title": "update current user",
    "name": "PostUsersUpdate",
    "group": "Users",
    "description": "<p>Updating current user</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/update/:param",
    "title": "Update a user",
    "name": "PutUsersId",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      }
    },
    "description": "<p>Updating a user with admin privileges</p>",
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
