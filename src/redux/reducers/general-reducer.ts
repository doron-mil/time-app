import {ActionTypesEnum} from '../actions';
import {IGeneralState} from '../state/general-state';
import {Action} from 'redux';

const initialState: IGeneralState = {
    isLoading: false,
};


export default (state: IGeneralState = initialState, action:Action): IGeneralState => {
    switch (action.type) {
        case ActionTypesEnum.GENERAL_ACTION:
            return state;

        default:
            return state;
    }
}
