import React from 'react';
import {Switch, Route} from "react-router-dom";
import TimeTable from '../time-table/time-table';
import Start from '../start/start';
import {MainObjectBase} from '../shared/main-object-base';

class Main extends MainObjectBase {
    render() {
        return (
            <div style={{height: this.props.height + '%'}}>
                <Switch>
                    <Route exact path="/">
                        <Start/>
                    </Route>
                    <Route exact path="/timetable">
                        <TimeTable/>
                    </Route>
                </Switch>
            </div>
        );
    }

}

export default Main;
