import React from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook } from 'lucide-react'; // Импортируем иконки из lucide-react
import im from './images/contactsYellow.svg';


const mailClick = () => {

    const email = 'mirzeyev0308@gmail.com'
    const subject = 'Frontend Developer Job Opportunity'
    const body = 'Hello, Eldost! We are interested in your profile as a Frontend Developer (JS, React) and would like to discuss a job opportunity at our company. Please provide details about your experience and job preferences. Thank you for your response!'
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink

}

const whatsappClick = () => {

    const phoneNumber = '+994503272087';
    const message = 'Hello, Eldost! We are interested in your profile as a Frontend Developer (JS, React) and would like to discuss a job opportunity at our company. Please provide details about your experience and job preferences. Thank you for your response!'
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.location.href = whatsappLink
}

const Contact = () => {
    const socialLinks = [
        { platform: 'GitHub', icon: <Github />, url: 'https://github.com/EldostJs' },
        { platform: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/eldostmirzeyev/' },
        { platform: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/_mirzeev_/?igsh=MThrcDJzdXp2Y2h4ZQ%3D%3D' },
        { platform: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/eldost.mirzoev?locale=ru_RU' },


    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contacts</h1>

            <div className={styles.contentWrapper}>
                <div className={styles.formWrapper}>
                    <div className={styles.formSection}>
                        <div className={styles.inputGroup}>
                            <input
                                required
                                type="text"
                                name="text"
                                autoComplete="off"
                                className={styles.input}
                            />
                            <label className={styles.userLabel}>Name</label>
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                required
                                type="email"
                                name="email"
                                autoComplete="off"
                                className={styles.input}
                            />
                            <label className={styles.userLabel}>Email</label>
                        </div>

                        <div className={styles.inputGroup}>
                            <textarea
                                required
                                name="message"
                                autoComplete="off"
                                className={`${styles.input} ${styles.textarea}`}
                            />
                            <label className={styles.userLabel}>Message</label>
                        </div>

                        <button className={styles.sendButton}>
                            Send
                            <span className={styles.sendIcon}>➤</span>
                        </button>
                    </div>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <button
                                onClick={mailClick}
                                className={styles.socialButton} aria-label="Email">
                                <Mail />
                            </button>
                            <span>janedoe.test@gmail.com</span>
                        </div>

                        <div className={styles.infoItem}>
                            <button
                                onClick={whatsappClick}
                                className={styles.socialButton} aria-label="Phone">
                                <Phone />
                            </button>
                            <span>+994-50-327-20-87</span>
                        </div>
                    </div>

                    <div className={styles.socialLinks}>
                        {socialLinks.map((link) => (
                            <button
                                onClick={() => window.open(link.url)}
                                key={link.platform}
                                className={styles.socialButton}
                                aria-label={link.platform}
                            >
                                {link.icon}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <img src={im} alt="Contact" className={styles.contactImage} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
