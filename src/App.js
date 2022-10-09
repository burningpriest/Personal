// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Projects from './Projects';
import { RefComponent } from './RefComponent';
import { HOC } from './HOC';
import { Card } from './Card';
import { Todo } from './Todo';
import { Timer } from './timer';
import { TodoExt } from './todoExt';
const ClockTimer = React.lazy(()=>import('./clockTimer'))

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <nav className='column'>
      <NavLink to='projects' className={({isActive})=>isActive && 'active'}>Projects</NavLink>
      <NavLink to='clock' className={({isActive})=>isActive && 'active'}>clock timer</NavLink>
      <NavLink to='ref' className={({isActive})=>isActive && 'active'}>Ref Example</NavLink>
      <NavLink to='hoc' className={({isActive})=>isActive && 'active'}>HOC</NavLink>
      <NavLink to='todo' className={({isActive})=>isActive && 'active'}>TODO</NavLink>
      <NavLink to='timer' className={({isActive})=>isActive && 'active'}>Timer</NavLink>
      <NavLink to='todoExt' className={({isActive})=>isActive && 'active'}>Todo Ext</NavLink>
    </nav>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/projects" exact element={<Projects/>}/>
      <Route path="/clock" exact element={<ClockTimer/>}/>
      <Route path="/ref" exact element={<RefComponent/>}/>
      <Route path="/hoc" exact element={<HOC/>}/>
      <Route path="/todo" exact element={<Todo/>}/>
      <Route path="/timer" exact element={<Timer/>}/>
      <Route path="/todoExt" exact element={<TodoExt/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
