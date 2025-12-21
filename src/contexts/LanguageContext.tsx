import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.documents': 'Документы',
    'nav.video': 'Видео',
    'nav.links': 'Ссылки',
    'nav.apply': 'Подать заявку',
    
    // Hero Section
    'hero.title': 'Традиции надёжности',
    'hero.subtitle': 'Ваш партнёр в управлении капиталом и наследством',
    'hero.cta': 'Связаться с нами',
    
    // Features
    'features.reliability': 'Надёжность',
    'features.reliability.desc': 'Более 25 лет безупречной репутации в сфере private banking',
    'features.confidentiality': 'Конфиденциальность',
    'features.confidentiality.desc': 'Абсолютная защита информации о клиентах и их активах',
    'features.tradition': 'Традиции',
    'features.tradition.desc': 'Классический подход к управлению семейным капиталом',
    'features.expertise': 'Экспертиза',
    'features.expertise.desc': 'Команда профессионалов с международным опытом',
    
    // About Page
    'about.title': 'О нашем банке',
    'about.history': 'История и Философия',
    'about.history.text': 'D.A.C. Private Bank был основан с целью предоставления исключительных услуг в области управления частным капиталом. Наша философия строится на принципах доверия, долгосрочного партнёрства и индивидуального подхода к каждому клиенту.',
    'about.mission': 'Наша Миссия',
    'about.mission.text': 'Обеспечить сохранение и приумножение семейного капитала через поколения, предоставляя комплексные решения в области управления активами, планирования наследства и трастовых услуг.',
    'about.values': 'Ценности',
    'about.values.integrity': 'Честность',
    'about.values.integrity.desc': 'Мы действуем с безупречной честностью во всех наших отношениях',
    'about.values.excellence': 'Превосходство',
    'about.values.excellence.desc': 'Мы стремимся к высочайшим стандартам в обслуживании клиентов',
    'about.values.discretion': 'Дискреция',
    'about.values.discretion.desc': 'Конфиденциальность — основа доверительных отношений',
    'about.team': 'Руководство',
    'about.contact': 'Контактная информация',
    'about.address': 'Адрес',
    'about.phone': 'Телефон',
    'about.email': 'Электронная почта',
    
    // Documents Page
    'documents.title': 'Документы',
    'documents.subtitle': 'Официальные документы и отчётность банка',
    'documents.licenses': 'Лицензии',
    'documents.reports': 'Финансовая отчётность',
    'documents.policies': 'Политики и регламенты',
    'documents.download': 'Скачать',
    
    // Video Page
    'video.title': 'Видеоматериалы',
    'video.subtitle': 'Узнайте больше о наших услугах и подходе',
    
    // Links Page
    'links.title': 'Полезные ссылки',
    'links.subtitle': 'Внешние ресурсы и партнёры',
    'links.partners': 'Наши партнёры',
    'links.regulators': 'Регуляторные органы',
    'links.resources': 'Полезные ресурсы',
    'links.visit': 'Перейти',
    
    // Application Form
    'form.title': 'Заявка на консультацию',
    'form.subtitle': 'Заполните форму, и наш специалист свяжется с вами',
    'form.name': 'Имя',
    'form.name.placeholder': 'Ваше имя',
    'form.phone': 'Телефон',
    'form.phone.placeholder': '+7 (___) ___-__-__',
    'form.email': 'Email',
    'form.email.placeholder': 'email@example.com',
    'form.message': 'Сообщение',
    'form.message.placeholder': 'Опишите ваш запрос...',
    'form.submit': 'Отправить заявку',
    'form.success': 'Заявка успешно отправлена!',
    'form.error': 'Ошибка при отправке. Попробуйте позже.',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.tagline': 'Estate and Trust',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.documents': 'Documents',
    'nav.video': 'Video',
    'nav.links': 'Links',
    'nav.apply': 'Apply Now',
    
    // Hero Section
    'hero.title': 'Traditions of Reliability',
    'hero.subtitle': 'Your Partner in Wealth and Estate Management',
    'hero.cta': 'Contact Us',
    
    // Features
    'features.reliability': 'Reliability',
    'features.reliability.desc': 'Over 25 years of impeccable reputation in private banking',
    'features.confidentiality': 'Confidentiality',
    'features.confidentiality.desc': 'Absolute protection of client information and assets',
    'features.tradition': 'Tradition',
    'features.tradition.desc': 'Classic approach to family wealth management',
    'features.expertise': 'Expertise',
    'features.expertise.desc': 'Team of professionals with international experience',
    
    // About Page
    'about.title': 'About Our Bank',
    'about.history': 'History and Philosophy',
    'about.history.text': 'D.A.C. Private Bank was founded to provide exceptional private wealth management services. Our philosophy is built on principles of trust, long-term partnership, and individual approach to each client.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To ensure the preservation and growth of family wealth across generations by providing comprehensive solutions in asset management, estate planning, and trust services.',
    'about.values': 'Values',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'We act with impeccable honesty in all our relationships',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We strive for the highest standards in client service',
    'about.values.discretion': 'Discretion',
    'about.values.discretion.desc': 'Confidentiality is the foundation of trust',
    'about.team': 'Leadership',
    'about.contact': 'Contact Information',
    'about.address': 'Address',
    'about.phone': 'Phone',
    'about.email': 'Email',
    
    // Documents Page
    'documents.title': 'Documents',
    'documents.subtitle': 'Official bank documents and reports',
    'documents.licenses': 'Licenses',
    'documents.reports': 'Financial Reports',
    'documents.policies': 'Policies and Regulations',
    'documents.download': 'Download',
    
    // Video Page
    'video.title': 'Video Materials',
    'video.subtitle': 'Learn more about our services and approach',
    
    // Links Page
    'links.title': 'Useful Links',
    'links.subtitle': 'External resources and partners',
    'links.partners': 'Our Partners',
    'links.regulators': 'Regulatory Bodies',
    'links.resources': 'Useful Resources',
    'links.visit': 'Visit',
    
    // Application Form
    'form.title': 'Consultation Request',
    'form.subtitle': 'Fill out the form and our specialist will contact you',
    'form.name': 'Name',
    'form.name.placeholder': 'Your name',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+1 (___) ___-____',
    'form.email': 'Email',
    'form.email.placeholder': 'email@example.com',
    'form.message': 'Message',
    'form.message.placeholder': 'Describe your inquiry...',
    'form.submit': 'Submit Request',
    'form.success': 'Request submitted successfully!',
    'form.error': 'Error submitting. Please try again later.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.tagline': 'Estate and Trust',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dac-language');
    return (saved as Language) || 'ru';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dac-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
