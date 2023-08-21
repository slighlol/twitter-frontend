/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import datePickerIcon from '../../assets/datepicker-icon.svg';

import style from './index.module.scss';

/**
 * Date Picker
 */

const DatePickerInput = ({
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);

  const onClickDatePicker = () => {
    setVisible(true);
  };

  return (
    <>
      <DatePicker
        title="Select a date"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(moment(val).format('YYYYMMDD'));
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>Date of Birth</div>
        <div>
          <span className={style.birthdayPlaceHolder}>{value ? moment(value).format('MM/DD/YYYY') : 'MM/DD/YYYY' }</span>
          <img className={style.datePickerIcon} src={datePickerIcon} alt="datepickerIcon" />
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;