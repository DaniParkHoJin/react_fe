import LoginContainer from '../../../containers/member/LoginContainer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SubTitle } from '../../../components/commons/TitleSytle';

const Login = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('로그인')}</title>
            </Helmet>
            <SubTitle align="center">{t('로그인')}</SubTitle>
            <LoginContainer />
        </>
    );
};

export default Login;