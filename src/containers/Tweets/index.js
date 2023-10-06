import { useState, useEffect } from 'react';

import TweetCard from '@components/TweetCard';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  List, CellMeasurer, CellMeasurerCache, WindowScroller,
} from 'react-virtualized';
import style from './index.module.scss';
/**
* Tweets home page
*/

const tweet = {
  id: 1, // 推文id
  user: {
    id: 2, // 发送该推文的用户id
    username: 'EpikGaming', // 发送该推文的用户名
    nickname: 'EpikGamingT3', // 发送该推文的用户昵称
    avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该推文的用户头像地址
  }, // 发送该推文的用户信息
  comments: [
    {
      id: 1, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: null, // 发送该评论的用户昵称
        avatar_url: null, // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 0, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
  ], // 该推文的评论集
  created_at: '2021-12-18T07:38:01.699129Z', // 该推文的创建时间
  content: 'Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // 该推文的文本内容
  likes: [], // 哪些用户点赞了这条推文
  likes_count: 10, // 该推文的点赞数
  comments_count: 122, // 该推文的评论数
  has_liked: false, // 当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  photo_urls: ['https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuKXKJeqzfVVrwwS6IZ0NfZUwaxMoXiJkeya7tUM04zl3BJtbbbx2rThPKxwpXeufwbc&usqp=CAU',
    'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    'https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
  ], // 该推文的图片地址集
};

const tweet1 = {
  id: 1, // 推文id
  user: {
    id: 2, // 发送该推文的用户id
    username: 'EpikGaming', // 发送该推文的用户名
    nickname: 'EpikGamingT3', // 发送该推文的用户昵称
    avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该推文的用户头像地址
  }, // 发送该推文的用户信息
  comments: [
    {
      id: 1, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: null, // 发送该评论的用户昵称
        avatar_url: null, // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 0, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
  ], // 该推文的评论集
  created_at: '2021-12-18T07:38:01.699129Z', // 该推文的创建时间
  content: 'I am sorry', // 该推文的文本内容
  likes: [], // 哪些用户点赞了这条推文
  likes_count: 10, // 该推文的点赞数
  comments_count: 122, // 该推文的评论数
  has_liked: false, // 当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  photo_urls: [
    'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    'https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
  ], // 该推文的图片地址集
};

const defaultData = [];

for (let i = 0; i < 100; i += 1) {
  if (Math.random() < 0.5) {
    defaultData.push(tweet1);
  } else {
    defaultData.push(tweet);
  }
}

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
});

const Tweets = () => {
  const [data, setData] = useState(defaultData);
  useEffect(() => {
    console.log('data', data);
    setData(defaultData);
  }, []);
  const noRowsRenderer = () => 'Loading...';
  const rowRenderer = ({
    key, style: sy, index, parent,
  }) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}
    >
      {(registerChild) => (
        <div style={sy} key={key} ref={registerChild}>
          <TweetCard dataSource={data[index]} />
        </div>
      )}
    </CellMeasurer>
  );
  return (
    <div className={style.container}>
      <WindowScroller>
        {({
          height, width, isScrolling, registerChild, onChildScroll, scrollTop,
        }) => (
          <div ref={registerChild}>
            <List
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              autoHeight
              height={height}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              overscanRowCount={2}
              noRowsRenderer={noRowsRenderer}
              rowCount={data.length}
              rowRenderer={rowRenderer}
              width={width}
            />
          </div>
        )}
      </WindowScroller>
    </div>
  );
};

export default Tweets;
