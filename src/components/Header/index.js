/* eslint-disable import/no-extraneous-dependencies */
import { CloseOutline } from 'antd-mobile-icons';
import { useAppContext } from '@utils/context';
import logo from '../../assets/twitter-logo.svg';

// eslint-disable-next-line import/no-unresolved
import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  return (
    <div className={style.header}>
      {store.closeHeaderHandler && (
      <CloseOutline
        className={style.closeIcon}
        onClick={store.closeHeaderHandler}
      />
      ) }
      <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
    </div>
  );
};

export default Header;