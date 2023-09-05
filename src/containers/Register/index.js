/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useEffect, useState } from 'react';
import Show from '@components/Show';
import { registerUser } from '@services/register';
import { Toast } from 'antd-mobile';
import { useAppContext } from '@utils/context';
import { useNavigate } from 'react-router-dom';
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

  const [, setStore] = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }
  }, [step]);

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

  return (
    <div>
      <Show visible={step === STEP.ONE}>
        <OneStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO} isMount>
        <TwoStep
          userInfo={userInfo}
          goToOneStepHanlder={() => setStep(STEP.ONE)}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;