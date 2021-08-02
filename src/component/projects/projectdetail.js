import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 
import { Redirect } from 'react-router-dom'; 

const Projectdetail = (props) => {
    const { project,auth } = props;
    if(!auth.uid) return  <Redirect to="/signin"/>
    if(project)
    {
        return(
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ project.title }</span>
                    <p>{ project.content }</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>2nd september,2010</div>
                </div>
            </div>
        </div>
        )
    }
    else
    {
        return(
            <div className="container section project-details">
            <div className="card z-depth-0" style={{background:'#E7E7E7'}}>
                <div className="card-content">
                    <span className="card-title"></span>
                    <p></p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div></div>
                </div>
            </div>
        </div>
            // <div className="container">
            //     <p>Loading project........</p>
            // </div>  
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    const id  = ownProps.match.params.id;
    const projects = state.Firestore.data.projects;
    const project = projects ? projects[id] : null ;
    return {
        project:project,
        auth:state.Firebase.auth 
    }   
}

// export default Projectdetail
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(Projectdetail)