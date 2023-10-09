import {
  List, CellMeasurer, CellMeasurerCache, WindowScroller,
} from 'react-virtualized';
import { useState, useEffect } from 'react';
import { PullToRefresh } from 'antd-mobile';
// import { PullStatus } from 'antd-mobile/es/components/pull-to-refresh'
import TweetCard from '@components/TweetCard';
// import { usePullToRefresh } from '@utils/hooks';

import { getFeeds } from '@services/tweet';
import style from './index.module.scss';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
});

const noRowsRenderer = () => 'Loading...';

/**
* Tweets home page
*/
const Tweets = () => {
  const [data, setData] = useState([]);
  // const tip = usePullToRefresh();
  useEffect(() => {
    const init = async () => {
      const res = await getFeeds();
      setData(res);
    };
    init();
  }, []);

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
      {({ registerChild }) => (
        <div style={sy} key={key} ref={registerChild}>
          <TweetCard dataSource={data[index]} />
        </div>
      )}
    </CellMeasurer>
  );
  return (
    <div className={style.container}>
      <PullToRefresh
        onRefresh={async () => {
          const res = await getFeeds();
          setData((d) => [...d, ...res]);
        }}
      >
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
      </PullToRefresh>
    </div>
  );
};

export default Tweets;
