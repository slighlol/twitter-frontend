import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();


  console.log(name);
  const clickHandler = () => {
    alert('login success' + name + ',' + pwd);
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangePwdHandler = (e) => {
    setPwd(e.target.value);
  }


  return (
    <div className="login">
        <div>username:<input onChange={onChangeNameHandler}/></div>
        <div>password:<input type="password" onChange={onChangePwdHandler}/></div>
        <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
}

export default Login;
