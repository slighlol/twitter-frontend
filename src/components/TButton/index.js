import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
import style from './index.module.scss';

/**
* Generic button
*/

const TButton = ({
  onClick,
  children,
  disabled,
}) => <Button disabled={disabled} className={style.button} onClick={onClick}>{children}</Button>;

TButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TButton;
