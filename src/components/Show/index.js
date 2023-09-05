import PropTypes from 'prop-types';

/**
 * To show or hide component
 * - css 來控制顯示與否 組件緩存
 * - 卸載組建的方式, 不需要緩存
 */

const Show = ({
  visible,
  isMount,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {(!isMount || visible) && children}
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  isMount: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Show;