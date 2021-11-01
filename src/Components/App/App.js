import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import AppBar from '../AppBar/AppBar';
import { fetchCurrentUser } from '../../Redux/Auth/auth-operation';
import authSelectors from '../../Redux/Auth/auth-selectors';
import s from '../AppBar/AppBar.module.css';

const AsyncHomeView = lazy(() => import('../../Views/HomeView.js'));
const AsyncLoginView = lazy(() => import('../../Views/LoginView.js'));
const AsyncRegisterView = lazy(() => import('../../Views/RegisterView.js'));
const AsyncContactsView = lazy(() => import('../../Views/ContactsView.js'));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
            display="flex"
            justify-content="center"
            className={s.loader}
          />} >
        <Switch>
          <PublicRoute exact path="/">
            <AsyncHomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <AsyncRegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <AsyncLoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <AsyncContactsView />
          </PrivateRoute>
        </Switch>
        </Suspense>
    </div>
  ): null;
};


