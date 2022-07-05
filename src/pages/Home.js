import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import FindingGroupmates from "./FindingGroupmates";
import AboutUs from "./AboutUs";
import '../App.css';
import Account from './Account'
import EditAccount from './EditAccount'
import Home3 from './Home3'
import YourPosts from './YourPosts'
import ViewProfile from "./ViewProfile";
import YourProjects from "./YourProjects";
import ViewProfile1 from "./ViewProfile1";
import Reviews from "./Reviews";

function Home() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home3} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/EditAccount" component={EditAccount} />
        <Route exact path="/FindingGroupmates" component={FindingGroupmates} />
        <Route exact path="/YourPosts" component={YourPosts} />
        <Route exact path="/YourProjects" component={YourProjects} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route path="/FindingGroupmates/ViewProfile" component={ViewProfile} />
        <Route path="/YourPosts/ViewProfile" component={ViewProfile1} />
        <Route path="/Reviews" component={Reviews} />
      </Switch>
    </Router>
  );
}
export default Home;
