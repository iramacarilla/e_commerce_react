import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ path, exact, component, restricted }) => {
  const isAuth = useSelector((state) => state.userSignIn.userInfo);
  return isAuth && restricted ? (
    <Redirect to="/phonebook" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoutes;
