import React from 'react';
import { Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/search" component={Search} />
    </>
  );
}

export default Routes;