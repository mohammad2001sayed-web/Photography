import {Outlet} from 'react-router-dom';
import  NavBar  from "../NavBar/NavBar";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';
function Layout() {
    return (
        <>
        <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />

        
        </>
        
    )
}

export default Layout
