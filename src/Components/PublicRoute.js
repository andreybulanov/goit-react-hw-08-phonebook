import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from 'Redux/Auth/auth-selectors';

export default function PublicRoute({
    restricted = false,
    redirectTo = '/',
    children,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return <Route {...routeProps}>
        {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
};
