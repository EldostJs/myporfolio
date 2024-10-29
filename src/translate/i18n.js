import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ваши переводы
const resources = {
    en: {
        translation: {
            q1: 'Skills',
            h1: 'Front-End Developer',
            h2: 'Eldost Mirzeyev',
            h3: 'Front-end developer with experience in creating interactive and responsive web applications. Proficient in HTML5, CSS3, JavaScript (ES6+), and React. Skilled in Git, responsive design, and API integration. Focused on delivering high-quality UX/UI solutions and staying up to date with the latest web development trends.',
            h4: 'Download CV',
            h5: 'Contact',
            a1: 'Who I am',
            a2: 'My name is Eldost. I`m a Front-End developer from Azerbaijan.',
            a3: 'I am a highly motivated Front-End Developer with in-depth knowledge of JavaScript and React, specializing in the creation of interactive and responsive web applications using modern technologies such as HTML5, CSS3, and contemporary libraries. With experience in developing several personal projects, I have proven my ability to effectively solve challenges, optimize performance, and ensure user interface ease. Familiar with version control systems like Git, I quickly grasp new technologies and strive to enhance my skills within a dynamic team to create high-quality digital products.',
            c1: 'Contacts',
            c2: 'Name',
            c3: 'Email',
            c4: 'Message',
            c5: 'Send ➤',
            c6: 'Message sent successfully!',
            c7: 'Error sending message.',
            c8: 'You can also reach me via:',
            e1: 'Higher Secondary Education',
            e2: 'Secondary School N67 (Russia, Samara)',
            e3: 'Higher Secondary Education',
            e4: 'Secondary School N181 (Azerbaijan, Baku)',
            e5: 'Bachelor of Business and Management',
            e6: 'Baku Business University',
            e7: 'Education',
            ee1: 'Successfully completed a team project using JavaScript.',
            ee2: 'Completed the delivery of a project using React as part of a team effort.',
            ee3: 'Received a certificate of completion of courses, confirming new professional skills.',
            ee4: 'Experience',
            p1: 'Weather Forecast',
            p2: 'The weather app provides accurate data on the current temperature and forecast for the coming days.',
            p3: 'Search Movies',
            p4: 'The movie search website provides easy access to film information, genres, and ratings, helping you discover new movies effortlessly.',
            p5: 'Rock-Paper-Scissors',
            p6: 'The Rock, Paper, Scissors website lets users play the classic game against a robot, providing a fun way to test their skills.',
            p7: 'Projects',
            p8: 'View All',
        },
    },
    ru: {
        translation: {
            q1: 'Навыки',
            h1: 'Front-End Developer',
            h2: 'Eldost Mirzeyev',
            h3: 'Front-End Developer с опытом создания интерактивных и отзывчивых веб-приложений. Обладает навыками в HTML5, CSS3, JavaScript (ES6+) и React. Умеет работать с Git, отзывчивым дизайном и интеграцией API. Ориентирован на предоставление высококачественных UX/UI решений и поддержание актуальности в современных трендах веб-разработки.',
            h4: 'Скачать резюме',
            h5: 'Контакты',
            a1: 'Кто я',
            a2: 'Меня зовут Eldost. Я Front-End Developer из Азербайджана.',
            a3: 'Я высокомотивированный Front-End Developer с глубокими знаниями JavaScript и React, специализирующийся на создании интерактивных и отзывчивых веб-приложений с использованием современных технологий, таких как HTML5, CSS3 и современных библиотек. С опытом разработки нескольких личных проектов, я доказал свою способность эффективно решать задачи, оптимизировать производительность и обеспечивать удобство пользовательского интерфейса. Знаком с системами контроля версий, такими как Git, я быстро осваиваю новые технологии и стремлюсь развивать свои навыки в динамичной команде для создания качественных цифровых продуктов.',
            c1: 'Контакты',
            c2: 'Имя',
            c3: 'Электронная почта',
            c4: 'Сообщение',
            c5: 'Отправить ➤',
            c6: 'Сообщение успешно отправлено!',
            c7: 'Ошибка при отправке сообщения.',
            c8: 'Вы также можете связаться со мной через:',
            e1: 'Среднее общее образование',
            e2: 'Средняя школа №67 (Россия, Самара)',
            e3: 'Среднее общее образование',
            e4: 'Средняя школа №181 (Азербайджан, Баку)',
            e5: 'Бакалавр Бизнеса-Менеджмента',
            e6: 'Бакинский Университет Бизнеса',
            e7: 'Образование',
            ee1: 'Успешно завершил командный проект с использованием JavaScript.',
            ee2: 'Завершил выполнение проекта с использованием React в рамках командной работы.',
            ee3: 'Получил сертификат о завершении курсов, подтверждающий новые профессиональные навыки.',
            ee4: 'Опыт',
            p1: 'Прогноз погоды',
            p2: 'Приложение о погоде предоставляет точные данные о текущей температуре и прогнозе на ближайшие дни.',
            p3: 'Поиск фильмов',
            p4: 'Сайт поиска фильмов предоставляет легкий доступ к информации о фильмах, жанрах и рейтингах, помогая вам без труда находить новые фильмы.',
            p5: 'Камень, ножницы, бумага',
            p6: 'Сайт "Камень, ножницы, бумага" позволяет пользователям играть в классическую игру против робота, предоставляя веселый способ проверить свои навыки.',
            p7: 'Проекты',
            p8: 'Посмотреть все',
        },
    },
    az: {
        translation: {
            q1: 'Bacarıqlar',
            h1: 'Front-End Developer',
            h2: 'Eldost Mirzeyev',
            h3: 'İnteraktiv ve cavabdeh veb tetbiqlerinin yaradılması tecrübesine malik  Front-End Developer. HTML5, CSS3, JavaScript (ES6+) ve React-de peşekar. Git, cavabdeh dizayn ve API inteqrasiyasında bacarıqlıdır. Yüksek keyfiyyetli UX/UI helleri teqdim etmeye fokuslanıb ve müasir veb inkişaf tendensiyalarını izlemeye çalışır.',
            h4: 'CV-i Yükle',
            h5: 'Elaqe',
            a1: 'Men kimem',
            a2: 'Menim adım Eldost. Men Azerbaycandan olan Front-End Developeram.',
            a3: 'Men JavaScript ve React üzre derin biliklere malik, müasir texnologiyalar olan HTML5, CSS3 ve müasir kitabxanalarla interaktiv ve cavabdeh veb tetbiqlerinin yaradılması üzre ixtisaslaşmış yüksek motivasiyalı Front-End Tertibatçısıyam. Bir neçe şexsi layihe hazırlamaqla, men problemleri effektiv şekilde hell etmek, performansı optimallaşdırmaq ve istifadeçi interfeysinin asanlığını temin etmek bacarığımı sübut etdim. Git kimi versiya idareetme sistemleri ile tanış olduğum üçün yeni texnologiyaları tez başa düşürem ve yüksek keyfiyyetli reqemsal mehsullar yaratmaq üçün dinamik komandada bacarıqlarımı inkişaf etdirmeye çalışıram.',
            c1: 'Elaqeler',
            c2: 'Ad',
            c3: 'E-poçt',
            c4: 'Mesaj',
            c5: 'Gönder ➤',
            c6: 'Mesaj uğurla gönderildi!',
            c7: 'Mesaj gönderme zamanı xeta baş verdi.',
            c8: 'Siz hemçinin menimle elaqe saxlaya bilersiniz:',
            e1: 'Tam Orta Tehsil',
            e2: 'Tam Orta mekteb №67 (Rusiya, Samara)',
            e3: 'Tam Orta Tehsil',
            e4: 'Tam Orta mekteb №181 (Azerbaycan, Bakı)',
            e5: 'Biznes ve Menecment üzre bakalavr',
            e6: 'Bakı Biznes Universiteti',
            e7: 'Tehsil',
            ee1: 'JavaScript istifade ederek komandada layiheni uğurla tamamladım.',
            ee2: 'Komanda seyleri çerçivesinde React istifade ederek bir layihenin teqdimatını tamamladım.',
            ee3: 'Yeni peşekar bacarıqları tesdiq eden kursların tamamlandığına dair sertifikat aldım.',
            ee4: 'Tecrübe',
            p1: 'Hava Proqnozu',
            p2: 'Hava tetbiqi cari temperatur ve gelecek günlerin proqnozu haqqında deqiq melumat teqdim edir.',
            p3: 'Filmleri Axtar',
            p4: 'Film axtarış saytı film melumatlarına, janrlara ve reytinqlere asan giriş imkanı verir, size yeni filmleri asanlıqla keşf etmeye kömek edir.',
            p5: 'Kövser-Kağız',
            p6: 'Kövser, Kağız saytı istifadeçilerin robotla klassik oyunu oynamağına imkan tanıyır, bacarıqlarını sınamağın eylenceli bir yolunu teqdim edir.',
            p7: 'Layiheler',
            p8: 'Hamısına Bax',
        },
    },
};

i18n
    .use(initReactI18next) // передает i18n в react-i18next
    .init({
        resources,
        lng: 'en', // язык по умолчанию
        fallbackLng: 'ru', // язык, используемый в случае отсутствия перевода
        interpolation: {
            escapeValue: false, // React уже защищает от XSS
        },
    });

export default i18n;
