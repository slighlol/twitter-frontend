/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import Header from '@components/Header';
import Show from '@components/Show';
import { registerUser } from '@services/register';
import { Toast } from 'antd-mobile';
import OneStep from './components/OneStep';
import TwoStep from './components/TwoStep';

// indicate step
const STEP = {
  ONE: 1,
  TWO: 2,
};

/**
 * registration page
 */

const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('Success');
      return;
    }
    Toast.show('Fail');
  };

  const onClickClose = () => {
    setStep(STEP.ONE);
  };

  return (
    <div>
      <Header onClickClose={onClickClose} />
      <Show visible={step === STEP.ONE}>
        <OneStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO}>
        <TwoStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;