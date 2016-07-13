import React, { Component } from 'react'
import Todo from './Todo'
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'

class TodoList extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    var self = this;
    return (
      <ul>
        {
          self.props.todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
            />
          )
        }
      </ul>
    );
  }
}


// mapping app state to props
function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps, { toggleTodo })(TodoList)
