/* eslint-disable import/no-extraneous-dependencies */
import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import logo from '../../assets/twitter-logo.svg';

// eslint-disable-next-line import/no-unresolved
import style from './index.module.scss';

const Header = ({
  onClickClose,
}) => (
  <div className={style.header} onClick={onClickClose}>
    {onClickClose && <CloseOutline className={style.closeIcon} /> }
    <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func,
};

Header.defaultProps = {
  onClickClose: null,
};

export default Header;