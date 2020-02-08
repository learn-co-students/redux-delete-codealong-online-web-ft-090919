import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todo=> <Todo key={todo.id} todo={todo} delete={this.props.delete}/>)
  }

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    delete: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId})
    // { return dispatch({type: 'REMOVE_TODO', payload: todoId}) }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TodosContainer);
