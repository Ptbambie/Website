import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import TarifWeb from "../components/TarifWeb";
import SiteWeb from "../assets/SiteWeb.svg";
import "./tarif.css";
import CalendlyIntegration from "../components/CalendlyIntegration";

const Tarif = () => {
  return (
    <div>
    <div className="content-tarifWeb">
      <div className="tarif-header">
      <h1>Création de sites Internet</h1>
      <p>Dans un monde de plus en plus connecté, un site web est
         devenu un pilier fondamental de toute entreprise moderne.
        Que vous soyez une start-up en pleine expansion, une 
        petite entreprise locale ou une grande société 
        internationale, avoir une présence en ligne est 
        incontournable. <br/><br/>Un site web bien conçu est bien plus 
        qu'une simple vitrine virtuelle ; c'est une passerelle 
        vers de nouvelles opportunités, un moyen de se connecter 
        avec votre public cible, et une plateforme pour propulser
         votre entreprise vers de nouveaux sommets.</p>
      </div>
      <div className="tarif-img">
         <img src={SiteWeb} alt="site web" />
      </div>
      </div>
      <div className="tarif-btn">
        <Link to="/contact">Contact <FiArrowRight className="login-arrow-right"></FiArrowRight></Link>
      </div>
      <div className="tarifWeb">
        <h1>Tarifs Web</h1>
       <TarifWeb />
      </div>
      <div className="Rdv">
        <h1>Prendre rendez-vous</h1>
        <CalendlyIntegration />
        </div>
   </div>
  );
};

export default Tarif;
