import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import store from '../store';
import Homepage from '../Homepage/Homepage';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import PhotoItem from '../PhotoItem/PhotoItem';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Switch>
          <Route path="/album">
            <PhotoAlbum />
          </Route>
          <Route path="/photo">
            <PhotoItem />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
