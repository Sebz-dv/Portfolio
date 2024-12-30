import React from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'es';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Language) => { 
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage('en')}
        className="px-4 py-2 font-medium text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className="px-4 py-2 font-medium text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
