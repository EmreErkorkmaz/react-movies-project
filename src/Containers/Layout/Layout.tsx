import React from "react";
import styles from './Layout.module.scss';
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Movies from "../Contents/Contents";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className={styles['layout-page']}>
        <Switch>
          <Route path="/:type" render={(props) => <Movies {...props} />} />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
