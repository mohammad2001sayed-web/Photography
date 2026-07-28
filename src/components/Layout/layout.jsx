import {Outlet} from 'react-router-dom';
import  NavBar  from "../NavBar/NavBar";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
function Layout() {
    return (
        <>
        <ScrollToTop />
            <NavBar />
            <Outlet />

        
        </>
        
    )
}

export default Layout
