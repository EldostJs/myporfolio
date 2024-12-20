import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import styles from './Contact.module.css';
import { Mail, Phone, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import im from './images/contactsYellow.svg';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true); 

        emailjs.send(
            'service_gr8ksem', 
            'template_wh5j59i', 
            formData,
            'POEPMEYT4RKS8Wnfq'
        )
            .then((result) => {
                console.log('Email успешно отправлен!', result.text);
                toast.success(t('c6')); 
                setIsSending(false); 
            }, (error) => {
                console.error('Ошибка при отправке email:', error.text);
                toast.error(t('c7')); 
                setIsSending(false);
            });

        // Сброс формы
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const mailClick = () => {
        const email = 'mirzeyev0308@gmail.com';
        const subject = 'Frontend Developer Job Opportunity';
        const body = 'Hello, Eldost! We are interested in your profile as a Frontend Developer (JS, React) and would like to discuss a job opportunity at our company. Please provide details about your experience and job preferences. Thank you for your response!';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const whatsappClick = () => {
        const phoneNumber = '+994503272087';
        const message = 'Hello, Eldost! We are interested in your profile as a Frontend Developer (JS, React) and would like to discuss a job opportunity at our company. Please provide details about your experience and job preferences. Thank you for your response!';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappLink;
    };

    const socialLinks = [
        { platform: 'GitHub', icon: <Github />, url: 'https://github.com/EldostJs' },
        { platform: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/eldostmirzeyev/' },
        { platform: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/_mirzeev_/?igsh=MThrcDJzdXp2Y2h4ZQ%3D%3D' },
        { platform: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/eldost.mirzoev?locale=ru_RU' },
    ];

    return (
        <div id="contact" className={styles.container}>
            <h1 className={styles.title}>{t('c1')}</h1>

            <div className={styles.contentWrapper}>
                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit} className={styles.formSection}>
                        <div className={styles.inputGroup}>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                className={styles.input}
                            />
                            <label className={styles.userLabel}>{t('c2')}</label>
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                className={styles.input}
                            />
                            <label className={styles.userLabel}>{t('c3')}</label>
                        </div>

                        <div className={styles.inputGroup}>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                autoComplete="off"
                                className={`${styles.input} ${styles.textarea}`}
                            />
                            <label className={styles.userLabel}>{t('c4')}</label>
                        </div>

                        <button type="submit" className={styles.sendButton}>
                            <span className={styles.isSending}>{t('c5')}</span>
                        </button>
                    </form>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.contactInfo}>
                        <p className={styles.contactText}>{t('c8')}</p>
                        <div className={styles.infoItem}>
                            <button onClick={mailClick} className={styles.socialButton} aria-label="Email">
                                <Mail />
                            </button>
                            <span>mirzeyev0308@gmail.com</span>
                        </div>

                        <div className={styles.infoItem}>
                            <button onClick={whatsappClick} className={styles.socialButton} aria-label="Phone">
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
                    <img src={im} alt="" className={styles.contactImage} />
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Contact;
