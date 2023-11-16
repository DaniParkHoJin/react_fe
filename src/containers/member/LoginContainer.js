import LoginForm from '../../components/member/LoginForm';
import { UserConsumer } from '../../modules/user';

const LoginContainer = ({ setIsLogin, setUserInfo }) => {
    const handleClick = () => {
        setIsLogin(true);
        setUserInfo({ userNm: '이이름' });
    };
    return (
        <>
            <LoginForm />
            <button type="button" onClick={handleClick}>
                로그인 상태
            </button>
        </>

    );
};

export default LoginContainer;