import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

// get current menu
export const useCurMenu = () => {
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it;
};

// collect route redirect
export const useGoto = () => {
  const navigate = useNavigate();

  return (key) => {
    if (!key) {
      return navigate(-1);
    }
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    return navigate(it.link);
  };
};

export const useIncludeMenu = () => {
  const lo = useLocation();
  const result = includeMenu(lo.pathname);
  return result;
};