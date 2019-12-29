import React from 'react';
import {TimeRecord} from '../../redux/model/times-model';
import Icon from '@material-ui/core/Icon';
import DateFnsUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export interface ITimeRecordProps {
    data: TimeRecord,
}

class TimeRecordComp extends React.Component <ITimeRecordProps> {
    state = {
        selectedDate: new Date('2014-08-18T21:11:54')
    };
    handleDateChange = () => {
        console.log('1111');
        // this.props.addRecord()
    };
    handleTimeChange = () => {
        console.log('1111');
        // this.props.addRecord()
    };

    render() {
        const {data} = this.props;
        const {selectedDate} = this.state;

        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={this.handleTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
                <Icon>star</Icon>
                {data.id}
                </MuiPickersUtilsProvider>
            </div>
        );
    }

}


export default TimeRecordComp;
