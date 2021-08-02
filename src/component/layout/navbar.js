import React from 'react'
import { Link } from 'react-router-dom';
import Signinlink from './signedinlink';
import Signoutlink from './signoutlink';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth }  = props;
    const links = auth.uid ? <Signinlink/> : <Signoutlink/>
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Marioplan</Link>
                    { links }
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("..........",state)
    return {
        auth:state.Firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
