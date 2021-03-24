import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ComponentsGallery from './components-gallery/components-gallery';
import AutocompleteImplementation from './components-pages/autocomplete-implementation/autocomplete-implementation';
import ButtonImplementation from './components-pages/button-implementation/button-implementation';
import InputNumberImplementation from './components-pages/input-number-implementation/input-number-implementation';
import InputTextImplementation from './components-pages/input-text-implementation/input-text-implementation';
import SelectInputImplementation from './components-pages/select-input-implementation/select-input-implementation';
import Home from './home/home';
import Footer from './shared/footer';
import Header from './shared/header';

const RouterSetup = () => (
  <div className='container '>
    <Router>
      <Header />
      <Switch>
        <div
          style={{
            paddingBottom: '2rem',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/components-gallery'
            component={ComponentsGallery}
          />
          <Route
            exact
            path='/button-implementation'
            component={ButtonImplementation}
          />
          <Route
            exact
            path='/autocomplete-implementation'
            component={AutocompleteImplementation}
          />
          <Route
            exact
            path='/input-text-implementation'
            component={InputTextImplementation}
          />
          <Route
            exact
            path='/input-number-implementation'
            component={InputNumberImplementation}
          />
          <Route
            exact
            path='/select-input-implementation'
            component={SelectInputImplementation}
          />
        </div>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default RouterSetup;
