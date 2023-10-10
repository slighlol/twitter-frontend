import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

// get current menu
export const useCurMenu = () => {
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it || {};
};

// collect route redirect
export const useGoto = () => {
  const navigate = useNavigate();

  return (key, params) => {
    if (!key) {
      return navigate(-1);
    }
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    // tweet/:id
    const link = generatePath(it.link, params);
    return navigate(link);
  };
};

export const useIncludeMenu = () => {
  const lo = useLocation();
  const result = includeMenu(lo.pathname);
  return result;
};

const MAXY = 100;

/**
 * DEMO only -
 * uncomment const tip = usePullToRefresh(); in tweets
 * put {tip} under <div className={style.container}> in tweets
 * Pull to refresh hooks
 */
export const usePullToRefresh = () => {
  const y = useRef(0);
  const [tip, setTip] = useState();
  // scrollTop == 0
  // document.documentElement.scrollTop == 0;
  // touchstart touchmove touchend
  // y axis deviation
  // maximum deviation maxY
  useEffect(() => {
    // touch could be an array
    window.ontouchstart = (e) => {
      if (document.documentElement.scrollTop === 0) {
        y.current = e.touches[0].pageY;
      }
    };

    window.ontouchmove = (e) => {
      if (document.documentElement.scrollTop === 0) {
        if (e.touches[0].pageY - y.current > MAXY) {
          setTip('Release to refresh');
          return;
        }
        if (e.touches[0].pageY - y.current > 0) {
          setTip('Pull to refresh');
        }
      }
    };
    return () => {
      window.ontouchstart = null;
      window.ontouchmove = null;
    };
  }, []);

  useEffect(() => {
    window.ontouchend = () => {
      if (document.documentElement.scrollTop === 0) {
        if (tip === 'Release to refresh') {
          setTip('Loading...');
          setTimeout(() => {
            setTip('Refresh success');
            setTimeout(() => {
              setTip('');
            }, 500);
          }, 1000);
          return;
        }
        setTip('');
      }
    };
    return () => {
      window.ontransitionend = null;
    };
  }, [tip]);

  return tip;
};

const OFFSET = 50;
/**
 * InfiniteScroll
 */
export const useDownLoad = () => {
  const [loading, setLoading] = useState(false);
  // determine is bottom
  // 1:
  // A document.documentElement.clientHieght (browser's height)
  // B document.body.scrollHeight (content's actual height, larger than browser's height)
  // C document.documentElement.scrollTop (D + B = C)
  // 2:
  // reach bottom meaning => scrollTop + clientHeight = scrollHeight;
  // 3:
  // OFFSET deviation
  // scrollTop + clientHeight >= scrollHeight - OFFSET
  // put <div style={{ height: 50 }}> {loading && 'Loading...'} </div> after </PullToRefresh>
  useEffect(() => {
    window.onscroll = () => {
      if (loading) {
        return;
      }
      const { clientHeight, scrollTop } = document.documentElement;
      const { scrollHeight } = document.body;
      if (scrollTop + clientHeight >= scrollHeight - OFFSET) {
        setLoading(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log('finish');
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return loading;
};