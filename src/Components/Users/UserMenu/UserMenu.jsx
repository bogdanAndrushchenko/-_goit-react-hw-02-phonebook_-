import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';

import defaultAvatar from './ava.png';
import s from './UserMenu.module.css';

const { logOut } = authOperations;
const { getUserName } = authSelectors;

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.Container}>
      <img src={avatar} alt="ava" width="50px" className={s.Avatar} />
      <span className={s.Name}>
        Welcome, {name[0].toUpperCase() + name.slice(1)} ! :)
      </span>
      <div>
        <NavLink to="/" className={s.Button}>
          Home
        </NavLink>
        <button
          type="button"
          className={s.Button}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
