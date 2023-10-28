import Header from '@components/Header';
import { useAppContext } from '@utils/context';
import { Button } from 'antd-mobile';
import { Tabs } from 'antd-mobile/es/components/tabs/tabs';
import { useEffect } from 'react';

import style from './index.module.scss';

/**
* My Profile
*/
const My = () => {
  const [store] = useAppContext();
  useEffect(() => {
  }, []);
  return (
    <div className={style.container}>
      <Header title={store.user?.nickname || 'no nickname'} />
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="" />
      <Button className={style.edit}>Edit Profile</Button>
      <div className={style.nickname}>
        {store.user?.nickname || 'no nickname'}
      </div>
      <div className={style.username}>
        @
        {store.user?.username}
      </div>
      <div className={style.follower}>
        <span className={style.number1}>
          100
        </span>
        Following
        <span className={style.number2}>
          200
        </span>
        Followers
      </div>
      <Tabs>
        <Tabs.Tab title="Posts" key="tweet">
          tweet
        </Tabs.Tab>
        <Tabs.Tab title="Replies" key="reply">
          reply
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default My;