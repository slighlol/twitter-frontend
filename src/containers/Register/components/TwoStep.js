/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from '../index.module.scss';
import Footer from './Footer';

/**
 * Step 2 Add Password
 */
const TwoStep = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);
  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.TwoStep}>
      <div className={style.form}>
        <div className={style.formTitle}> Create your account </div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name:
            <span>{userInfo.username}</span>
          </div>
          {userInfo.email && (
            <div className={style.showLabel}>
              Email:
              <span>{userInfo.email}</span>
            </div>
          )}
          {userInfo.tel && (
            <div className={style.showLabel}>
              Phone:
              <span>{userInfo.tel}</span>
            </div>
          )}
          <div className={style.showLabel}>
            DoB:
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Enter your password</div>
        <Input className={style.input} onChange={onChangePwd} />
        <div className={style.label}>Enter your password again</div>
        <Input className={style.input} type="password" onChange={onChangeConfirmPwd} />
        {disabled && <div className={style.showTip}>Passwords need to be matched</div>}
      </div>
      <Footer disabled={disabled} label="Confirm Sign Up" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

TwoStep.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  onConfirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    emai: PropTypes.string,
    tel: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default TwoStep;