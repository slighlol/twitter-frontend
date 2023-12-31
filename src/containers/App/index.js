import Bottom from '@components/Bottom';
import Header from '@components/Header';
import CreateButton from '@components/CreateButton';
import { getUser } from '@services/login';
import { useAppContext } from '@utils/context';
import { Toast } from 'antd-mobile';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useCurMenu } from '@utils/hooks';
import style from './index.module.scss';

const App = () => {
  const [store, setStore] = useAppContext();
  const nav = useNavigate();
  const location = useLocation();
  const menu = useCurMenu();
  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId');
      if (!userId) {
        Toast.show('Please login first');
        nav('/login');
        return;
      }
      if (store.user) {
        return;
      }
      const res = await getUser(userId);
      if (res.data) {
        setStore({
          user: res.data,
        });
        if (location.pathname === '/login') {
          nav('/');
        }
        return;
      }
      nav('/login');
    };
    if (location.pathname !== '/register') {
      init();
    }
  }, [location.pathname]);

  const onClickCreateTweet = () => {
    nav('/createTweet');
  };

  return (
    <div className={style.container}>
      {!menu.hideHeader && <Header />}
      <Outlet />
      {!menu.hidebottom && <Bottom />}
      {(!menu.hideHeader && !menu.hideCreate) && <CreateButton onClick={onClickCreateTweet} /> }
    </div>
  );
};

export default App;