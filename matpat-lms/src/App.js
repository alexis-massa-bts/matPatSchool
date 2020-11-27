import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from 'react-router-dom';

import Header from './frontend/Components/Header'
import Footer from './frontend/Components/Footer'
import HomePage from './frontend/Views/Home'
import AboutPage from './frontend/Views/About'
import AuthentificationPage from './frontend/Views/Authentification'
import AuthProf from './frontend/Views/AuthProf'
import AuthStud from './frontend/Views/AuthStud'
import lessonPage from './frontend/Views/Lessons_list'
import LessonCalendar from './frontend/Views/Lessons_calendar'


const Auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) //fake async
  },
  signout(cb) {
    this.isAuthenticated =false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      Auth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
  )} />
)


function App() {
  return (
    <div className="font-mono antialiased">
        <main style={{fontFamily: 'Inter'}}>
          <Router>

            <Header />

              <Switch>

                <Route exact path="/" component={AuthentificationPage} />

                <Route path="/login" component={AuthentificationPage} />

                <Route path="/AuthProf" component={AuthProf} />

                <Route path="/AuthStud" component={AuthStud} />

                <PrivateRoute path="/about" component={AboutPage} />

                <PrivateRoute path="/courses" component={lessonPage} />

                <PrivateRoute path="/home" component={HomePage} />
                
                <PrivateRoute path="/coursescalendar" component={LessonCalendar} />

              </Switch>

              <Footer />

          </Router>
        </main>
    </div>
  );
}

export default App;
