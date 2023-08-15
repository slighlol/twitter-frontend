/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import { Input, Button } from 'antd-mobile';

import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';
import style from './index.module.css';

/**
 * registration page
 */

const Register = () => {
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.fromTitle}>Create Account</div>
        <Input placeholder="Username" className={style.input} />
        <Input placeholder="Phone Number" className={style.input} />
        <div className={style.changeTypeButton}>Switch to Email Login</div>
        <div className={style.birthdayTitle}>Your Date of Birth</div>
        <div>This info will not be public. </div>
        <DatePickerInput />
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>Next</Button>
      </div>
    </div>
  );
};

export default Register;