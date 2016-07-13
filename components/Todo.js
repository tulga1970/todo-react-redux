import React, { Component } from 'react';
import { deleteTodo, toggleTodo } from '../actions'
import { connect } from 'react-redux';

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = { showDelete : false }
  }

  render() {
    var self = this;
    return (
      <li
        onClick={(e) => {
          self.props.toggleTodo(self.props.id);
        }}
        style={{
          textDecoration: self.props.completed ? 'line-through' : 'none',
          width: '200px'
        }}
        onMouseEnter={(e) => {
          self.setState({
            showDelete : true
          })
        }}
        onMouseLeave={(e) => {
          self.setState({
            showDelete : false
          })
        }}
      >
        {self.props.text}
        <button style={{
          display: self.state.showDelete ? 'block' : 'none', float: 'right'
        }} onClick={(e) => {
            self.props.deleteTodo(self.props.id);
        }}>-</button>
      </li>
    );
  }

}

export default connect(null, {toggleTodo , deleteTodo})(Todo)
