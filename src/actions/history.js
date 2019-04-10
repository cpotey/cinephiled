// Our own history object so we can redirect on action creators
// We use normal router because of this and pass it our history object
// import createHistory from 'history/createBrowserHistory';
// import { createHistory } from 'history';

import { createBrowserHistory } from 'history'

// import("history").createBrowserHistory

export default createBrowserHistory();