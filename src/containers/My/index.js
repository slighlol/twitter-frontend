import Header from '@components/Header';
import TweetCard from '@components/TweetCard';
import { getTweets } from '@services/tweet';
import { useAppContext } from '@utils/context';
import { useGoto } from '@utils/hooks';
import { Button } from 'antd-mobile';
import { Tabs } from 'antd-mobile/es/components/tabs/tabs';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

/**
* My Profile
*/
const My = () => {
  const [store] = useAppContext();
  const [data, setData] = useState([]);
  const go = useGoto();

  useEffect(() => {
    const init = async () => {
      const res = await getTweets();
      setData(res.data);
    };
    init();
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
        <span onClick={() => go('follow')}>Following</span>
        <span className={style.number2}>
          200
        </span>
        <span onClick={() => go('follow')}>Followers</span>
      </div>
      <Tabs>
        <Tabs.Tab title="Posts" key="tweet">
          {data.map((item) => <TweetCard dataSource={item} />)}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default My;