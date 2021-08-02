import React, { Component } from 'react'
import { connect } from "react-redux";
import { createProject } from '../../store/actions/project';
import { Redirect } from 'react-router-dom';

export class Createproject extends Component {
    state = {
        title:"",
        content:""
    }
    handlechange=(e)=>
    {
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handlesubmit=(e)=>
    {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }
    render() {
        const { auth } = this.props
        if(!auth.uid) return  <Redirect to="/signin"/>
        return (
            <div className="container">
                <form onSubmit={this.handlesubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="email">title</label>
                        <input type="text" id="title" onChange={this.handlechange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">content</label>
                        <textarea name="" id="content" className="materialize-textarea"  onChange={this.handlechange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth:state.Firebase.auth 
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        createProject:(project) =>dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Createproject)
