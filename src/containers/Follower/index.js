import FollowerItem from '@components/FollowerItem';
import Header from '@components/Header';
import { useAppContext } from '@utils/context';
import { Tabs } from 'antd-mobile';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

const defaultData = {
  total_results: 0, // 该用户的粉丝数
  total_pages: 1, // 显示所有粉丝的页数
  page_number: 1, // 当前是第几页粉丝
  has_next_page: false, // 是否存在下一页，true：存在下一页，false：不存在下一页
  results: [{
    user: {
      id: 1,
      username: 'IU',
      nickname: 'EpikGamingT3',
      avatar_url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    },
    has_followed: false,
  }],
};
/**
*
*/
const Follower = () => {
  const [data, setDate] = useState(defaultData);
  const [store] = useAppContext();
  useEffect(() => {
    console.log('data', data);
    setDate(defaultData);
  }, []);

  const handleFollow = () => {

  };
  const handleCancelFollow = () => {

  };
  return (
    <div className={style.container}>
      <Header title={store.user?.nickname || 'no known'} />
      <Tabs>
        <Tabs.Tab title="关注者" key="follower">
          {data.results.map((item) => (
            <FollowerItem
              avatarUrl={item.user.avatar_url}
              nickname={item.user.nickname}
              username={item.user.username}
              hasFollowed={item.has_followed}
              handleFollow={() => handleFollow(item.user.id)}
              handleCancelFollow={() => handleCancelFollow(item.user.id)}
            />
          ))}
        </Tabs.Tab>
        <Tabs.Tab title="正在关注" key="following">
          {data.results.map((item) => (
            <FollowerItem
              avatarUrl={item.user.avatar_url}
              nickname={item.user.nickname}
              username={item.user.username}
              hasFollowed
              handleFollow={() => handleFollow(item.user.id)}
              handleCancelFollow={() => handleCancelFollow(item.user.id)}
            />
          ))}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Follower;