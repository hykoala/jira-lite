import React from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "pages/unauthenticated";

function App() {
  const { user } = useAuth();

  return <div className="App">{user ? "" : <UnauthenticatedApp />}</div>;
}

export default App;
