import React, { useMemo } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Progress } from "reactstrap";
import { useAuthContext } from "../data/AuthProvider";

const CheckAuth = ({children, unAuthenticatedOnly, to}) => {
  const { user, loading } = useAuthContext();
  const { pathname, search } = useLocation();
  const redirect = useMemo(() => {
      if(to) return to
      if (!unAuthenticatedOnly) return `/login?redirect=${encodeURIComponent(pathname)}`
      const s = search.slice(1).split('&').map(s => s.split('='));
      const [, redirect] = s.find(([key]) => key == "redirect") || [];
      return redirect ? decodeURIComponent(redirect) : '/'
  }, [search, to, unAuthenticatedOnly, pathname])
  return user === undefined || loading ? (
    <div>{JSON.stringify(user)}Loading..</div>
  ) : (unAuthenticatedOnly ? !!user : !user) ? (
    <Redirect to={redirect} />
  ) : (
    children
  );
};

export default CheckAuth;
