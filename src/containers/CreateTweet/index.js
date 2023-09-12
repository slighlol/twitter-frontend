import TButton from '@components/TButton';
import Header from '@components/Header';
import IconButton from '@components/IconButton';
import { useAppContext } from '@utils/context';
import { TextArea } from 'antd-mobile';
import { useState } from 'react';
import style from './index.module.scss';

/**
*
*/

const CreateTweet = () => {
  const [content, setContent] = useState('');
  const [store] = useAppContext();

  const onClickCreate = () => {
    setContent();
  };

  const onChangeContent = (v) => {
    setContent(v);
  };

  return (
    <div className={style.container}>
      <Header>
        <TButton disabled={content.length === 0} onClick={onClickCreate}>Post Tweet</TButton>
      </Header>
      <div className={style.content}>
        <div className={style.left}>
          <img className={style.avatar} src={store.user?.avatar_url} alt="" />
        </div>
        <div className={style.right}>
          <TextArea rows={5} value={content} onChange={onChangeContent} ClassName={style.text} placeholder="What is happening?!" />
          <div className={style.button}>
            <IconButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
