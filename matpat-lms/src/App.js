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
import EditLessonsList from './frontend/Views/Edit_lessons_list'
import EditLesson from './frontend/Views/Edit_lesson'
import CreateLesson from './frontend/Views/create_lesson'


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

                <PrivateRoute path="/edit_lessons_list" component={EditLessonsList} />

                <PrivateRoute path="/edit_lessons" component={EditLesson} />

                <PrivateRoute path="/create_lesson" component={CreateLesson} />

              </Switch>

          </Router>
        </main>
    </div>
  );
}

export default App;
