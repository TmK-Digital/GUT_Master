import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import HomeOne from "./pages/HomeOne";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Merchants from "./pages/Merchants";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import LoginRegister from "./pages/LoginRegister";
import NotFound from "./pages/NotFound";
import Strategy from "./pages/Strategy";
import NFTAssets from "./pages/NFTAssets";
import AssetPortfolio from "./pages/AssetPortfolio";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeOne}
          />
     
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/strategy"}`}
            component={Strategy}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
            component={BlogRightSidebar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/merchants"}`}
            component={Merchants}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/wallet"}`}
            component={Wallet}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login-register"}`}
            component={LoginRegister}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/not-found"}`}
            component={NotFound}
          />
            <Route
            path={`${process.env.PUBLIC_URL + "/nft-asset"}`}
            component={NFTAssets}
          />
             <Route
            path={`${process.env.PUBLIC_URL + "/asset-portfolio"}`}
            component={AssetPortfolio}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
