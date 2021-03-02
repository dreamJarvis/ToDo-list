import React, {Component} from 'react';
import {connect} from 'react-redux';

class Forms extends Component {
    state = {
        content: '',
        id:null
    }

    hangleChange = (e)=>{
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const newId = (Math.random()*10);

        // setState() is an asynchronous function, .'. we need a callback
        this.setState({
            id:newId
        }, ()=>{
            this.props.addPost(this.state);

            // initiates below code only when the content is added to the list
            // setting the value of input bar == ""
            this.setState({
                content:''
            })
        });       
    }   

    render(){
        return(
            <div className="container row formField center-align">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s11">
                            <label htmlFor="task" >Add todo</label>
                            <input id="task" type="text" className="validate" onChange={this.hangleChange} value={this.state.content}/>
                        </div>
                        <div className="addBtn col s1">
                            <a href="#!" className="btn-floating btn-med waves-effect waves-light grey left addBtn" onClick={this.handleSubmit}>
                                <i className="material-icons left">add</i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    // addPost() will be added to the props of this component
    return{
        addPost: (state)=>{
            dispatch({
                type: 'ADD_POST',
                payload: state
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Forms);