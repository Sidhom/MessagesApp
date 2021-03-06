import React from 'react';
import styles from './Button.css';

const Button = ({ style, action, label, disabled }) => (
    <div className={style} data-testid="generic-button">
        <button data-testid="buttonTestId" className={ disabled ? styles.disabled : styles.buttonStyle} label={label} disabled={disabled} onClick = {() =>  action() }>{label}</button>
    </div>
)

export default Button;