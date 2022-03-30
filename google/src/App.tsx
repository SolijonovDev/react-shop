import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import {Header} from './components/Header';
import { routers } from './constants/routers';


export const App: FC = () => {

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
        {/* <Redirect to="/category"/> */}
      </Switch>
      <Footer/>
    </div>
  );
}
