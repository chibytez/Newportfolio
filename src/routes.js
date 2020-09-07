import React from 'react';
import { Switch, Route} from 'react-router-dom' 
import Home from "./Home/home";
import Layout from "./hoc/layout";
import About from "./About/about";
import Contact from "./Contact/contact";
import Works from "./Works/works"

const Routes = () => {
 
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/works" exact component={Works}/>
        </Switch>
      </Layout>
    );
  }


export default Routes;