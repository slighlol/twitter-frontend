import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import likeRedSvg from '@assets/likeRed.svg';
import upSvg from '@assets/up.svg';
import msgSvg from '@assets/msg.svg';

import { LinkOutline } from 'antd-mobile-icons';
import style from './index.module.scss';

/**
 * Constants for Bar Key
*/
export const BAR_KEYS = {
  STAR: 'star',
  MSG: 'msg',
  CYCLE: 'cycle',
  UP: 'up',
};
/**
 * Get Bar
 */
export const getBars = ({
  commentsCount, // Comment counts
  likesCount, // Like count
  nav, // navigate to
  id, // id
  onlyStar, // only show like button
  liked,
}) => {
  if (onlyStar) {
    return [{
      key: BAR_KEYS.STAR,
      icon: (
        <div>
          {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
            : <img className={style.icon} src={starSvg} alt="" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),
    }];
  }

  return [{
    key: BAR_KEYS.MSG,
    icon: (
      <div onClick={() => nav(`/comment/${id}`)}>
        <img className={style.icon} src={msgSvg} alt="" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.CYCLE,
    icon: <img className={style.icon} src={cycleSvg} alt="" />,
  },
  {
    key: BAR_KEYS.STAR,
    icon: (
      <div>
        {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
          : <img className={style.icon} src={starSvg} alt="" />}
        {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.UP,
    icon: <img className={style.icon} src={upSvg} alt="" />,
  }];
};

/**
 * Constants for Action Key
 */
export const ACTION_KEYS = {
  COPY: 'copy',
  CANCEL: 'cancel',
};

export const ACTIONS = [
  {
    text:
  <div className={style.copyButton}>
    <LinkOutline style={{ marginRight: 10 }} />
    Copy Tweet Link
  </div>,
    key: ACTION_KEYS.COPY,
  },
  {
    text: <div className={style.cancelButton}>Cancel</div>,
    key: ACTION_KEYS.CANCEL,
  },
];

// 点赞的对象，tweet：点赞的是推文，comment：点赞的是评论
export const OBJECT_KEYS = {
  TWEET: 'tweet',
  COMMENT: 'comment',
};