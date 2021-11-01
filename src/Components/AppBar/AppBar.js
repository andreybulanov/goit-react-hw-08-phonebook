import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../Redux/Auth/auth-selectors';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Navbar>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navbar>
    );
};
