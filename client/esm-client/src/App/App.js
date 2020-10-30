import React, { useEffect } from "react";
import "./App.css";
import Login from "../logIn/Login";
import Signup from "../signUp/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import Dashboard from "../dashboard/Dashboard";
import AttemptTest from "../attemptTest/AttemptTest";
import Navbar from "../navbar";
import Result from "../result/ResultWrapper";
import TestInstruction from "../TestInstructions/TestInstruction";
import IndividualResult from "../result/ShowResult";
import TestPreviewWrapper from "../testPreview/TestPreviewWrapper";
import { connect } from "react-redux";
import HandleLiveTest from "../testPreview/HandleLiveTest";
function App(props) {
  // useEffect(() => {
  //  window.addEventListener('contextmenu',(e)=>{
  //   e.preventDefault();
  //  });
  //  window.addEventListener('keydown', (e)=>{
  //    console.log(e);
  //    if(e.key=="F12"){
  //     e.preventDefault();
  //    }
  //  })
  // }, []);

  const { selectedTestName } = props;

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path={"/signin"} component={Login} />
          <Route exact={true} path="/signup" component={Signup} />
          <ProtectedRoute exact={true} path="/" component={Dashboard} />
          <ProtectedRoute
            exact={true}
            path="/attempt-test"
            component={AttemptTest}
          />
          <ProtectedRoute exact={true} path="/result" component={Result} />
          <ProtectedRoute
            exact={true}
            path={`/result/${selectedTestName}`}
            component={IndividualResult}
          />
          <ProtectedRoute
            exact={true}
            path="/test-instructions"
            component={TestInstruction}
          />
          <ProtectedRoute
            exact={true}
            path="/start-test"
            component={TestPreviewWrapper}
          />
          {/* <ProtectedRoute component={Dashboard} /> */}
          <Route exact={true} path="/give-test" component={HandleLiveTest}/>
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTestName: state.selectedTest.selectedTestResultData.testName
      ?.replace(/\s+/g, "-")
      .toLowerCase(),
  };
};

export default connect(mapStateToProps, null)(App);
