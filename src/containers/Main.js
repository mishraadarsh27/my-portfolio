import React, {useEffect, useState} from "react";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import CodingProfiles from "./codingProfiles/CodingProfiles";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
         ) : (
          <Router basename="/">
            <ScrollToTop />
            <Header />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <>
                    <Greeting {...props} />
                    <Skills {...props} />
                    <StackProgress {...props} />
                    <Projects {...props} />
                    <Twitter {...props} />
                    <Podcast {...props} />
                  </>
                )}
              />
              <Route
                path="/education"
                render={props => (
                  <>
                    <Education {...props} />
                    <WorkExperience {...props} />
                  </>
                )}
              />
              <Route
                path="/projects"
                render={props => (
                  <>
                    <Projects {...props} />
                    <StartupProject {...props} />
                  </>
                )}
              />
              <Route
                path="/coding-stats"
                render={props => <CodingProfiles {...props} />}
              />
              <Route
                path="/achievements"
                render={props => <Achievement {...props} />}
              />
              <Route path="/blogs" render={props => <Blogs {...props} />} />
              <Route path="/talks" render={props => <Talks {...props} />} />
              <Route path="/contact" render={props => <Profile {...props} />} />
              <Redirect to="/" />
            </Switch>
            <Footer />
            <ScrollToTopButton />
          </Router>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
