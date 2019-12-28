import React from 'react';
import {NavLink} from "react-router-dom";
import './nav.scss';
import {MainObjectBase} from '../shared/main-object-base';


// const SomeComponent = withRouter(props => <Nav {...props}/>);

class Nav extends MainObjectBase {
    render() {
        return (
            <nav style={{height: this.props.height + '%'}} className="Nav">
                <NavLink exact activeClassName="selected-page" to="/" >Home</NavLink>
                <NavLink activeClassName="selected-page" to="/timetable">Time Table</NavLink>
            </nav>
        );
    }

}

export default Nav;
