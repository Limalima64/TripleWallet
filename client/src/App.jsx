import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Accueil from "./pages/Accueil";
import ÀPropos from "./pages/ÀPropos";
import Faq from "./pages/Faq";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import PortefeuilleEntreprise from "./pages/PortefeuilleEntreprise";
import PortefeuilleGroupe from "./pages/PortefeuilleGroupe";
import PortefeuillePersonnel from "./pages/PortefeuillePersonnel";
import Aide from "./pages/Aide";
import PageNotFound from "./pages/PageNotFound";
import "./App.css"

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="App">
      <Router>
        <header>
          <nav className="nav">
            <Link to="/" className="site-title">
              Triple Wallet
            </Link>
            <div className="nav-links">
              <div
                className="dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                {/* Utilisez un span ou div ici pour le titre, stylisé comme un lien */}
                <span className="nav-link">Service</span>
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/portefeuillePersonnel" className="dropdown-item">
                      Portefeuille personnel
                    </Link>
                    <Link to="/portefeuilleGroupe" className="dropdown-item">
                      Portefeuille de groupe
                    </Link>
                    <Link
                      to="/portefeuilleEntreprise"
                      className="dropdown-item"
                    >
                      Portefeuille d'entreprise
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/àpropos" className="nav-link">
                À propos
              </Link>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
              <Link to="/aide" className="nav-link">
                Aide
              </Link>
              <Link to="/connexion" className="nav-link">
                Connexion
              </Link>
              <Link to="/inscription" className="nav-link">
                Inscription
              </Link>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/àpropos" element={<ÀPropos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/aide" element={<Aide />} />
          <Route
            path="/portefeuillePersonnel"
            element={<PortefeuillePersonnel />}
          />
          <Route path="/portefeuilleGroupe" element={<PortefeuilleGroupe />} />
          <Route
            path="/portefeuilleEntreprise"
            element={<PortefeuilleEntreprise />}
          />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
