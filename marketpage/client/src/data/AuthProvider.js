import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext(null);
export function useAuthContext() {
  return useContext(AuthContext);
}
export const responseParser = (response) => {
  if (response.status != 200) {
    return response
      .json()
      .then(
        ({ errors, error, err, message }) =>
          errors || error || err || message || `Something went wrong!`
      )
      .catch(() => `Something went wrong!`)
      .then((err) => {
        const error = new Error(err);
        error.response = response;
        throw error;
      });
  }
  return response.json();
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const load = function () {
    setLoading(true);
    return fetch(`api/auth`)
      .then(responseParser)
      .then((data) => {
        if (data.unauthorized) setUser(null);
        else setUser(data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
        // alert(err.message);
        setLoading(false);
      });
  };

  const logout = function () {
    setLoading(true);
    return fetch(`api/auth/logout`)
      .then(responseParser)
      .then((data) => {
        setUser(null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // alert(err.message);
        setLoading(false);
      });
  };

  const login = function (email, password) {
    setLoading(true);
    return fetch(`api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(responseParser)
      .then((data) => {
        setUser(data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
        setLoading(false);
      });
  };
  const updatePassword = function (password, newPassword) {
    setLoading(true);
    return fetch(`api/auth/update-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, newPassword }),
    })
      .then(responseParser)
      .then((data) => {
        setUser(data || null);
        setLoading(false);
        return true
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
        setLoading(false);
        return false
      });
  };

  const signup = function (firstname, lastname, email, password) {
    setLoading(true);
    return fetch(`api/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    })
      .then(responseParser)
      .then((data) => {
        setUser(data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log({ user });
  }, [user]);
  useEffect(() => {
    load();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshAuth: load,
        login,
        signup,
        logout,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
