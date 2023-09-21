import IconButton from '@components/IconButton';
import createTweetIcon from '@assets/createTweet.svg';
import PropTypes from 'prop-types';
import { fileByBase64 } from '@utils/index';
import style from './index.module.scss';

/**
* Image upload component
*/

const ImageUpload = ({
  onChange,
}) => {
  const onChangeUpFile = (e) => {
    const { files } = e.target;
    const fls = Object.values(files);
    const flss = fls.map((f) => new Promise((r) => {
      fileByBase64(f).then((res) => {
        r({
          key: f.name,
          content: res,
        });
      });
    }));
    Promise.all(flss).then((res) => {
      const result = {};
      res.forEach((item) => {
        result[item.key] = item.content;
      });
      onChange(result);
    });
    e.target.value = '';
  };
  return (
    <div className={style.container}>
      <input type="file" encType="multipart/form-data" accept="image/gif.image/jpg" className={style.upFile} multiple="multiple" onChange={onChangeUpFile} />
      <IconButton
        src={createTweetIcon}
        className={style.imageButton}
        svgClass={style.imageUpload}
      />
    </div>
  );
};

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUpload;