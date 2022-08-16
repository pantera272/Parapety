import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div>
          <label for='name'>Imię</label><br />
          <input type='text' name='name' />
        </div>
        <div>
          <label for='email'>Adres email</label><br />
          <input type='email' name='email' />
        </div>
        <div>
          <label for='message'>Treść wiadomości</label><br />
          <textarea name='message' rows='4'></textarea>
        </div>
        <div className={styles.button_container}>
          <button className={styles.button}>Wyślij</button>
        </div>
      </div>  
    </div>
  )
}

export default ContactForm;
