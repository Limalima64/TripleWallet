import React from "react"
import "./Accueil.css";

const Accueil = () => {
  return (
    <>
      <section id="hautAccueil" className="hautAccueil">
        <img src="https://images.pexels.com/photos/4386178/pexels-photo-4386178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image de haut de acceuil"></img>
        <h1>Triple Wallet</h1>
        <h3>Un portefeuille pour tout les scénarios</h3>
        <div className="cardResumer">
          <ul>
            <li><h3>Problème pour gérer sont argent?</h3></li>
            <li><h3>Problème pour gérer l'argent avec la famille ou amis?</h3></li>
            <li><h3>Problème pour gérer l'argent de sa compagnie?</h3></li>
          </ul>
          <h5>Pas de souci, on vous presente Triple Wallet, la solution pour vos problèmes de gestion d'argent. Avec le portefeuille pour sois meme, lui de famille ou meme lui pour une entreprise, vous avez tout ce qu'il vous faut.</h5>
          <button>Commencer aujourd'hui</button>
        </div>
      </section>

      <section id="services" className="services">
        <div className="premiereCard">
          <img src="https://images.pexels.com/photos/1191520/pexels-photo-1191520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image de wallet seul"></img>
          <h1>Portefeuille unique</h1>
        </div>

        <div className="deuxiemeCard">
          <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image de wallet groupe"></img>
          <h1>Portefeuille de groupe</h1>
        </div>

        <div className="troisiemeCard">
          <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image de wallet entreprise"></img>
          <h1>Portefeuille entreprise</h1>
        </div>
      </section>

      <section id="FAQ" className="FAQ">
        <div>
          <h1>Votre tête vous gratte?</h1>
          <h3>Peut-être que vous êtes dans le même état que d'autres personnes. Voici les questions qui revienne le plus souvent dont les quels nous avons déja repondues.</h3>
          <h2>Répondez à vos questions ici →</h2>
        </div>
        <img src="https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="FAQ image"></img>
      </section>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  )
}

export default Accueil