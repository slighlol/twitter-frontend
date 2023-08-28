/* eslint-disable linebreak-style */
import {
  Button, Form, Dialog,
} from 'antd-mobile';
import Header from '@components/Header';
import TInput from '@components/TInput';
import { login } from '../../services/login';
import style from './index.module.scss';

/**
 * login page
 */

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'login success',
        });
        return;
      }
      Dialog.alert({
        content: 'login failed',
      });
    }
  };

  return (
    <>
      <Header />
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
          <a
            href="/"
            target="_blank"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
