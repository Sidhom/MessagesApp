import React, { forwardRef } from 'react';
import styles from './Input.css';

const Input = forwardRef(({ type, action, autoComplete, values, required, pattern }, ref) => {
return <input className={styles.container} ref={ref} type={type} pattern={pattern} {...values} required={required} autoComplete={autoComplete}
onKeyDown={event => {event.key === 'Enter'? action() : undefined }}
            />
    });

export default Input;