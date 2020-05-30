import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary';

import Home from './Components/Home/Home';
import Navbar from './Components/Navigation/Navbar';
import Participant from './Components/Participants/Participants';
import Subject from './Components/Subjects/Subjects';
import Invalid from './Components/Invalid/Invalid';

function App() {
  return (
    <Auxiliary>
      <header>
        <Navbar />
      </header>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/subject" exact component={Subject}/>
            <Route path="/participant" exact component={Participant}/>
            <Route path="/:subject_name/participant" component={Participant}/>
            <Route component={Invalid} />
          </Switch>
        </BrowserRouter>

    </Auxiliary>
  );
}

export default App;
