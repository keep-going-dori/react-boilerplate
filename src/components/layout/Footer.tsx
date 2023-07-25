import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const toggleLocales = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <div>
      <button onClick={() => toggleLocales('en-US')}>en</button>
      <button onClick={() => toggleLocales('ko-KR')}>ko</button>
      {t('ui:test')}

      <hr />
      <p>{t('assessment:assessment')}</p>
    </div>
  );
};
