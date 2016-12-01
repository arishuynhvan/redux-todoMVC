import React from 'react';
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoTools from './TodoTools'
import Footer from './Footer'
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class TodoApp extends React.Component {
   getNbActiveItems() {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        (item) => item.get('status') === 'active'
      );
      return activeItems.size;
    }
    return 0;
  }

  render() {
    /** We use the spread operator for better lisibility bc props is a object */
    return <div>
      <section className="todoapp">
      <TodoHeader addItem={this.props.addItem}/>
        <TodoList {...this.props} />
      <TodoTools changeFilter={this.props.changeFilter}
                  filter={this.props.filter}
                  clearCompleted={this.props.clearCompleted}
                  getNbActiveItems={this.getNbActiveItems}/>
      </section>
      <Footer />
    </div>
  }
};
/** Retrieve props from state; The first state is defined in index.jsx */
function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}
/** Map state attributes to React props for the TodoApp components */
export const TodoAppContainer = connect(mapStateToProps,actionCreators)(TodoApp);