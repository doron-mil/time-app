import {ActionTypesEnum} from '../actions';
import {AnyAction} from 'redux';
import {ITimesState} from '../state/times-state';

const initialState: ITimesState = {
    recordsArray: [],
};


export default (state: ITimesState = initialState, action: AnyAction): ITimesState => {
    switch (action.type) {
        case ActionTypesEnum.ADD_TIME_RECORD:
            state.recordsArray.push(action.payload);
            return {...state, recordsArray: [...state.recordsArray]};
        default:
            return state;
    }
}
