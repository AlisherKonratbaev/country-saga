import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {themeMode} from "../themeMode";
function Layout() {
    const mode = useSelector(state => state.mode.mode)
    return (
        <div className={mode === themeMode.light ? "bg-light" : "bg-dark"}>
            <Header/>
            <Outlet />
        </div>
    )
}

export default Layout;