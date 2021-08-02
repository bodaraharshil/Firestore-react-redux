import React from 'react';
import Projectlist from '../projects/projectlist';
import Notification from './notification';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component
{
    render(){
        const { projects,auth } = this.props
        if(!auth.uid) return  <Redirect to="/signin"/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">  
                    <Projectlist projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        projects:state.Firestore.ordered.projects,
        auth:state.Firebase.auth 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(Dashboard)