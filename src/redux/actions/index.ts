import {v4} from 'uuid'

import {TimeRecord} from '../model/times-model';

export enum ActionTypesEnum {
    GENERAL_ACTION = 'GENERAL_ACTION',
    ADD_TIME_RECORD = 'ADD_TIME_RECORD',
}


export class ActionGenerator {
    static generalAction = () => ({
        type: ActionTypesEnum.GENERAL_ACTION
    });

    static AddTimeRecord = () => {
        const newTimeRecord = new TimeRecord();
        newTimeRecord.id = v4();
        return ({
            type: ActionTypesEnum.ADD_TIME_RECORD,
            payload: newTimeRecord
        });
    };
}
