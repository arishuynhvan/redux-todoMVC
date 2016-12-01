# Learning TTD React-Redux-Immutable Web App Dev

## Sources:

1. [UI Layer](http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-1/)

2. [Client - Logic Immplementation](http://www.theodo.fr/blog/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-2/)

3. [Original Repo](https://github.com/phacks/redux-todomvc)
## What I've learned

- Data structure for implementing React into MVC
    State
      todoList
        items
          props: id, text, status, editing
      todoTools
        filters: active, completed
        clearCompleted

- Props: uni-directional data from parent component passed down to children component
- Functions: defined directly where they are needed first, or at the first parent with immediate children sharing the functions. They are passed down as props strictly
- Actions are triggered by UI layer (in components rendering to DOM), but implemented in reducer. To map these state modifers (actions) to props of UI, connect action_creators (or store?) to the very top component of the application (e.g. TodoApp)
- For testing, the cases must be comprehensive from newly initiated app (undefined data, actions) to typical cases (set up mock window, document objects & mock data)

## What I am still confused about

- The mechanism of mapping reducers to props through action_creators. Are they stores?
- When do I need to restart the server to observe changes? Why so?
- How to use the react, redux dev tools to observe state and debug?
- React Router was not mentioned in this tutorial? Is there an alternative method that uses react router?
- There is no back-end for this application.
  => How should I set up my webpack to connect with NodeJS and Express for the backend to write the to-do list to a JSON file locally and retrieve it after reloading the page?
  => Alternatively, how do I use LocalStorageAPI with this existing app for storing JSON object of todoItems in my browser.

## Future Directions

- [ ] Attempt the [classic TTD Redux-React tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [ ] Attempt the [Phoenix framework and PosgreSQL](https://blog.diacode.com/trello-clone-with-phoenix-and-react-pt-1) for backend with the familiar stack for front-end
- [ ] Attempt the [Scotch's tutorial on Twitter stream with Node and ReactJS](https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js)
- [ ] Write my own test specs for the Scotch project with ChaiJS at least
- [ ] Write reviews for these attempts
- [ ] If my React-Redux knowledge is still not concrete after these, I'll buy Wes Bos's React for beginners course and study it thoroughly (op)
- [ ] [Egghead Series of Redux tutorials by Dan Abramov](https://egghead.io/courses/getting-started-with-redux)
- [ ] [Wes Bos Redux Training](https://learnredux.com/)



