import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">{t('hello')}</div>
  );
};

export default App;
