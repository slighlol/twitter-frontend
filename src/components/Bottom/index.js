import { TabBar } from 'antd-mobile';
import { useCurMenu, useGoto } from '@utils/hooks';
import { menus } from '@utils/constants';

import style from './index.module.scss';

/**
* Bottom Bar
*/
const Bottom = () => {
  const go = useGoto();
  const menu = useCurMenu();

  const onChangeTabItem = (key) => {
    go(key);
  };

  if (menu.hideHeader) {
    return null;
  }

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          item.isMenu && <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;