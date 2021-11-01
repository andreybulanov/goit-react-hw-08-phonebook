import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import authSelectors from '../../Redux/Auth/auth-selectors';
import { logOut } from '../../Redux/Auth/auth-operation';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p>Добро пожаловать, {name}</p>
      <button className="btn-logout" type="button" onClick={() => dispatch(logOut())}>Выйти</button>
    </Navbar>
  );
};

