import React from 'react';
import {connect} from 'react-redux';
import {ITimesState} from '../../redux/state/times-state';
import {AnyAction, Dispatch} from 'redux';
import {AppState} from '../../redux/state';
import {ActionGenerator} from '../../redux/actions';
import TimeRecordComp from '../time-record/time-record';

interface IStartProps extends ITimesState {
    addRecord?(): void,
}

class Start extends React.Component <IStartProps> {


    doSomething = () => {
        console.log('1111');
        // this.props.addRecord()
    };

    render() {
        const {recordsArray, addRecord} = this.props;

        return (
            <div>
                 <button onClick={addRecord}>Add</button>
               {recordsArray?.map( timeRecord => (
                    <TimeRecordComp data={timeRecord} key={timeRecord.id}></TimeRecordComp>
                ))}
            </div>
        );
    }

}

const mapState2Props = (state: AppState) => {
    return {
        ...state.times
    };
};

const mapDispatch2Props = (dispatch: Dispatch<AnyAction>) => {
    return {
        addRecord: () => dispatch(ActionGenerator.AddTimeRecord())
    };
};

export default connect(mapState2Props, mapDispatch2Props)(Start);
