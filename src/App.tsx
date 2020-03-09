import React, { useState } from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ScrollTop from "./lib/ScrollTop";
import About from "./components/About";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";
import Business from "./components/Business";

const App = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <>
      <Router>
        <div className="w-full">
          <div className="flex justify-between fixed items-center top-0 h-20 nav-bar w-full shadow-md main-bg lg:px-10 z-30">
            <div className="ml-1 lg:ml-10">
              <Link
                type="button"
                to="/"
                className="focus:outline-none w-auto mx-2 h-20 text-white text-3xl p-3 text-center border-transparent "
              >
                WorldBestPartners
              </Link>
            </div>
            <div className="ml-10 hidden sm:hidden md:hidden lg:block">
              <Link
                type="button"
                to="/about"
                className="focus:outline-none w-auto mx-2 pt-6 h-20 text-white text-xl p-3 text-center border-b-4 border-transparent hover:border-white duration-150 transition-all "
              >
                회사소개
              </Link>
              <Link
                type="button"
                to="/business"
                className="focus:outline-none w-auto mx-2 pt-6 h-20 text-white text-xl p-3 text-center border-b-4 border-transparent hover:border-white duration-150 transition-all "
              >
                사업소개
              </Link>
              <Link
                type="button"
                to="/contact"
                className="focus:outline-none w-auto mx-2 pt-6 h-20 text-white text-xl p-3 text-center border-b-4 border-transparent hover:border-white duration-150 transition-all "
              >
                위치 및 문의
              </Link>
            </div>

            <div className="mr-5 lg:hidden relative">
              <button
                onClick={() => setVisibleNav(!visibleNav)}
                className="text-white button-scale focus:outline-none"
              >
                <FontAwesomeIcon icon="bars" className="" size="2x" />
              </button>
              <CSSTransition in={visibleNav} timeout={1} classNames="Nav">
                <div
                  className="absolute bg-white py-3 px-3 rounded shadow-lg opacity-0 flex flex-col w-48 z-40"
                  style={{ right: "0rem", top: "2.7rem" }}
                >
                  <Link
                    onClick={() => setVisibleNav(false)}
                    className="text-2xl lg:text-2xl text-indigo-900 focus:outline-none block"
                    type="button"
                    to="/about"
                  >
                    회사소개
                  </Link>
                  <Link
                    onClick={() => setVisibleNav(false)}
                    className="text-2xl lg:text-2xl text-indigo-900 focus:outline-none block"
                    type="button"
                    to="/business"
                  >
                    사업소개
                  </Link>
                  <Link
                    onClick={() => setVisibleNav(false)}
                    className="text-2xl lg:text-2xl text-indigo-900 focus:outline-none block"
                    type="button"
                    to="/contact"
                  >
                    위치 및 문의
                  </Link>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={100}
                    classNames="fade"
                  >
                    <ScrollTop>
                      <Switch>
                        <Route exact path="/">
                          <Main></Main>
                        </Route>
                        <Route path="/about">
                          <About></About>
                        </Route>
                        <Route path="/business">
                          <Business></Business>
                        </Route>
                        <Route path="/contact">
                          <Contact></Contact>
                        </Route>
                      </Switch>
                    </ScrollTop>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          ></Route>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
};

export default App;
