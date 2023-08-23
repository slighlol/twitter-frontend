/* eslint-disable import/no-extraneous-dependencies */
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';

// eslint-disable-next-line import/no-unresolved
import style from './index.module.scss';

export default () => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} />
    <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);