import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/resume">
                <Resume/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
        </Switch>
    )
}

export default Main;