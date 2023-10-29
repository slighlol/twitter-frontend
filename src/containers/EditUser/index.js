import { useState, useEffect } from 'react';
import Header from '@components/Header';
import { useAppContext } from '@utils/context';

import TInput from '@components/TInput';
import TButton from '@components/TButton';
import style from './index.module.scss';

/**
*
*/
const EditUser = () => {
  const [data, setData] = useState();
  const [store] = useAppContext();
  useEffect(() => {
    console.log('data', data);
    setData([]);
  }, []);
  return (
    <div className={style.container}>
      <Header>
        <TButton>Save</TButton>
      </Header>
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="" />
      <div className={style.content}>
        <TInput label="Full name" />
      </div>
    </div>
  );
};

export default EditUser;