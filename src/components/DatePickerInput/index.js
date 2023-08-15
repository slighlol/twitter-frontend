import datePickerIcon from '../../assets/datepicker-icon.svg';

import style from './index.module.css';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Date of Birth</div>
    <div>
      <span className={style.birthdayPlaceHolder}> MM/DD/YYYY </span>
      <img className={style.datePickerIcon} src={datePickerIcon} alt="datepickerIcon" />
    </div>
  </div>
);