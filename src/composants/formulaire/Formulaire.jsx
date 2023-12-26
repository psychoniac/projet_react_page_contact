import { FaRocketchat } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './formulaire.module.css';
import image from '../../assets/images/home.svg';

function Formulaire() {
    return (
        <section className={styles.formulaire_container}>
            <div className={styles.formulaire_form}>
                <div className={styles.formulaire_btns}>
                    <button className={styles.formulaire_btn}>
                        <FaRocketchat /> Via chat
                    </button>
                    <button className={styles.formulaire_btn}>
                        <FaPhoneAlt />
                        Via téléphone
                    </button>
                </div>
                <h2>Contacter nous par mail</h2>
                <form className={styles.formulaire}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='nom'>Nom</label>
                        <input
                            type='text'
                            name='nom'
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='prenom'>Prénom</label>
                        <input
                            type='text'
                            name='prenom'
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='Email'>Email</label>
                        <input
                            type='text'
                            name='email'
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message'></textarea>
                    </div>
                    <button className={styles.formulaire_btn}>Envoyer</button>
                </form>
            </div>
            <img
                src={image}
                alt='image illustration formulaire'
            />
        </section>
    );
}

export default Formulaire;
