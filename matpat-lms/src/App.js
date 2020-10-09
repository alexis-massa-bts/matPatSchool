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
import AuthentificationPage from './frontend/Views/Authentification'
import CoursesPage from './frontend/Views/Courses'


function App() {
  return (
    <div className="font-mono antialiased">
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

                <Route path="/login">

                  <AuthentificationPage />

                </Route>

                <Route path="/courses">

                  <CoursesPage />

                </Route>
              </Switch>

              

          </Router>
        </main>
    </div>
  );
}

export default App;
