
export enum ActionTypesEnum {
    GENERAL_ACTION = 'GENERAL_ACTION',
}


export class ActionGenerator {
    static generalAction = () => ({
        type: ActionTypesEnum.GENERAL_ACTION
    });
}
