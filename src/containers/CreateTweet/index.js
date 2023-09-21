import TButton from '@components/TButton';
import Header from '@components/Header';
import { useAppContext } from '@utils/context';
import { TextArea, Toast } from 'antd-mobile';
import { useState } from 'react';
import { createTweet } from '@services/tweet';
import { useGoto } from '@utils/hooks';
import ImagePreview from '@components/ImagePreview';
import ImageUpload from '@components/ImageUpload';
import style from './index.module.scss';

/**
*
*/

const CreateTweet = () => {
  const [content, setContent] = useState('');
  const [imgs, setImgs] = useState([]);
  const [store] = useAppContext();
  const go = useGoto();

  const onClickCreate = () => {
    createTweet({
      content,
      files: Object.values(imgs),
    }).then((res) => {
      if (res.success) {
        Toast.show('Post Tweet Success');
        go();
        return;
      }
      Toast.show('Post Tweet Failure');
    });
  };

  const onChangeContent = (v) => {
    setContent(v);
  };

  const onChangeUpFile = (v) => {
    if (v && (Object.keys(v).length + Object.keys(imgs).length) < 5) {
      setImgs((oldV) => ({
        ...oldV,
        ...v,
      }));
      return;
    }
    Toast.show('Max 4 photos');
  };

  const handleDelImg = (index) => {
    const key = Object.keys(imgs).find((item, idx) => idx === index);
    setImgs((item) => {
      const newItem = { ...item };
      delete newItem[key];
      return newItem;
    });
  };

  /**
   *setImgs((item) => ({
      ...item,
      [key]: undefined,
    }));
   */

  return (
    <div className={style.container}>
      <Header>
        <TButton
          disabled={content.length === 0 && Object.keys(imgs).length === 0}
          onClick={onClickCreate}
        >
          Post Tweet

        </TButton>
      </Header>
      <div className={style.content}>
        <div className={style.left}>
          <img className={style.avatar} src={store.user?.avatar_url} alt="" />
        </div>
        <div className={style.right}>
          <TextArea rows={5} value={content} onChange={onChangeContent} ClassName={style.text} placeholder="What is happening?!" />
          <ImagePreview imgs={Object.values(imgs)} handleDelImg={handleDelImg} />
          <div className={style.button}>
            <ImageUpload onChange={onChangeUpFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
