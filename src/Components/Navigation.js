import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import authSelectors from '../Redux/Auth/auth-selectors';
import s from '../Components/AppBar/AppBar.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Navbar>
            <Nav>
                <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>
                    Главная страница
                </NavLink>
                {isLoggedIn && (
                    <NavLink to='/contacts' className={s.link} activeClassName={s.activeLink}>
                        Контакты
                    </NavLink>
                )}
            </Nav>
        </Navbar>
    );
};

export default Navigation;