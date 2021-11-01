import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import s from '../Components/AppBar/AppBar.module.css';

export default function AuthNav() {
    return (
        <Navbar>
            <Nav>
                <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
                    Регистрация
                </NavLink>
                <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
                    Войти
                </NavLink>
            </Nav>
        </Navbar>
    );
};
