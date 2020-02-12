import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = props =>  {
  const [lang, setLang] = useState('spanish')
  const changeLanguage = e => setLang(e.target.value)
  return ( 
    <LanguageContext.Provider value={{lang, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
    );
}
