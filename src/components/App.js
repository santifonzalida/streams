import React from 'react';
import {Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';
const App = () =>{
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/stream/new" exact component={StreamCreate}/>
          <Route path="/stream/edit/:id" exact component={StreamEdit}/>
          <Route path="/stream/delete" exact component={StreamDelete}/>
          <Route path="/stream/show" exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
