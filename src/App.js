import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Contact from './views/Contact';
import Projects from './views/Projects';
import SingleProject from './views/SingleProject';



import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <Header />
        <main className="mb-5">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={SingleProject} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      <Footer />
    </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
