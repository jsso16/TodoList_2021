import React from 'react';
import './App.css';
import {TextField, Typography} from '@material-ui/core';
import {KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">Todo List</div>
        <div className="input-area">
          <TextField label="제목" size="normal" margin="normal" fullWidth required />
          <TextField label="상세 내용" size="normal" margin="normal" fullWidth multiline />
          <KeyboardDatePicker
            disableToolbar variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value)=>console.log(value)} 
            style = {{width: '50%'}} 
            KeyboardButtonProps={{'aria-label': 'change date'}}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작 시간"
            variant="inline"
            onChange={(value)=>console.log(value)} 
            style = {{width: '50%'}} 
            KeyboardButtonProps={{'aria-label': 'change time'}}
          />
        </div>
        <div className="list-area">리스트 영역</div>
        <div>
          <Typography varient="body2" color="textSecondary" align="center">
            {'Copyright © 전소진 ' + new Date().getFullYear() + '.'}
          </Typography>
        </div>
      </div>
    );
  }
}

export default App;