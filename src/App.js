import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './App.css';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import TopicDetails from './Pages/TopicDetails';
import Content from './Pages/Content';
import Quiz from './Pages/Quiz';
import QuizResult from './Pages/QuizResult';
import AboutUs from './Pages/AboutUs';
import Profile from './Pages/Profile';
import FAQ from './Pages/FAQ';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import ChooseContent from './Pages/ChooseContent';
import LearningTrack from './Pages/LearningTrack';
import config from './config/app';

function App() {
  console.log("-------------------", window.location.pathname, config.noDisplayHeader);
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="app__root">
            
              <Navbar />
            <Switch>
            {/* {!config.noDisplayHeader.includes(window.location.pathname) ? <Navbar /> : null} */}
              <Route path="/profile" component={Profile} />
              <Route path="/topicDetails" exact component={TopicDetails} />
              <Route path="/" exact component={Home} />
              <Route path="/question" component={Questions} />
              <Route path="/quizResult" component={QuizResult} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/content" component={Content} />
              <Route path="/faq" component={FAQ} />
              <Route path="/login" exact component={Login} />
              <Route path="/chooseContent" component={ChooseContent} />
              <Route path="/LearningTrack" component={LearningTrack} />
            </Switch>
            {/* <Footer /> */}
            {/* <QuizResult /> */}
            {/* <Home/> */}
            {/* <Questions /> */}
            {/* <Quiz /> */}
            {/* <QuizQuestion /> */}
            {/* <Quiz /> */}
            {/* <AboutUs /> */}
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
