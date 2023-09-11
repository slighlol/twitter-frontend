/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import {
  Button, Form, Dialog,
} from 'antd-mobile';
import TInput from '@components/TInput';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '@utils/context';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { login } from '../../services/login';
import style from './index.module.scss';

/**
 * login page
 */

const Login = () => {
  const [form] = Form.useForm();
  const [, setStore] = useAppContext();
  const nav = useNavigate();

  useEffect(() => {
    setStore({
      closeHeaderHandler: null,
    });
  }, []);

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'login success',
        });
        Cookies.set('userId', res.data[0].id);
        nav('/tweets');
        return;
      }
      Dialog.alert({
        content: 'login failed',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>
        Log In Twitter
      </div>
      <Form
        form={form}
        className={style.formContainer}
      >

        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'username cannot be empty' },
          ]}
        >
          <TInput label="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'password cannot be empty' },
          ]}
        >
          <TInput label="Password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>
          Next
        </Button>
      </Form>
      <div className={style.goToRegister}>
        Do not have an account?
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
