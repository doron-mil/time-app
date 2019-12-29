import {IGeneralState} from './general-state';
import {ITimesState} from './times-state';

export interface AppState {
  general: IGeneralState;
  times: ITimesState;
}
