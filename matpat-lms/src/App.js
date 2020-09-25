import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './frontend/Components/Header'
import Footer from './frontend/Components/Footer'
import HomePage from './frontend/Views/Home'
import AboutPage from './frontend/Views/About'


function App() {
  return (
    <div>
        <main>
          <Router>

            <Header />

              <Switch>
                <Route exact path="/">

                     <HomePage />

                </Route>

                <Route path="/about">

                    <AboutPage />

                </Route>
              </Switch>

              <Footer />

          </Router>
        </main>
    </div>
  );
}

export default App;
