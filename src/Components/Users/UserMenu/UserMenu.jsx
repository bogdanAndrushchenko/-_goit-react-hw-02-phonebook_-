import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './ava.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.Container}>
      <img src={avatar} alt="ava" width="50px" className={s.Avatar} />
      <span className={s.Name}>Welcome, </span>
      <button type="button" className={s.Button}>
        Log Out
      </button>
    </div>
  );
};
export default UserMenu;
// onClick={() => dispatch(authOperations.logOut())}
//{name}
