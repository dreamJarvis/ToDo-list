import React, {Component} from 'react';
import {connect} from 'react-redux';

class Todos extends Component{
    // render : a place to do js
    render(){
        const list = this.props.todos ? 
        (
            this.props.todos.map((todo)=>{
                return(
                    <div className="card-panel hoverable blue-grey lighten-3" key={todo.id}>
                        <div className="card-content white-text center-align">
                            <span className="flow-text left-align">{todo.content}</span>
                            <a href="#!" className="btn-floating btn-medium waves-effect waves-light red right deleteItem" onClick={()=>{ this.props.deleteTaskFromStore(todo.id)}}>
                                <i className="material-icons">delete</i>
                            </a>
                        </div>
                    </div>
                )
            })
        )
        :
        (
            <div className="card-panel red lighten-3">
                <div className="card-content white-text center-align">
                    <span className="flow-text left-align">No Task Added</span>
                </div>
            </div>
        );

        return(
            <div className="container todoList">
                {list}
            </div>
        )
    }
}

// get posts from the redux-store
const mapStateToProps = (state)=>{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteTaskFromStore: (id) =>{ dispatch({
            type: 'DELETE_POST',
            id : id
        })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);