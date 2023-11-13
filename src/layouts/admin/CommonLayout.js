import Header from '../../outlines/admin/Header';
import Footer from '../../outlines/admin/Footer';
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