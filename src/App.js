import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// Import AnimatePresence
import { AnimatePresence } from "framer-motion";

// Import style
import "./styles/App.scss";

// Import Components
import HeaderNav from "./components/headerNav";
import Footer from "./components/footer";

// Import Pages
import Home from "./pages/home";
import Competence from "./pages/competence";
import Projet from "./pages/projet";

// Create Routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/compétences", name: "Competence", Component: Competence },
  { path: "/projets", name: "Projet", Component: Projet },
];

function App() {
  const location = useLocation();
  return (
    <>
      {/* Rendering components */}
      <HeaderNav />

      <div className="App">
        {/* Rendering pages */}
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

export default App;
