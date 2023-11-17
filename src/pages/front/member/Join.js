import JoinContainer from "../../../containers/JoinContatiner";
import { Helmet } from "react-helmet-async";
import { MainTitle } from "../../../components/commons/TitleSytle";
import { OuterBox } from "../../../components/commons/OutlineStyle";
import { useTranslation } from "react-i18next";

const Join = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('회원가입')}</title>
            </Helmet>
            <OuterBox>
                <MainTitle>{t('회원가입')}</ MainTitle>
                <JoinContainer />
            </OuterBox>

        </>
    );

};

export default Join;