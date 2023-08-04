import React from 'react'
import { Link } from 'react-router-dom'
import './tarifWeb.css'

const TarifWeb = () => {
  return (
    <div className='tarif-content'>
    <div className='tarif-packMini'>
      <h2>Pack Mini</h2>
      <p><span>55</span><span>€</span>/mois HT</p>
      <ul>
        <li className='border-tarif'>1 page</li>
        <li className='border-tarif'>Nom de domaine & 1 email</li>
        <li className='border-tarif'>Formulaire de contact</li>
        <li className='border-tarif'>Site responsive</li>
        <li className='border-tarif'>Référencement naturel</li>
        <li className='border-tarif'>Statistiques de visites</li>
        <div className='Btn-tarifWeb'>
        <li className='Btn-contact'><Link to='/contact'>Contact</Link></li>
        </div>
        <li className='engagement'>* Engagement sur 12 mois</li>
      </ul>
    </div>
    <div className='tarif-packMedium'>
    <h2>Pack Medium</h2>
      <p><span>1350</span><span>€</span>/sur mesure HT</p>
      <ul>
        <li className='border-tarif'>3 pages</li>
        <li className='border-tarif'>Nom de domaine & 3 email</li>
        <li className='border-tarif'>Formulaire de contact</li>
        <li className='border-tarif'>Site responsive</li>
        <li className='border-tarif'>Référencement naturel</li>
        <li className='border-tarif'>Réalisations/actu</li>
        <li className='border-tarif'>Ecriture des textes</li>
        <li className='border-tarif'>Statistiques de visites</li>
        <div className='Btn-tarifWeb'>
        <li className='Btn-contact'><Link to='/contact'>Contact</Link></li>
        </div>
        <li className='engagement'>* Sans engagement/autres options disponibles</li>
      </ul>
    </div>
    <div className='tarif-packfull'>
    <h2>Pack Full</h2>
      <p><span>2700</span><span>€</span>/coût unique HT</p>
      <ul>
        <li className='border-tarif'>6 pages</li>
        <li className='border-tarif'>Nom de domaine & 3 email</li>
        <li className='border-tarif'>Formulaire de contact</li>
        <li className='border-tarif'>Site responsive</li>
        <li className='border-tarif'>Référencement naturel</li>
        <li className='border-tarif'>Réalisations/actu</li>
        <li className='border-tarif'>Ecriture des textes</li>
        <li className='border-tarif'>Statistiques de visites</li>
        <div className='Btn-tarifWeb'>
        <li className='Btn-contact'><Link to='/contact'>Contact</Link></li>
        </div>
        <li className='engagement'>* Sans engagement/autres options disponibles</li>
      </ul>
    </div>
  </div>
  )
}

export default TarifWeb