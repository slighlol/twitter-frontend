import { Popup } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import { useAppContext } from '@utils/context';
import { useGoto } from '@utils/hooks';
import style from './index.module.scss';

/**
* Profile drawer (Popup)
*/

const MyPopup = ({
  visible,
  onClose,
}) => {
  const [store] = useAppContext();
  const go = useGoto();
  return (
    <Popup
      visible={visible}
      onMaskClick={onClose}
      position="left"
      bodyStyle={{ width: '60vw' }}
    >
      <div className={style.container}>
        <div className={style.title}>Account</div>
        <img className={style.avatar} src={store.user?.avatar_url} alt="Icon" />
        <div className={style.nickname}>
          {store.user?.nickname || 'no nickname'}
        </div>
        <div className={style.username}>
          @
          {store.user?.username}
        </div>
        <div className={style.follower}>
          <span className={style.number1}>100</span>
          Following
          <span className={style.number2}>200</span>
          Followers
        </div>
        <div className={style.listItem} onClick={() => go('my')}>
          <UserOutline />
          <span className={style.info}>
            &nbsp;Profile
          </span>
        </div>
        <div className={style.footer}>
          Logout
        </div>
      </div>
    </Popup>
  );
};

MyPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyPopup;