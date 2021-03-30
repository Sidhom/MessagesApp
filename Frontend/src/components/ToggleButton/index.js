import React from 'react';
import style from './ToggleButton.css';

const ToggleButton = ({ value, onChange }) => {
    return <label className={style.switch} role='switchButton'>
    <input type="checkbox" test-id='switchBox' checked={value} onChange={onChange}/>
    <span className={`${style.slider} ${style.round}`}></span>
  </label>
  
}
export default ToggleButton;