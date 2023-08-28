/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import { Form } from 'antd-mobile';
import { PropTypes } from 'prop-types';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Footer from './Footer';

import style from '../index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'TEL',
  EMAIL: 'EMAIL',
};

/**
 * registration page
 */

const OneStep = ({
  gotoNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '20230819',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      gotoNextStepHandler(validate);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <div className={style.form}>
        <div className={style.formTitle}>Create Account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'username is empty' }]}>
            <TInput length={50} label="Username" />
          </Form.Item>

          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item name="tel" rules={[{ required: true, message: 'phone number is invalid', pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ }]}>
            <TInput length={11} label="Phone Number" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item name="email" rules={[{ required: true, message: 'email is invalid', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g }]}>
            <TInput label="Email" />
          </Form.Item>
          )}
          <Form.Item>
            <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
              {accountType === ACCOUNT_TYPE.EMAIL ? 'Switch to Phone Login' : 'Switch to Email Login'}
            </span>
            <div className={style.birthdayTitle}>Your Date of Birth</div>
            <div>This info will not be public. </div>
          </Form.Item>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer label="Next" disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};

OneStep.propTypes = {
  gotoNextStepHandler: PropTypes.func.isRequired,
};

export default OneStep;