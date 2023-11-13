import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';
import { Outlet } from 'react-router-dom';

const Commonlayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <Footer />
            </main>
        </>
    );
};
export default Commonlayout;