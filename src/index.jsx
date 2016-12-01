import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose,createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';

/** Mock Data
const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);*/


//const filter ='all';//default filter

// We instantiate a new Redux store
const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);
// We dispatch the SET_STATE action holding the desired state
//Here is the original state!!!!
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
  //<TodoApp todos={todos} filter={filter} />,
  // We wrap our app in a Provider component to pass the store down to the components
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);
