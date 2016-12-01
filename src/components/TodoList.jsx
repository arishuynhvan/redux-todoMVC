import React from 'react';
import TodoItem from './TodoItem';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
   // Filters the items according to their status
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
    return [];
  }
  /** Check whether an item is completed*/
  isCompleted(item){
    return item.get('status') === 'completed';
  }
  /**Pass down callback functions: toggleComplete, deleteItem, editItem*/
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')}
                    isCompleted={this.isCompleted(item)}
                    isEditing={item.get('editing')}
                    toggleComplete={this.props.toggleComplete}
                      deleteItem={this.props.deleteItem}
                      editItem={this.props.editItem}
                      id={item.get('id')}
                      doneEditing={this.props.doneEditing}
                      cancelEditing={this.props.cancelEditing}/>
        )}
      </ul>
    </section>
  }// Pass down info on completion and editing (to TodoItem) as a prop as well
};