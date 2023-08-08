/* eslint-disable linebreak-style */
import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const initialValues = {
  username: 'test1',
  password: 'pass1',
};

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'login success',
      });
      return;
    }
    Dialog.alert({
      content: 'login failed',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        )}
      >

        <Form.Item label="Username" name="username">
          <Input placeholder="Please Enter Username" clearable />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Please Enter Password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
