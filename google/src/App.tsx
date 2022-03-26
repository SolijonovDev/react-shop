import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import {Header} from './components/Header';
import { routers } from './constants/routers';
import { useTypedSelector, useAppDispatch } from './hooks/typed';


export const App: FC = () => {
  const {email,name}=useTypedSelector(state=>state.user)
  const dispatch=useAppDispatch()

  return (
    <div className="App">
      <Header/>
      <Switch>
        {
          routers.map(({ id, path, com, exact }) => (
            <Route key={id} path={path} component={com} exact={exact}/>
          )
          )
        }
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}
