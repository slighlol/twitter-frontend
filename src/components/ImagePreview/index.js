import PropTypes from 'prop-types';
import { Image } from 'antd-mobile';
import classNames from 'classnames';
import { CloseOutline } from 'antd-mobile-icons';

import style from './index.module.scss';

/**
* Image preview component
* Max 4 images
* 1: use entire space
* 2: left + right
* 3: left 1 + right 2
* 4: left 2 + right 2
*/

const ImagePreview = ({
  imgs,
  handleDelImg,
}) => {
  if (!imgs || imgs.length === 0) return null;
  const getWrapper = () => {
    switch (imgs.length) {
      case 1:
        return style.wrapper1;
      case 2:
        return style.wrapper2;
      case 3:
        return style.wrapper3;
      case 4:
        return style.wrapper4;
      default:
        return style.wrapper;
    }
  };

  return ( // style.xxx will become hash, can't use with index. Wrapper will avoid 'img' conflict
  // before classnames npm => `${style.wrapper} ${getWrapper()}` & `${style.img} img${index}`
    <div className={style.container}>
      <div className={classNames(style.wrapper, getWrapper())}>
        {imgs.map((img, index) => (
          <div key={classNames(img, index)} className={classNames(style.img, `img${index}`)}>
            <CloseOutline className={style.close} onClick={() => handleDelImg(index)} />
            <Image fit="cover" className={style.itemImg} src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  handleDelImg: PropTypes.func.isRequired,
};

ImagePreview.defaultProps = {
  imgs: [],
};

export default ImagePreview;
