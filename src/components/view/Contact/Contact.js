import React from 'react';
import Header from '../../common/Header';
import Baner from '../Baner/Baner';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileAndroid, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../features/ContactForm';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Baner />     
      <div className={styles.contact_header}>
        <Header title='Skontaktuj się' subtitle='Zapraszamy' />
      </div>
      <div className={styles.contact_container}>
        <div>
          <h1>Kontakt</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
              <p>12-123 Nieznany <br />ul. Jakaśtam 1</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faMobileAndroid} className={styles.icon}/>
              <p>123 123 123</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
              <p>(+48) 321 321 321</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
              <p>parapety@parapety.pl</p>
            </li>
          </ul>  
        </div>
        <div>
          <h1>Godziny otwarcia</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faClock} className={styles.icon}/>
              <p>
                Pon - pt <br />
                8:00 - 16:00 <br /><br />
                Sobota <br />
                8:00 - 12:00
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contact_container}>
        <h1>Formularz kontaktowy</h1>  
      </div>
      <ContactForm />
      <div className={styles.contact_container}>
        <h1>Mapa dojazdu</h1>

      </div>
    </div>
  )
  
}

export default Contact;