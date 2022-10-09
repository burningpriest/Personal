import React, { useState } from 'react';
import { Card } from './Card';
import './todo.css'

export function Todo() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = React.useState([]);
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const clickHandler = () => {
    let temp = tasks;
    let obj = { name: value, state: 'task' };
    temp.push(obj);
    setTasks(temp);
    setValue('');
  };
  const completeHandler = (e) => {
    let temp = tasks;
    temp = temp.map((obj) => {
      if (obj.name == e.target.name) {
        obj.state = 'complete';
        return obj;
      }
      return obj;
    });
    setTasks(temp);
  };
  const deleteHandler = (e) => {
    let temp = tasks;
    console.log(e.target.name);
    temp = temp.filter((obj) => {
      return obj.name !== e.target.name;
    });
    setTasks(temp);
  };
  return (
    <div className='outer'>
      <div>
      <input type='text' value={value} onChange={valueHandler} />
      <button onClick={clickHandler}>Submit</button>
      </div>
      <div className='parent'>
        <div className='child'>
          Tasks:{tasks
            .filter((obj) => obj.state === 'task').length}
          {tasks
            .filter((obj) => obj.state === 'task')
            .map((task) => {
              return (
                <Card
                  name={task.name}
                  key={task}
                  type='task'
                  completeHandler={completeHandler}
                  deleteHandler={deleteHandler}
                />
              );
            })}
        </div>
        <div className='child'>
          {console.log(tasks, 'render')}
          Completed:{tasks
            .filter((obj) => obj.state === 'complete').length}
          {tasks
            .filter((obj) => obj.state == 'complete')
            .map((task) => {
              return (
                <Card
                  name={task.name}
                  key={task.name}
                  type='complete'
                  completeHandler={completeHandler}
                  deleteHandler={deleteHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
