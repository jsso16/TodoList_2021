import React from 'react';
import './App.css';
import {TextField, Typography, Button, List, ListItem, ListItemText, Dialog, DialogContent, DialogContentText} from '@material-ui/core';
import {KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import {Alert} from '@material-ui/lab';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      isBlank: false,
      isSuccess: false
    }
  }

  checkValidate() {
    const {
      title, content, startDate, startTime, endDate, endTime
    } = this.state;
    if (!title) {
      alert("제목을 입력해주세요.");
      return false;
    } else if (!content) {
      alert("상세 내용을 입력해주세요.");
      return false;
    } else if (!startDate) {
      alert("시작 예정일을 입력해주세요.");
      return false;
    } else if (!startTime) {
      alert("시작 시간을 입력해주세요.");
      return false;
    } else if (!endDate) {
      alert("종료 예정일을 입력해주세요.");
      return false;
    } else if (!endTime) {
      alert("종료 시간을 입력해주세요.");
      return false;
    }
    return true;
  }

  saveTodoList() {
    if (this.checkValidate()) {
      const {todoList, title, content, startDate, startTime, endDate, endTime} = this.state;
      todoList.push({title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime});
      this.setState({ 
        isSuccess: true,
        todoList,
        title: "",
        content: "",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null
      });
    } else {
      this.setState({isBlank: true});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">Todo List</div>
        <div className="input-area">
          <TextField label="제목" size="normal" margin="normal" fullWidth required 
            value={this.state.title}
            onChange={(e)=>this.setState({title:e.target.value})}
          />
          <TextField label="상세 내용" size="normal" margin="normal" fullWidth multiline 
            value={this.state.content}
            onChange={(e)=>this.setState({content:e.target.value})}
          />
          <KeyboardDatePicker
            disableToolbar variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            value={this.state.startDate}
            onChange={(value)=>this.setState({startDate:value})} 
            style = {{width: '50%'}} 
            KeyboardButtonProps={{'aria-label':'change date'}}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작 시간"
            variant="inline"
            value={this.state.startTime}
            onChange={(value)=>this.setState({startTime:value})} 
            style = {{width: '50%'}} 
            KeyboardButtonProps={{'aria-label':'change time'}}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="종료 예정일"
            value={this.state.endDate}
            onChange={(value)=> this.setState({endDate:value})} 
            style = {{width: '50%'}}     
            KeyboardButtonProps={{'aria-label':'change date'}}
          />
          <KeyboardTimePicker
            margin="normal"
            label="종료 시간"
            variant="inline"
            value={this.state.endTime}
            onChange={(value)=> this.setState({endTime:value})} 
            style = {{width: '50%'}}   
            KeyboardButtonProps={{'aria-label':'change time'}}
          />
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{float:'right'}}
            onClick={()=>this.saveTodoList()}
          >
            Save
          </Button>
          <Dialog
            open={this.state.isBlank}
            onClose={() => this.setState({isBlank:false})}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Alert variant="outlined" severity="error">빈칸을 입력해주세요!</Alert>
              </DialogContentText>
            </DialogContent>
            <Button autoFocus onClick={() => this.setState({isBlank:false})} color="primary">
              OK
            </Button>
          </Dialog>
          <Dialog
            open={this.state.isSuccess}
            onClose={() => this.setState({isSuccess:false})}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Alert variant="outlined" severity="success">저장에 성공하였습니다!</Alert>
              </DialogContentText>
            </DialogContent>
            <Button autoFocus onClick={() => this.setState({isSuccess:false})} color="primary">
              OK
            </Button>
          </Dialog>
        </div>
        <div className="list-area">
        <List>
            {this.state.todoList.map((todoItem, idx) => {
              const {
                title, startDate, startTime, endDate, endTime
              } = todoItem;
              return (
                <ListItem key={idx} role={undefined} dense button>
                  <ListItemText
                    primary={title}
                    secondary={startDate?.format('yyyy-MM-DD')+' '+startTime?.format('HH:MM')+' ~ '+endDate?.format('yyyy-MM-DD')+' '+endTime?.format('HH:MM')}
                  />
                </ListItem>
              )
            })}
          </List>
        </div>
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