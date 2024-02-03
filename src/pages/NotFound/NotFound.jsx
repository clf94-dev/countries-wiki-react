import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function NotFound () {
   const { t } = useTranslation();
 return (
    <div style={{display: 'flex', flexDirection: 'column', height: '200px', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Not found page</h1>
      <Link to="/">{t('notFoundPageLink')}</Link>
    </div>
 )
}
export default NotFound;