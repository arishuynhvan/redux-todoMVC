import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextInput from './TextInput';
import classNames from 'classnames';
//use classnames package to manipulate DOM due to complexity here
export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    var itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });/**faster way to inherit and assign classNames as props*/

    /**React has a method to set the state of a checkbox input: defaultChecked*/
    /**this is access by input[i].checked, where input is an array of all <input> components*/
    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
               className="toggle"
               defaultChecked={this.props.isCompleted}
               onClick={()=> this.props.toggleComplete(this.props.id)}/>
        <label htmlFor="todo"
                ref="text"
                onDoubleClick={()=>this.props.editItem(this.props.id)}>
          {this.props.text}
        </label>
        <button className="destroy"
                onClick={()=>this.props.deleteItem(this.props.id) }></button>
      </div>
      <TextInput text={this.props.text}
                  itemId={this.props.id}
                  cancelEditing={this.props.cancelEditing}
                  doneEditing={this.props.doneEditing}/>
    </li>
  }/** The onClick handler will call the deleteItem function given in the props */
  /** Real Logic for deleting item will be implemented by Redux and not on UI level */

};